# Nextjs Shadcn Starter Template

[![Tiếng Việt](https://img.shields.io/badge/lang-vietnamese-blue.svg)](README.vi.md) [![Tiếng Anh](https://img.shields.io/badge/lang-english-blue.svg)](README.md)

## Giới thiệu

Chào mừng đến với Nextjs Shadcn Starter Template! Dự án này là nền tảng mạnh mẽ để xây dựng các ứng dụng web hiện đại sử dụng Next.js và TypeScript. Với sự tập trung vào trải nghiệm người dùng, hiệu suất và SEO, template này tích hợp các tính năng bắt buộc như hỗ trợ nhiều ngôn ngữ, kiểm tra và xử lý dữ liệu form, và tối ưu hóa tải hình ảnh.

Dù bạn là một lập trình viên có kinh nghiệm hay mới bắt đầu, template này cung cấp một cách tiếp cận cấu trúc để phát triển các ứng dụng có thể mở rộng. Hãy khám phá các tính năng và cấu trúc, và tùy chỉnh nó để phù hợp với nhu cầu dự án của bạn!

## Thông tin cơ bản

- Ngôn ngữ: `TS`
- Khung mã: `Next.js`
- Thư viện: `Axios` , `Shadcn`, `Next-intl`, `Zod`, `React Hook Form`, `Tailwind CSS`, `Lucide`, `clsx`, `Redux`, `Redux Toolkit`

## Cấu trúc

```
.
├── app/
│   ├── assets
│   └── types
├── components/
│   ├── ui
│   ├── form
│   └── ...main components
├── helpers/
├── hooks/
├── i18n/
├── lib/
├── messages/
├── services/
├── types/
└── ...tệp chính của dự án
```

## Tính năng cơ bản

### Trải nghiệm người dùng (UX)

- **Theme Mode**:
  - Sáng/Tối tùy chỉnh
  - Tự động theo hệ thống hoặc giờ mặt trời
- **Form Validation**: Kiểm tra và xử lý dữ liệu form trước khi gửi, với thông báo lỗi rõ ràng với `React Hook Form`
- **Multi-language Support**:
  - Vi: Tiếng Việt
  - En: Tiếng Anh

### Giao diện người dùng (UI)

- **Search Functionality**: Tính năng tìm kiếm nhanh, tự động gợi ý kết quả.
  - **Caching**
  - **Highlighting**
  - **Debouncing** với `lodash`
- **Error Pages**:
  - 404 - Không tìm thấy
  - Các trang lỗi khác

### Tối ưu công cụ tìm kiếm (SEO)

- **Meta Tags Optimization**: Tối ưu các thẻ meta (title, description, keywords) để cải thiện SEO.
- **Structured Data**: Áp dụng dữ liệu có cấu trúc (Schema.org) để giúp công cụ tìm kiếm hiểu nội dung.
- **Sitemap & Robots.txt**: Tạo sitemap và tệp robots.txt để hướng dẫn các công cụ tìm kiếm.
- **Accessible URLs**: Đảm bảo URL dễ đọc và thân thiện với SEO.

### Tối ưu hiệu suất (Performance)

- **Lazy Loading**: Tải dữ liệu khi cần thiết (tối ưu hóa tốc độ trang).
- **Image Optimization**: Tối ưu hình ảnh để tải nhanh hơn mà không làm giảm chất lượng.
- **Caching**: Áp dụng caching để cải thiện thời gian phản hồi trang.

## Hướng dẫn

### Bắt đầu

Đầu tiên, hãy chạy máy chủ phát triển:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

Mở [http://localhost:3000](http://localhost:3000) bằng trình duyệt của bạn để xem kết quả.

Bạn có thể bắt đầu chỉnh sửa trang bằng cách sửa đổi `app/page.tsx`. Trang sẽ tự động cập nhật khi bạn chỉnh sửa tệp.

Dự án này sử dụng [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) để tự động tối ưu hóa và tải [Geist](https://vercel.com/font), một họ phông chữ mới cho Vercel.

### Tìm hiểu thêm

Để tìm hiểu thêm về Next.js, hãy xem các tài nguyên sau:

- [Tài liệu Next.js](https://nextjs.org/docs) - tìm hiểu về các tính năng và API của Next.js.
- [Tìm hiểu Next.js](https://nextjs.org/learn) - hướng dẫn tương tác về Next.js.

Bạn có thể xem [kho lưu trữ GitHub Next.js](https://github.com/vercel/next.js) - chúng tôi hoan nghênh phản hồi và đóng góp của bạn!

### Triển khai trên Vercel

Cách dễ nhất để triển khai ứng dụng Next.js của bạn là sử dụng [Nền tảng Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) từ những người tạo ra Next.js.

Hãy tham khảo [Tài liệu triển khai Next.js](https://nextjs.org/docs/app/building-your-application/deploying) của chúng tôi để biết thêm chi tiết.

### Giấy phép

Dự án này được cấp phép theo Giấy phép MIT. Xem tệp [LICENSE](LICENSE) để biết chi tiết.

### Đóng góp

- [Quy ước tin nhắn cam kết](https://gist.github.com/brianclements/841ea7bffdb0e894c32b)
- [Tin nhắn cam kết Git](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)
- [Mô hình phân nhánh Git](https://nvie.com/posts/a-successful-git-branching-model/)
