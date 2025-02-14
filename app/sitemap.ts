interface ISitemap {
  url: string;
  lastModified: string;
}

export default async function sitemap(): Promise<ISitemap[]> {
  // TODO: Get all your dynamic routes here
  const dynamicRoutes: string[] = [];

  return dynamicRoutes.map(route => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000"}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
