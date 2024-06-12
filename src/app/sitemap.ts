import { MetadataRoute } from "next";

const SiteUrl = process.env.NEXT_PUBLIC_BASE_URL

let Items = Array.from({ length: 10 }, (_v,i) => ({   url: `${SiteUrl}/read/${i+1}`, lastModified: new Date() }));

export default function sitemap(): MetadataRoute.Sitemap {
 
  return [
    {
      url: `${SiteUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/aboutUs`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/articles`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/cafeMenu`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/contactUs`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/imageGallery`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/menus`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/restaurantMenu`,
      lastModified: new Date(),
    },
   ];

}