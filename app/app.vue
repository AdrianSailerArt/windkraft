<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "de",
  },
});

const title = "Gegenwind Sexau – Petition gegen Windparks im Peterswald";
const description =
  "Eine Petition gegen die geplanten Windparks im Sexauer Peterswald. Artenschutz, Denkmalschutz, Infraschall, Rückbau und Folgen für die Gemeinde Sexau.";

const config = useRuntimeConfig();
const siteUrl = config.public?.siteUrl || 'https://gegenwind-sexau.de';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: siteUrl,
  ogSiteName: 'Gegenwind Sexau',
  twitterCard: "summary_large_image",
  twitterSite: '@gegenwindSexau',
  author: 'Heidrun Schwörer',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
});

useHead({
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'alternate', hrefLang: 'de', href: `${siteUrl}/` },
  ],
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Gegenwind Sexau" class="h-8 w-8" />
          <span class="font-bold text-lg">Gegenwind Sexau</span>
        </NuxtLink>

        <NavigationMenu />
      </template>

      <template #right>
        <div class="flex items-center gap-4">
          <UColorModeButton />
        </div>
      </template>
    </UHeader>

    <UMain class="flex-grow">
      <NuxtPage />
    </UMain>

    <SiteFooter />
  </div>
</template>
