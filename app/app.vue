<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "de",
  },
});

const title = "Stoppen Sie die Windparks im Sexauer Peterswald";
const description =
  "Eine Petition als Portfolio: Gründe, Kapitel und Fakten – kuratiert, klar, hochwertig. Artenschutz, Denkmalschutz, Rückbau, Schattenwurf, Netz, EEG und Folgen für Sexau.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="font-bold text-lg">
          🌍 Windkraft Sexau
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
