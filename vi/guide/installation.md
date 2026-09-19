# Cài đặt

Galaxy UI sao chép source component có thể chỉnh sửa vào dự án, theo tư tưởng shadcn nhưng hỗ trợ nhiều framework.

## Yêu cầu

- Node.js 18+ hoặc Bun 1+
- npm, pnpm, Yarn hoặc Bun
- Vue 3, React 18+, Angular 20+, React Native hoặc Flutter
- Tailwind CSS v3.4 hoặc v4 cho dự án web

## Khởi tạo

```bash
npx @galaxy-stack/nebula-cli@latest init
```

CLI phát hiện framework, package manager, cấu trúc source và major version của Tailwind; sau đó tạo `components.json`, utilities/runtime, alias và cài đúng phiên bản dependency.

::: tip Target framework và source package
Next.js dùng registry React kèm biến đổi dành cho Next. Nuxt dùng registry Vue với đường dẫn tương thích Nuxt. Đây là target của CLI, không phải package component riêng.
:::

## Thêm component

```bash
npx @galaxy-stack/nebula-cli@latest add button
npx @galaxy-stack/nebula-cli@latest add button input dialog
npx @galaxy-stack/nebula-cli@latest add --all
```

Source được giữ trong repository để bạn chỉnh sửa. Dependency npm và dependency giữa các component được lấy từ registry tương ứng.

## Cấu hình

```json
{
  "$schema": "https://galaxy-design.vercel.app/schema.json",
  "framework": "vue",
  "typescript": true,
  "tailwind": {
    "version": 4,
    "config": "",
    "css": "src/assets/styles/global.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib"
  },
  "iconLibrary": "lucide"
}
```

Với Tailwind v3, CLI giữ `tailwind.config.*`. Với v4, CLI sinh semantic theme bridge theo kiểu CSS-first. Xem [Tailwind CSS](/vi/guide/tailwind).

## Chuyển từ v3 sang v4

```bash
npx @galaxy-stack/nebula-cli@latest migrate tailwind --dry-run
npx @galaxy-stack/nebula-cli@latest migrate tailwind --yes
```

Hãy xem các cảnh báo tương thích và giữ bản sao lưu trong `.galaxy/backups/` cho tới khi ứng dụng build thành công.
