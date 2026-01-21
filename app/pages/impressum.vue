<script setup lang="ts">
const title = "Impressum – Gegenwind Sexau";
const description = "Impressum und Kontaktinformation von Gegenwind Sexau, eine Petition gegen die geplanten Windparks im Sexauer Peterswald";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/impressum`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">
    <UContainer class="py-24">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Impressum
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Angaben gemäß § 5 TMG (Telemediengesetz)
          </p>
        </div>

        <!-- Content Grid -->
        <div class="space-y-8">
          <!-- Kontakt -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Kontakt
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
               <p>Bürgerinitiative Gegenwind Sexau</p>
              <p>Heidrun Schwörer</p>
            
              <p>Am Löwengarten 14</p>
              <p>79350 Sexau</p>
            </div>
          </div>

        

          <!-- Kommunikation -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Kommunikation
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
            
            
              <p>
                <strong>E-Mail:</strong>
                <a href="mailto:info@gegenwind-sexau.de" class="text-primary-600 dark:text-primary-400 hover:underline">
                info@gegenwind-sexau.de
                </a>
              </p>
            </div>
          </div>

        

        

         

          <!-- Footer -->
          <div class="pt-6 border-t border-gray-200/60 dark:border-gray-800/60">
            <div class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <p>
                Erstellt mit
                <a href="https://impressum-generator.de" target="_blank" rel="noopener" class="text-primary-600 dark:text-primary-400 hover:underline">
                  Impressum-Generator.de
                </a>
                und
                <a href="https://impressum-generator.de/datenschutz-generator" target="_blank" rel="noopener" class="text-primary-600 dark:text-primary-400 hover:underline">
                  Datenschutz-Generator
                </a>
              </p>
            </div>
            <div class="flex gap-4">
              <NuxtLink to="/datenschutz" class="text-primary-600 dark:text-primary-400 hover:underline">
                → Zur Datenschutzerklärung
              </NuxtLink>
              <NuxtLink to="/" class="text-primary-600 dark:text-primary-400 hover:underline">
                → Zur Startseite
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>