# Sử dụng CLI

CLI hiện có các luồng lệnh: `init`, `add`, `list`, `doctor`, `diff`, `update` và `migrate tailwind`.

## `init`

```bash
npx @galaxy-stack/nebula-cli@latest init
npx @galaxy-stack/nebula-cli@latest init --yes
npx @galaxy-stack/nebula-cli@latest init --cwd ./my-app
```

Lệnh này phát hiện framework và Tailwind, tạo `components.json`, cấu hình alias/runtime và cài dependency tương thích.

## `add`

```bash
npx @galaxy-stack/nebula-cli@latest add button
npx @galaxy-stack/nebula-cli@latest add button input dialog
npx @galaxy-stack/nebula-cli@latest add --all
npx @galaxy-stack/nebula-cli@latest add button --cwd ./my-app
```

Không truyền tên component sẽ mở bộ chọn tương tác. CLI giải dependency giữa component trước, giữ nguyên file đã tồn tại, và trả exit code khác 0 khi component, source file hoặc bước cài dependency thất bại.

## `migrate tailwind`

```bash
npx @galaxy-stack/nebula-cli@latest migrate tailwind --dry-run
npx @galaxy-stack/nebula-cli@latest migrate tailwind --yes
npx @galaxy-stack/nebula-cli@latest migrate tailwind --cwd ./my-app
```

Lệnh tạo backup trong `.galaxy/backups/`, cập nhật package/config và liệt kê các mục cần kiểm tra thủ công. Xem [Tailwind CSS](/vi/guide/tailwind).

## `list`

Hiển thị các component và block có thể cài cho framework đã cấu hình (hoặc framework truyền vào).

```bash
npx @galaxy-stack/nebula-cli@latest list
npx @galaxy-stack/nebula-cli@latest list --framework react
npx @galaxy-stack/nebula-cli@latest list --category feedback
```

## `doctor`

Kiểm tra cấu hình dự án: `components.json`, phát hiện framework, phiên bản Tailwind và animation setup, đường dẫn utils/components, và các dependency bắt buộc. Exit code khác 0 khi có check bắt buộc thất bại.

```bash
npx @galaxy-stack/nebula-cli@latest doctor
npx @galaxy-stack/nebula-cli@latest doctor --cwd ./my-app
```

## `diff`

So sánh file local với registry (pinned source). Exit code khác 0 khi file bị missing hoặc modified:

```bash
npx @galaxy-stack/nebula-cli@latest diff button
```

## `update`

Tải lại source từ registry và ghi đè file local, backup vào `.galaxy/backups/update/`:

```bash
npx @galaxy-stack/nebula-cli@latest update button
```
