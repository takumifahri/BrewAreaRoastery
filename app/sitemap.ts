import { MetadataRoute } from 'next'
import { BrewRepository } from '@/services/brew-service'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brewamdroastery.com'

  // Generate sitemap for brewing methods
  const brewMethods = BrewRepository.getAll().map((method) => ({
    url: `${baseUrl}/brew/${method.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...brewMethods,
  ]
}
