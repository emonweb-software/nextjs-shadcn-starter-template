# Nextjs Shadcn Starter Template

## Thông tin cơ bản

- CE: `Visual Studio Code`
- Language: `TS`
- Framework: `Next.js`
- Lib: `Axios` , `Shadcn`

## Cấu trúc

```
.
├── app
│   ├── assets
│   └── types
├── components
│   ├── ui
│   └── ...main components
├── lib
└── ...main app files
```

## Tính năng cơ bản

### Trải nghiệm người dùng (UX)

- **Theme Mode**:
  - Sáng/Tối tùy chỉnh
  - Tự động theo hệ thống hoặc giờ mặt trời
- **Form Validation**: Kiểm tra và xử lý dữ liệu form trước khi gửi, với thông báo lỗi rõ ràng với `React Hook Form`
- **Multi-language Support**:
  - Vi
  - En

### Giao diện người dùng (UI)

- **Search Functionality**: Tính năng tìm kiếm nhanh, tự động gợi ý kết quả.
  - **Caching**
  - **Highlighting**
  - **Debouncing** với `lodash`
- **Error Pages**:
  - **404 - Not Found**
  - **500 - Internal Server Error**

### Tối ưu công cụ tìm kiếm (SEO)

- **Meta Tags Optimization**: Tối ưu các thẻ meta (title, description, keywords) để cải thiện SEO.
- **Structured Data**: Áp dụng dữ liệu có cấu trúc (Schema.org) để giúp công cụ tìm kiếm hiểu nội dung.
- **Sitemap & Robots.txt**: Tạo sitemap và tệp robots.txt để hướng dẫn các công cụ tìm kiếm.
- **Accessible URLs**: Đảm bảo URL dễ đọc và thân thiện với SEO.

### Tối ưu hiệu suất (Performance)

- **Lazy Loading**: Tải dữ liệu khi cần thiết (tối ưu hóa tốc độ trang).
- **Image Optimization**: Tối ưu hình ảnh để tải nhanh hơn mà không làm giảm chất lượng.
- **Caching**: Áp dụng caching để cải thiện thời gian phản hồi trang.

## Guide

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
