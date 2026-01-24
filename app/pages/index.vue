<!-- pages/index.vue -->
<script setup lang="ts">
const title = "Stoppen Sie die Windparks im Sexauer Peterswald";
const description =
  "Eine Petition als Portfolio: Gründe, Kapitel und Fakten – kuratiert, klar, hochwertig. Artenschutz, Denkmalschutz, Rückbau, Schattenwurf, Netz, EEG und Folgen für Sexau.";
import { chapters } from "~/composables/chapters";
useSeoMeta({
  title,
  description,
  ogTitle: "Stoppen Sie die Windparks im Sexauer Peterswald",
  ogDescription:
    "Portfolio-Übersicht: Kapitel zu Artenschutz, Denkmalschutz, Rückbau, Schattenwurf, Stromnetz, EEG sowie Auswirkungen auf Sexau.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });

// Bitte ggf. Slugs anpassen:


const pillars = [
  {
    tone: "emerald",
    icon: "i-lucide-leaf",
    title: "Natur",
    text: "Erhalten Sie die Natur im Sexauer Peterswald. Schützen Sie den in Sexau heimischen und vom Aussterben bedrohten Dohlenkrebs.",
  },
  {
    tone: "amber",
    icon: "i-lucide-landmark",
    title: "Kultur",
    text: "Erhalten Sie den historischen Wert der Hochburg.",
  },
  {
    tone: "rose",
    icon: "i-lucide-heart",
    title: "Lebensqualität",
    text: "Erhalten Sie die Lebensqualität für die Einwohnerinnen und Einwohner von Sexau.",
  },
];
</script>

<template>
  <div class="relative">
    <!-- Soft, premium background -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-44 -left-48 h-[34rem] w-[34rem] rounded-full bg-emerald-100/35 blur-3xl dark:bg-emerald-900/14"
      />
      <div
        class="absolute top-10 -right-52 h-[36rem] w-[36rem] rounded-full bg-rose-100/32 blur-3xl dark:bg-rose-900/12"
      />
      <div
        class="absolute bottom-0 left-1/2 h-[26rem] w-[70rem] -translate-x-1/2 rounded-full bg-amber-100/28 blur-3xl dark:bg-amber-900/10"
      />
    </div>

    <UContainer class="relative py-10 sm:py-14">
      <!-- HERO (Apple-like product page) -->
      <section class="relative">
        <div class="mx-auto max-w-6xl">
          <div class="mt-8">
            <p
              class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
            >
              Eine Entscheidung, die nicht rückgängig zu machen ist
            </p>

            <div class="mt-8 flex items-start gap-4">
              <h1
                class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]"
              >
                Erhalten wir Sexau.
                <span
                  class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-amber-700 to-rose-700 dark:from-emerald-300 dark:via-amber-300 dark:to-rose-300"
                >
                  Nicht später. Jetzt.
                </span>
              </h1>
              <img
                src="/logo.png"
                alt="Gegenwind Sexau"
                class="h-40 w-auto flex-shrink-0"
              />
            </div>

            <p class="mt-6 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
              Der Sexauer Peterswald ist kein „Bauplatz“. Er ist Lebensraum,
              Ruhezone, Naherholung – und Heimatgefühl. Der Eingriff wäre kein
              Detail. Er wäre eine Veränderung, die bleibt.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-3">
              <UButton
                color="primary"
                size="lg"
                icon="i-lucide-pen-line"
                aria-label="Petition gegen Windparks im Sexauer Peterswald unterschreiben"
              >
                Petition unterschreiben
              </UButton>
            </div>
          </div>

          <!-- Premium “product pillars” -->
          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <div
              v-for="p in pillars"
              :key="p.title"
              class="group rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/75 dark:bg-gray-950/25 p-6 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div class="flex items-center justify-between">
                <div
                  class="h-12 w-12 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 flex items-center justify-center"
                >
                  <UIcon
                    :name="p.icon"
                    class="h-6 w-6 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div
                  class="h-2 w-16 rounded-full"
                  :class="[
                    p.tone === 'emerald' &&
                      'bg-emerald-400/70 dark:bg-emerald-500/30',
                    p.tone === 'amber' &&
                      'bg-amber-400/70 dark:bg-amber-500/30',
                    p.tone === 'rose' && 'bg-rose-400/70 dark:bg-rose-500/30',
                  ]"
                />
              </div>

              <p
                class="mt-5 text-lg font-extrabold text-gray-900 dark:text-gray-100"
              >
                {{ p.title }}
              </p>
              <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {{ p.text }}
              </p>

              <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                Mehr dazu in den Kapiteln unten.
              </div>
            </div>
          </div>
          <div class="min-w-0">
            <!-- noch stylen -->
            <AssetImageViewer
            title="Sexau mit den geplanten Windenergieanlagen"
            caption="Quelle: Google Earth, Data attribution 3/18/2025 – ergänzt durch eigene Darstellung der Windräder"
              class="mt-8"
              src="/04.jpg"
              alt="Sexau mit Windrädern"
             
            />
             <section class="mt-16">
        <div class="mx-auto max-w-6xl">
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Die Gemeinde Sexau - idyllische gelegen am Fuße der imposanten
              Hochburg - ist bekannt für Natur, Ruhe und Entspannung inmitten
              von Weinbergen und bewaldeten Höhen. Wenigstens bisher. Dies
              könnte sich bald ändern durch die geplanten Windparks „Sexau
              Peterswald I und II“. Die Betreibergesellschaft „Qualitas Energy
              Projekt GmbH“ will insgesamt 4 Windkraftanlagen des Typs Vestas
              V172 bauen, weniger als 3 km von Sexau entfernt. <br /><br />Damit würden die
              Windräder in ganz Sexau und weit darüber hinaus, zum
              beherrschenden Element in der Landschaft. Die Hochburg, die über
              Sexau thront, würde verblassen unter den 4 Windrädern, jedes mit
              einem gewaltigen Rotordurchmesser von 172 m und einer Gesamthöhe
              von 261 m, jeweils 7,2 MW Leistung.
            </p></div></section>
          </div>
          <!-- Big statement card (your text, staged, but not reworded in meaning) -->
          <div
            class="mt-10 rounded-[2rem] border border-gray-200/60 dark:border-gray-800/60 bg-gradient-to-br from-white/80 via-gray-50/70 to-rose-50/60 dark:from-gray-950/26 dark:via-gray-950/18 dark:to-rose-950/12 p-7 sm:p-10"
          >
            <div class="flex items-start gap-4">
              <div class="mt-1 rounded-2xl bg-rose-500/10 p-3">
                <UIcon
                  name="i-lucide-megaphone"
                  class="h-6 w-6 text-rose-700 dark:text-rose-300"
                />
              </div>

              <div class="min-w-0">
                <p
                  class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
                >
                  Kurz gesagt
                </p>

                <p
                  class="mt-3 text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug"
                >
                  Der Sexauer Peterswald ist einfach der falsche Standort für
                  Windparks. Es gibt weitaus geeignetere Standorte für
                  Windenergieanlagen.
                </p>

                <div class="mt-6 grid gap-3 sm:grid-cols-2">
                  <div
                    class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/18 p-5"
                  >
                    <p
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Stoppen Sie die Windparks im Sexauer Peterswald.
                    </p>
                    <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      Für eine sichere Energieversorgung werden die Windanlagen
                      nicht gebraucht. Bereits heute werden Windanlagen immer
                      wieder abgeregelt oder ganz abgeschaltet, weil ansonsten
                      zu viel Windenergie ins Stromnetz eingespeist werden
                      würde.
                    </p>
                  </div>

                  <div
                    class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/18 p-5"
                  >
                    <p
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Blick nach vorn
                    </p>
                    <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      Zusätzlich werden die Windstromleitungen Südlink und
                      Ultranet im Jahr 2028 fertiggestellt sein und dann Strom
                      bis nach Baden-Württemberg bringen. Spätestens dann wird
                      Windenergie wohl nicht mehr subventioniert. Ohne die
                      Subventionierung durch das Erneuerbare-Energien-Gesetz
                      (EEG), wird jede Windenergieanlage zum Minusgeschäft.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CHAPTER GRID (portfolio tiles) -->
      <section class="mt-14">
        <div class="mx-auto max-w-6xl">
          <div class="mt-2 flex items-end justify-between gap-4">
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Die Gründe
            </h2>
            <UBadge color="neutral" variant="soft" class="hidden sm:inline-flex"
              >{{ chapters.length }} Kapitel</UBadge
            >
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="c in chapters"
              :key="c.to"
              :to="c.to"
              class="group block"
            >
              <div
                class="rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/75 dark:bg-gray-950/25 p-6 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div class="flex items-start justify-between gap-3">
                  <div
                    class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/18 p-3"
                  >
                    <UIcon
                      :name="c.icon"
                      class="h-5 w-5 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div
                    class="h-2 w-16 rounded-full mt-2"
                    :class="[
                      c.tone === 'emerald' &&
                        'bg-emerald-400/70 dark:bg-emerald-500/30',
                      c.tone === 'amber' &&
                        'bg-amber-400/70 dark:bg-amber-500/30',
                      c.tone === 'rose' && 'bg-rose-400/70 dark:bg-rose-500/30',
                      c.tone === 'indigo' &&
                        'bg-indigo-400/70 dark:bg-indigo-500/30',
                      c.tone === 'sky' && 'bg-sky-400/70 dark:bg-sky-500/25',
                      c.tone === 'violet' &&
                        'bg-violet-400/70 dark:bg-violet-500/25',
                      c.tone === 'red' && 'bg-red-400/70 dark:bg-red-500/25',
                      c.tone === 'slate' &&
                        'bg-slate-400/70 dark:bg-slate-500/25',
                      c.tone === 'teal' && 'bg-teal-400/70 dark:bg-teal-500/25',
                      c.tone === 'lime' && 'bg-lime-400/70 dark:bg-lime-500/25',
                      c.tone === 'cyan' && 'bg-cyan-400/70 dark:bg-cyan-500/25',
                      c.tone === 'orange' &&
                        'bg-orange-400/70 dark:bg-orange-500/25',
                    ]"
                  />
                </div>

                <p
                  class="mt-5 text-lg font-extrabold text-gray-900 dark:text-gray-100 leading-snug"
                >
                  {{ c.title }}
                </p>
                <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {{ c.subtitle }}
                </p>

                <div class="mt-6 flex items-center justify-between">
                  <span
                    class="text-sm font-semibold text-indigo-600 dark:text-indigo-300"
                  >
                    Mehr erfahren
                  </span>
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
      <!-- REASONS (as “feature highlights”) -->

      <!-- FINAL CTA -->
      <section class="mt-16">
        <div class="mx-auto max-w-6xl">
          <div
            class="rounded-[2rem] border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 overflow-hidden"
          >
            <div
              class="h-1 bg-gradient-to-r from-emerald-400/70 via-amber-400/70 to-rose-400/70 dark:from-emerald-500/25 dark:via-amber-500/22 dark:to-rose-500/22"
            />
            <div class="p-8 sm:p-10">
              <div class="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-8">
                  <p
                    class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
                  >
                    Abschluss
                  </p>
                  <h3
                    class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight"
                  >
                    Erhalten wir, was Sexau ausmacht.
                  </h3>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    Treffen Sie die vorausschauende Entscheidung und stoppen Sie
                    die Windparks im Sexauer Peterswald. Erhalten Sie die
                    Lebensqualität. Erhalten Sie den historischen Wert der
                    Hochburg. Erhalten Sie die Natur im Sexauer Peterswald.
                  </p>
                </div>

                <div class="lg:col-span-4">
                  <div class="flex flex-col gap-3">
                    <UButton
                      color="primary"
                      size="lg"
                      block
                      icon="i-lucide-pen-line"
                    >
                      Petition unterschreiben
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-14">
        <div class="mx-auto max-w-6xl">
          <p
            class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
          >
            Energiepolitische Realität
          </p>

          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Wenn Windkraft ausfällt
          </h2>

          <p class="mt-6 max-w-4xl text-lg text-gray-700 dark:text-gray-300">
            Windenergie wird häufig isoliert betrachtet. In der Realität ist sie
            jedoch Teil eines Gesamtsystems. Fällt der Wind aus, muss
            Deutschland Strom importieren oder fossile Kraftwerke hochfahren.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              class="rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/75 dark:bg-gray-950/25 p-6"
            >
              <p
                class="text-lg font-extrabold text-gray-900 dark:text-gray-100"
              >
                Stromimporte bei Flaute
              </p>
              <p class="mt-3 text-gray-700 dark:text-gray-300">
                In windarmen Phasen wird Deutschland regelmäßig
                Netto-Stromimporteur. Der importierte Strom stammt häufig aus
                Ländern mit Atom- oder fossiler Stromerzeugung. Die Emissionen
                entstehen dennoch – sie werden lediglich ins Ausland verlagert.
              </p>
            </div>

            <div
              class="rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/75 dark:bg-gray-950/25 p-6"
            >
              <p
                class="text-lg font-extrabold text-gray-900 dark:text-gray-100"
              >
                Kohle und Gas als unverzichtbares Backup
              </p>
              <p class="mt-3 text-gray-700 dark:text-gray-300">
                Trotz massivem Windkraftausbau bleiben Kohle- und Gaskraftwerke
                systemrelevant. Bei Dunkelflauten liefern diese den benötigten
                Strom.
              </p>
            </div>
          </div>

          <div class="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p class="font-semibold mb-1">Quellen & Primärdaten:</p>
            <ul class="list-disc ml-5 space-y-1">
              <li>
                <a
                  href="https://www.energy-charts.info"
                  target="_blank"
                  rel="noopener"
                >
                  Fraunhofer ISE – Energy-Charts
                </a>
              </li>
              <li>
                <a
                  href="https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Monitoring/start.html"
                  target="_blank"
                  rel="noopener"
                >
                  Bundesnetzagentur – Monitoringbericht Energie
                </a>
              </li>
              <li>
                <a
                  href="https://app.electricitymaps.com/map"
                  target="_blank"
                  rel="noopener"
                >
                  Electricity Maps – CO₂-Intensität Strommix Europa
                </a>
              </li>
              <li>
                <a
                  href="https://www.cleanenergywire.org/factsheets/what-happens-when-wind-and-solar-power-are-low"
                  target="_blank"
                  rel="noopener"
                >
                  Clean Energy Wire – Dunkelflauten & Backups
                </a>
              </li>
              <li>
                <a
                  href="https://www.reuters.com/world/europe/germany-boosts-coal-fired-power-output-amid-low-wind-2023-12-07/"
                  target="_blank"
                  rel="noopener"
                >
                  Reuters – Kohleverstromung bei Windflauten
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>
