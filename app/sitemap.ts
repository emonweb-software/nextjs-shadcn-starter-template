export default async function sitemap() {
  // TODO: Get all your dynamic routes here
  const dynamicRoutes: string[] = [];

  const routes = dynamicRoutes.map(route => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000"}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
