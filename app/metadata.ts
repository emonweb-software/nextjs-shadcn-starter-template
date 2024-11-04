export const siteConfig = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  url: process.env.NEXT_PUBLIC_APP_URL,
  ogImage: process.env.NEXT_PUBLIC_APP_OG_IMAGE,
  links: {
    twitter: process.env.NEXT_PUBLIC_APP_TWITTER,
    github: process.env.NEXT_PUBLIC_APP_GITHUB
  }
} 