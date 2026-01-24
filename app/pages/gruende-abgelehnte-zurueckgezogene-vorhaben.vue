<script lang="ts" setup>
const quickReasons = [
  {
    tone: "rose",
    title: "Artenschutz",
    text: "Der sehr seltene und vom Aussterben bedrohte Dohlenkrebs würde hier vermutlich endgültig ausgerottet.",
  },
  {
    tone: "indigo",
    title: "Planungsrechtliche Gründe",
    text: "Der gesetzlichen Verpflichtung zum Rückbau der Windenergieanlagen nach deren Stilllegung wird nur teilweise entsprochen. Die Schattenwurfprognose enthält grobe Berechnungsfehler.",
  },
  {
    tone: "orange",
    title: "Denkmalschutz",
    text: "Die Hochburg als besonders schützenswertes Kulturdenkmal würde ihren historischen Wert und ihre Attraktivität für den Tourismus erheblich einbüßen.",
  },
  {
    tone: "emerald",
    title: "Waldspezifische Gründe",
    text: "Die vier Windenergieanlagen und die überdimensionale lange Zufahrt von 3 km mitten durch den Peterswald würde das Bodenökosystem massiv zerstören.",
  },
  {
    tone: "amber",
    title: "Gebietsspezifische Gründe",
    text: "Wohnqualität, Immobilienwerte und Tourismus würden drastisch einbrechen.",
  },
];
</script>

<template>
  <div>
    <ChapterNavigation />
    <UContainer class="relative py-12">
      <div class="mx-auto max-w-6xl">
        <p
          class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
        >
          Auf den Punkt gebracht
        </p>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Fünf Gründe. Ein Ergebnis.
        </h2>
        <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300">
          Für die Ablehnung der Windparks im Sexauer Peterswald gibt es
          zahlreiche Gründe. Hier sind einige davon:
        </p>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <div
            v-for="r in quickReasons"
            :key="r.title"
            class="rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/75 dark:bg-gray-950/25 p-6"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <p
                  class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
                >
                  Grund
                </p>
                <p
                  class="mt-2 text-xl font-extrabold text-gray-900 dark:text-gray-100"
                >
                  {{ r.title }}
                </p>
              </div>

              <div
                class="h-10 w-10 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/18 flex items-center justify-center"
              >
                <span
                  class="h-2.5 w-2.5 rounded-full"
                  :class="[
                    r.tone === 'rose' && 'bg-rose-500/70 dark:bg-rose-400/50',
                    r.tone === 'indigo' &&
                      'bg-indigo-500/70 dark:bg-indigo-400/50',
                    r.tone === 'orange' &&
                      'bg-orange-500/70 dark:bg-orange-400/50',
                    r.tone === 'emerald' &&
                      'bg-emerald-500/70 dark:bg-emerald-400/50',
                    r.tone === 'amber' &&
                      'bg-amber-500/70 dark:bg-amber-400/50',
                  ]"
                />
              </div>
            </div>

            <p class="mt-4 text-gray-700 dark:text-gray-300">
              {{ r.text }}
            </p>
          </div>
        </div>
        <UCard class="m-8">
          <AssetImageViewer
            title="Gründe für abgelehnte oder zurückgezogene Vorhaben"
            src="/17.JPG"
            alt="Gründe für abgelehnte oder zurückgezogene Vorhaben"
            caption="Quelle: Fachagentur Windenergie"
        /></UCard>
      </div>
       <!-- Quellen -->
                  <div class="not-prose mt-10">
                    <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
                      <div class="px-6 py-4 bg-gradient-to-r from-gray-50/70 via-white to-gray-50/60 dark:from-gray-950/12 dark:via-gray-950/10 dark:to-gray-950/10 border-b border-gray-200/60 dark:border-gray-800/60">
                        <div class="flex items-center justify-between gap-3">
                          <div>
                            <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Quellen</p>
                            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Links & Dokument</p>
                          </div>
                          <UBadge color="neutral" variant="soft">Quellen</UBadge>
                        </div>
                      </div>
    
                      <div class="p-6 space-y-3 text-sm">
                       
                      
                        <a
                          href="https://www.enbw.com/unternehmen/themen/windkraft/windenergie-und-denkmalschutz.html"
                          target="_blank"
                          rel="noopener"
                          class="block text-indigo-600 hover:underline dark:text-indigo-300"
                        >
                         https://www.enbw.com/unternehmen/themen/windkraft/windenergie-und-denkmalschutz.html
    </a>
                       
                      </div>
                    </UCard>
                  </div>
    </UContainer>
    <ChapterNavigation />
  </div>
</template>
