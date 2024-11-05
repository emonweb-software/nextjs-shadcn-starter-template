import { siteConfig } from './metadata';

export default async function sitemap() {
  // TODO: Get all your dynamic routes here
  const dynamicRoutes: string[] = [];

  const routes = dynamicRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return routes
} 