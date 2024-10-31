# Nextjs Shadcn Starter Template

[![English](https://img.shields.io/badge/lang-english-blue.svg)](README.md) [![Vietnamese](https://img.shields.io/badge/lang-vietnamese-blue.svg)](README.vi.md)

## Introduction

Welcome to the Nextjs Shadcn Starter Template! This project serves as a robust foundation for building modern web applications using Next.js and TypeScript. With a focus on user experience, performance, and SEO, this template incorporates essential features such as multi-language support, form validation, and optimized image loading.

Whether you're a seasoned developer or just starting out, this template provides a structured approach to developing scalable applications. Dive in to explore the features and structure, and customize it to fit your project's needs!

## Basic information

- Language: `TS`
- Framework: `Next.js`
- Lib: `Axios` , `Shadcn`, `Next-intl`, `Zod`, `React Hook Form`, `Tailwind CSS`, `Lucide`, `clsx`, `Redux`, `Redux Toolkit`

## Structure

```
.
├── app/
│   ├── assets
│   └── types
├── components
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
└── ...main project files
```

## Basic Features

### User Experience (UX)

- **Theme Mode**:
  - Custom Light/Dark
  - Auto system or solar time
- **Form Validation**: Check and process form data before submitting, with clear error messages with `React Hook Form`
- **Multi-language Support**:
  - Vi: Vietnamese
  - En: English

### User Interface (UI)

- **Search Functionality**: Fast search feature, automatically suggesting results.
- **Caching**
- **Highlighting**
- **Debouncing** with `lodash`
- **Error Pages**:
  - 404 - Not Found
  - Other error pages

### Search Engine Optimization (SEO)

- **Meta Tags Optimization**: Optimize meta tags (title, description, keywords) to improve SEO.
- **Structured Data**: Apply structured data (Schema.org) to help search engines understand the content.
- **Sitemap & Robots.txt**: Create a sitemap and robots.txt file to guide search engines.
- **Accessible URLs**: Ensure URLs are readable and SEO friendly.

### Performance

- **Lazy Loading**: Load data when needed (optimize page speed).
- **Image Optimization**: Optimize images to load faster without losing quality.
- **Caching**: Apply caching to improve page response time.

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

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contributing

- [Commit Message Convention](https://gist.github.com/brianclements/841ea7bffdb0e894c32b)
- [Git Commit Messages](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)
- [Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
