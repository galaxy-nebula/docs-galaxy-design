#!/usr/bin/env node
/**
 * Update the docs coverage matrix from the canonical manifest artifacts.
 * Reads ../galaxy-design/packages/contracts/generated/coverage.json and the
 * CLI block registries, then rewrites the coverage table rows.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(new URL('..', import.meta.url).pathname);
const generatedRoot = path.resolve(
  docsRoot,
  '..',
  'galaxy-design',
  'packages',
  'contracts',
  'generated',
);

const coverage = JSON.parse(
  readFileSync(path.join(generatedRoot, 'coverage.json'), 'utf-8'),
);

const cliRegistriesRoot = path.resolve(
  docsRoot,
  '..',
  'galaxy-design-cli',
  'src',
  'registries',
);

const FRAMEWORKS = ['react', 'vue', 'angular', 'react-native', 'flutter'];

const blockCounts = {};
for (const framework of FRAMEWORKS) {
  try {
    const data = JSON.parse(
      readFileSync(path.join(cliRegistriesRoot, `blocks-${framework}.json`), 'utf-8'),
    );
    blockCounts[framework] = Object.keys(data.components).length;
  } catch {
    blockCounts[framework] = 0;
  }
}

const totals = {};
for (const framework of FRAMEWORKS) {
  totals[framework] = coverage.frameworks[framework].available.length + blockCounts[framework];
}

const webShared = FRAMEWORKS.filter((f) => f !== 'react-native' && f !== 'flutter');
const sharedIds = coverage.frameworks.react.available.filter((id) =>
  webShared.every((framework) => coverage.frameworks[framework].available.includes(id)),
);

const rows = {
  en: {
    react: `| **React 18+** | ${totals.react} | Tailwind CSS v3/v4 + Radix UI | Reference web coverage |`,
    vue: `| **Vue 3** | ${totals.vue} | Tailwind CSS v3/v4 + Radix Vue | Full component parity with React |`,
    angular: `| **Angular 20+** | ${totals.angular} | Tailwind CSS v3/v4 + Radix NG | Full component parity with React |`,
    'react-native': `| **React Native** | ${totals['react-native']} | NativeWind | Mobile-specific coverage |`,
    flutter: `| **Flutter** | ${totals.flutter} | Material Design 3 | Mobile-specific coverage |`,
    note: `The web registries share ${sharedIds.length} base component names, generated from the canonical manifests in \`packages/contracts\`. Framework parity gaps and block counts are recorded in the manifest artifacts.`,
  },
  vi: {
    react: `| **React 18+** | ${totals.react} | Tailwind CSS v3/v4 + Radix UI | Mốc tham chiếu cho web |`,
    vue: `| **Vue 3** | ${totals.vue} | Tailwind CSS v3/v4 + Radix Vue | Đủ component parity với React |`,
    angular: `| **Angular 20+** | ${totals.angular} | Tailwind CSS v3/v4 + Radix NG | Đủ component parity với React |`,
    'react-native': `| **React Native** | ${totals['react-native']} | NativeWind | Phạm vi riêng cho mobile |`,
    flutter: `| **Flutter** | ${totals.flutter} | Material Design 3 | Phạm vi riêng cho mobile |`,
    note: `Ba registry web dùng chung ${sharedIds} component nền, được sinh từ manifest canonical trong \`packages/contracts\`.`,
  },
};

for (const [locale, values] of Object.entries(rows)) {
  const file = locale === 'en'
    ? path.join(docsRoot, 'components', 'overview.md')
    : path.join(docsRoot, 'vi', 'components', 'overview.md');
  let content = readFileSync(file, 'utf-8');
  content = content.replace(/^\| \*\*React 18\+\*.*$/m, values.react);
  content = content.replace(/^\| \*\*Vue 3\*\*.*$/m, values.vue);
  content = content.replace(/^\| \*\*Angular 20\+\*\*.*$/m, values.angular);
  content = content.replace(/^\| \*\*React Native\*\*.*$/m, values['react-native']);
  content = content.replace(/^\| \*\*Flutter\*\*.*$/m, values.flutter);
  content = content.replace(/^The web registries share.*$/m, values.note);
  writeFileSync(file, content);
  console.log(`updated ${file}`);
}
