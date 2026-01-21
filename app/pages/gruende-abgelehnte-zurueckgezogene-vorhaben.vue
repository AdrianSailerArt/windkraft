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
      <ChapterNavigation class="mt-16" />
    <section class="mt-14">
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
        <AssetImageViewer
          class="mt-8"
          src="/17.JPG"
          alt="Grümde für abgelehnte oder zurückgezogene Vorhaben"
          ratio="16/9"
        />
      </div>
    </section>
  </div>
</template>
