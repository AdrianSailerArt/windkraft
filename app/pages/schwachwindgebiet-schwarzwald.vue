<!-- pages/schwachwindgebiet-schwarzwald.vue -->
<script setup lang="ts">
const title = "Schwachwindgebiet Schwarzwald – Windkraftanlagen bei Sexau";
const description =
  "Der Schwarzwald als Schwachwindgebiet: Einordnung nach DIN EN 1991-1-4/NA, geplante Windkraftanlagen bei Sexau und deren Dimensionen.";

useSeoMeta({
  title,
  description,
  ogTitle: "Schwachwindgebiet Schwarzwald – Windkraft Sexau",
  ogDescription:
    "Informationen zu Schwachwindzonen, geplanten Windkraftanlagen im Sexauer Peterswald und den eingesetzten Anlagentypen.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/schwachwindgebiet-schwarzwald`
  : undefined;

useHead({
  link: canonical ? [{ rel: "canonical", href: canonical }] : [],
});
</script>

<template>
  <div class="relative">
  
  <ChapterNavigation class="mt-4" />
    <UContainer class="relative py-12">
      
      <!-- HERO -->
      <UCard
        class="overflow-hidden bg-white/85 dark:bg-gray-950/35 border border-gray-200/60 dark:border-gray-800/60"
      >
        <div class="grid lg:grid-cols-12">
          <div class="lg:col-span-8 p-8 sm:p-12">
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Schwarzwald</UBadge>
              <UBadge color="info" variant="soft">Windzonen</UBadge>
              <UBadge color="warning" variant="soft">Dimensionen</UBadge>
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Schwachwindgebiet Schwarzwald
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Das Deutsche Institut für Bautechnik (DIBt) unterteilt Deutschland
              entsprechend den jeweiligen Windverhältnissen in vier Windzonen.
              Die DIN EN 1991-1-4/NA unterscheidet nach Windzone I
              (Schwachwindstandorte), Windzone II (typische
              Binnenlandstandorte), Windzone III (küstennahe Standorte) und
              Windzone IV (Küstenlinie).
            </p>

            <div
              class="mt-6 h-px bg-gradient-to-r from-emerald-300/90 via-indigo-300/70 to-transparent dark:from-emerald-500/35 dark:via-indigo-500/25"
            /> 
          </div>

          <!-- HERO SIDEPANEL -->
          <div
            class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-200/60 dark:border-gray-800/60"
          >
            <div
              class="p-8 sm:p-10 bg-gradient-to-b from-white to-gray-50/70 dark:from-gray-950/30 dark:to-gray-950/10"
            >
              <p
                class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
              >
                Überblick
              </p>

              <div class="mt-4 space-y-3">
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">Gebiet</p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Schwachwindgebiet
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Anlagentyp
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Vestas V172
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Einordnung
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Windzone I
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UCard>

      <!-- STORY STRIP -->
      <div class="mt-10 max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
        >
          <div class="h-1 bg-emerald-400/70 dark:bg-emerald-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Einordnung
            </p>
            <p class="text-sm font-semibold">Windzonen nach DIN EN</p>
          </div>
        </UCard>

        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
        >
          <div class="h-1 bg-rose-400/70 dark:bg-rose-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Kernaussage
            </p>
            <p class="text-sm font-semibold">Schwarzwald = Schwachwindgebiet</p>
          </div>
        </UCard>

        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
        >
          <div class="h-1 bg-indigo-400/70 dark:bg-red" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Dimension
            </p>
            <p class="text-sm font-semibold">Vestas V172 (172 m) Rotordurchmesser / 261 m Gesamthöhe</p>
          </div>
        </UCard>
      </div>

      <!-- KPI SECTION -->
      <div class="mt-12 max-w-6xl mx-auto">
        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
        >
          <div class="p-6 space-y-6">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiBadge tone="rose" title="Schwachwind" subtitle="gebiet" />
              <KpiBadge tone="amber" title="Vestas" subtitle="V172" />
              <KpiBadge tone="gray" title="&lt; 3 km" subtitle="Entfernung" />
              <KpiBadge tone="emerald" title="4 Anlagen" subtitle="je 7,2 MW" />
            </div>

            <div class="h-px bg-gray-200/70 dark:bg-gray-800/70" />

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KpiBadge tone="gray" title="Windzone I" subtitle="DIN EN" />
              <KpiBadge tone="gray" title="Rotor Ø" subtitle="172 m" />
              <KpiBadge tone="gray" title="Peterswald" subtitle="~300 m" />
            </div>
          </div>
        </UCard>
      </div>

      <!-- MAIN -->
      <main class="mt-12 max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-3">
        <!-- CONTENT -->
        <section class="lg:col-span-2">
          <UCard
            class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
          >
            <div
              class="p-8 prose prose-gray dark:prose-invert prose-p:leading-relaxed max-w-none"
            >
              <p>
                Der gesamte Schwarzwald ist ein Schwachwindgebiet mit niedrigen
                Windgeschwindigkeiten. Es fragt sich, warum in diesen Gebieten
                überhaupt Windkraftanlagen installiert werden sollen.
              </p>

              <p>
                Zudem sind die niedrigen Erhebungen im Sexauer Peterswald mit
                etwa <strong>300 m</strong> deutlich niedriger als die
                Schwarzwaldberge Kandel oder Schauinsland. Um im Sexauer
                Peterswald überhaupt Energie erzeugen zu können, braucht es
                riesige Anlagen wie die geplanten Vestas V172 mit
                Rotordurchmessern von <strong>172 m</strong>.
              </p>

              <!-- DIMENSION EYECATCHER -->
              <div
                class="not-prose my-8 rounded-2xl border border-indigo-200/60 bg-indigo-50/60 p-6 dark:border-indigo-900/35 dark:bg-indigo-950/16"
              >
                <p
                  class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                >
                  Dimension
                </p>
                <p class="text-4xl font-extrabold mt-2">172 m</p>
                <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  gigantischer Rotordurchmesser der geplanten Anlagen
                </p>
              </div>

              <p>
                Welche überdimensionalen Ausmaße diese Anlagen erreichen, ist
                mit den bisher bekannten Windanlagen nicht vergleichbar. Bisher
                wurden kleinere Rotordurchmesser und niedrigere Windkraftanlagen
                verbaut. Von den neuen monströsen Riesenanlagen wurden erst sehr
                wenige installiert. Sie würden das Dorfbild von Sexau komplett
                zerstören. Die Lebensqualität, die Attraktivität und die
                Beliebtheit von Sexau würden mit einem Schlag vernichtet.
              </p>

              <div class="mt-6 text-sm text-gray-600 dark:text-gray-400">
                Weiterentwicklung der Rotordurchmesser<br />
                Quelle:
                <a
                  href="https://www.vestas.de/content/dam/vestas-com/de/anlagentechnologie/EnVentus-Plattform_Q1-2022_VestasBrochure_DE_WEB.pdf.coredownload.inline.pdf"
                  target="_blank"
                  rel="noopener"
                  class="text-indigo-600 hover:underline dark:text-indigo-300"
                >
                  EnVentus-Plattform_Q1-2022_VestasBrochure_DE_WEB.pdf
                </a>
              </div>
            </div>
          </UCard>
        </section>

        <!-- SIDEBAR -->
        <aside>
          <div class="sticky top-24">
            <UCard
              class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 p-5"
            >
              <div class="text-sm font-semibold mb-3">
                Entwicklung der Rotordurchmesser
              </div>
              <AssetImageViewer
                src="/1.jpeg"
                alt="Weiterentwicklung der Rotordurchmesser"
                ratio="16/9"
              />
              <UButton
                to="https://www.vestas.de/content/dam/vestas-com/de/anlagentechnologie/EnVentus-Plattform_Q1-2022_VestasBrochure_DE_WEB.pdf.coredownload.inline.pdf"
                target="_blank"
                external
                color="neutral"
                variant="solid"
                class="mt-4 w-full justify-center rounded-xl"
                icon="i-lucide-file-down"
              >
                Quelle herunterladen (PDF)
              </UButton>
            </UCard>
          </div>
        </aside>
      </main>
    </UContainer>
  </div>
</template>
