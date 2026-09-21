/**
 * Fetch the latest @galaxy-stack/nebula-cli version from npm registry.
 * Used at VitePress build time to keep the docs version badge in sync.
 */
export async function getLatestVersion() {
  try {
    const res = await fetch(
      'https://registry.npmjs.org/@galaxy-stack%2fnebula-cli/latest',
      { signal: AbortSignal.timeout(5000) }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return `v${data.version}`;
  } catch {
    return 'v0.3.1'; // fallback — last known version
  }
}
EOF

# Patch shared.ts: export version từ fetch, dùng trong en.ts + vi.ts
cat > /Users/buitronghieu/Desktop/Project/galaxy/docs-galaxy-desgin/.vitepress/config/shared.ts <<'TS'
import { defineConfig } from 'vitepress'
import path from 'path'
import { getLatestVersion } from '../scripts/fetch-version.mjs'

export const CLI_VERSION = await getLatestVersion()

export const sharedConfig = defineConfig({
  title: 'Galaxy UI',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../')
      }
    },
    ssr: {
      noExternal: ['radix-vue', '@internationalized/date'],
      external: ['vue-echarts', 'echarts']
    },
    optimizeDeps: {
      exclude: ['vue-echarts', 'echarts']
    }
  },
TS

# Update en.ts + vi.ts: import CLI_VERSION từ shared + dùng cho badge
apply_patch <<'PATCH'
*** Begin Patch
*** Update File: .vitepress/config/en.ts
@@
-import { sidebarGuide } from './shared'
-import { sidebarComponents } from './shared'
-import { sidebarCharts } from './shared'
-import { sidebarBlocks } from './shared'
-import { sidebarFramework } from './shared'
+import { sharedConfig, sidebarGuide, sidebarComponents, sidebarCharts, sidebarCharts as _sc, sidebarFramework, CLI_VERSION } from './shared'
*** End Patch
PATCH
# Đơn giản hơn: sed thay 'v0.3.1' thành ${CLI_VERSION} template literal
sed -i '' "s|text: 'v0.3.1',|text: CLI_VERSION,|g" .vitepress/config/en.ts .vitepress/config/vi.ts
# Thêm import CLI_VERSION
sed -i '' "1a\\
import { CLI_VERSION } from './shared'
" .vitepress/config/en.ts
sed -i '' "1a\\
import { CLI_VERSION } from './shared'
" .vitepress/config/vi.ts
echo version-dynamic-done