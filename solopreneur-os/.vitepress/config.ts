import { defineConfig } from 'vitepress'
import { VitePWA } from 'vite-plugin-pwa'

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365

export default defineConfig({
  title: 'Solo-OS',
  description: 'Personal Operating System for Solopreneurs',
  cleanUrls: true,
  ignoreDeadLinks: true,
  
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Solo-OS',
          short_name: 'Solo-OS',
          description: 'Personal Operating System for Solopreneurs',
          theme_color: '#1a1a1a',
          background_color: '#1a1a1a',
          display: 'standalone',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: ONE_YEAR_IN_SECONDS
                }
              }
            }
          ]
        }
      })
    ]
  },
  
  themeConfig: {
    search: {
      provider: 'local'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Daily', link: '/reviews/daily/template' },
      { text: 'Weekly', link: '/reviews/weekly/template' }
    ],
    
    sidebar: [
      {
        text: 'Foundation',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Ambitious Realism', link: '/ambitious_realism' },
          { text: 'North Star', link: '/north_star' },
          { text: 'Principles', link: '/principles' }
        ]
      },
      {
        text: 'Reviews',
        collapsed: false,
        items: [
          { text: 'Daily Template', link: '/reviews/daily/template' },
          { text: 'Weekly Template', link: '/reviews/weekly/template' },
          { text: 'Monthly Template', link: '/reviews/monthly/template' },
          { text: 'Annual Template', link: '/reviews/annual/template' }
        ]
      },
      {
        text: 'Frameworks',
        collapsed: true,
        items: [
          { text: 'Annual Review', link: '/frameworks/annual_review' },
          { text: 'Vivid Vision', link: '/frameworks/vivid_vision' },
          { text: 'Ideal Life Costing', link: '/frameworks/ideal_life_costing' },
          { text: 'Life Map', link: '/frameworks/life_map' },
          { text: 'Leverage Audit', link: '/frameworks/leverage_audit' },
          { text: 'Energy Architecture', link: '/frameworks/energy_architecture' }
        ]
      },
      {
        text: 'Interviews',
        collapsed: true,
        items: [
          { text: 'Past Year Reflection', link: '/interviews/past_year_reflection' },
          { text: 'Identity & Values', link: '/interviews/identity_and_values' },
          { text: 'Future Self', link: '/interviews/future_self_interview' },
          { text: 'Honest Capacity Check', link: '/interviews/honest_capacity_check' }
        ]
      },
      {
        text: 'Tracking',
        collapsed: false,
        items: [
          { text: 'Metrics Dictionary', link: '/tracking/metrics_dictionary' },
          { text: 'Tag Index', link: '/tracking/tag_index' }
        ]
      },
      {
        text: 'Goals',
        collapsed: true,
        items: [
          { text: '1 Year', link: '/goals/1_year' },
          { text: '3 Year', link: '/goals/3_year' },
          { text: '10 Year', link: '/goals/10_year' }
        ]
      }
    ],
    
    footer: {
      message: 'Dream big enough to matter, stay honest enough to execute.',
    }
  },
  
  head: [
    ['meta', { name: 'theme-color', content: '#1a1a1a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }]
  ]
})
