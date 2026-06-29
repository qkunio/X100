import { MetadataRoute } from 'next'
import { withBasePath } from '@/lib/base-path'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'X100 Photographer Portfolio',
    short_name: 'X100',
    description: 'A Next.js portfolio for professional photographers, designed to flawlessly showcase powerful visual stories.',
    start_url: withBasePath('/'),
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: withBasePath('/favicon.ico'),
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
