// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],
app: {
    baseURL: '/'
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://gegenwind-sexau.de',
      siteName: 'Gegenwind Sexau',
      siteDescription: 'Eine Petition gegen die geplanten Windparks im Sexauer Peterswald. Artenschutz, Denkmalschutz, Infraschall und Folgen für die Gemeinde Sexau.',
    }
  },

  devtools: {
    enabled: true
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      // sitemap.xml wird nicht prerendered während Seite nicht indexiert werden soll
      ignore: ['/robots.txt', '/sitemap.xml']
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})