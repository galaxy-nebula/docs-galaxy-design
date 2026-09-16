# Tailwind CSS

Galaxy UI hỗ trợ **Tailwind CSS v3.4** và **Tailwind CSS v4** cho React, Vue và Angular. `galaxy-design init` tự phát hiện phiên bản và sinh cấu hình phù hợp.

- v3: JavaScript config, `tailwindcss-animate`, PostCSS `tailwindcss` + `autoprefixer`, `tailwind-merge` v2.
- v4: CSS-first `@theme inline`, `tw-animate-css`, `@tailwindcss/postcss`, `tailwind-merge` v3.

## Chuyển v3 sang v4

```bash
npx galaxy-design@latest migrate tailwind --dry-run
npx galaxy-design@latest migrate tailwind --yes
```

CLI tạo backup trong `.galaxy/backups/`, thêm semantic theme bridge cho các utility như `border-border` và `bg-background`, giữ config cũ qua `@config`, đồng thời báo các tùy chọn cần xem lại.

::: warning Chuyển đổi một chiều
CLI tự động chuyển v3 sang v4, nhưng không tự động hạ v4 về v3 vì cấu hình CSS-first không phải lúc nào cũng biểu diễn an toàn bằng JavaScript config của v3.
:::
