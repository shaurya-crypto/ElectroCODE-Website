import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { 
      url: 'https://stratum-studio.vercel.app', 
      lastModified: new Date(), 
      priority: 1 
    },
    { 
      url: 'https://stratum-studio.vercel.app/#features', 
      priority: 0.8 
    },
    { 
      url: 'https://stratum-studio.vercel.app/#download', 
      priority: 0.9 
    }
  ];
}
