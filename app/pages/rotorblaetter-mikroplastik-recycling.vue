<!-- pages/rotorblaetter-mikroplastik-recycling.vue -->
<script setup lang="ts">
const title = "Die Rotorblätter – Mikroplastik und Recyclingproblem";
const description =
  "Materialmix aus Verbundstoffen, Leading-Edge-Erosion, Mikroplastikabrieb und das Recyclingproblem von Rotorblättern – mit Quellenverweisen.";

useSeoMeta({
  title,
  description,
  ogTitle: "Die Rotorblätter – Mikroplastik und Recyclingproblem",
  ogDescription:
    "Leading-Edge-Erosion, Mikroplastikabrieb und schwer recycelbare Verbundstoffe: Risiken und Entsorgungsfragen rund um Rotorblätter.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/rotorblaetter-mikroplastik-recycling`
  : undefined;

useHead({
  link: canonical ? [{ rel: "canonical", href: canonical }] : [],
});
</script>

<template>
  <div class="relative">
    <!-- Background decoration (light + dark) -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl dark:bg-indigo-900/14"
      />
      <div
        class="absolute top-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-rose-100/35 blur-3xl dark:bg-rose-900/16"
      />
      <div
        class="absolute bottom-0 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-amber-100/40 blur-3xl dark:bg-amber-900/12"
      />
    </div>

    <UContainer class="relative py-12">
      <!-- HERO -->
      <UCard
        class="overflow-hidden bg-white/85 dark:bg-gray-950/35 border border-gray-200/60 dark:border-gray-800/60"
      >
        <div class="grid lg:grid-cols-12">
          <div class="lg:col-span-8 p-8 sm:p-12">
            <div class="flex flex-wrap gap-2">
              <UBadge color="info" variant="soft" icon="i-lucide-wind"
                >Rotorblätter</UBadge
              >
              <UBadge color="warning" variant="soft" icon="i-lucide-flask-conical"
                >Mikropartikel</UBadge
              >
              <UBadge color="warning" variant="soft" icon="i-lucide-recycle"
                >Recycling</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Die Rotorblätter – Mikroplastik und Recyclingproblem
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Materialmix, Abrieb an den Vorderkanten (Leading Edge) und
              Entsorgungsfragen: Diese Seite bündelt die im Text genannten
              Punkte und Quellen.
            </p>

            <div
              class="mt-6 h-px bg-gradient-to-r from-indigo-300/90 via-rose-300/70 to-transparent dark:from-indigo-500/35 dark:via-rose-500/25"
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
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Spitzengeschwindigkeit
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    ~ 330 km/h (bis 400 km/h)
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Abrieb (Beispielrechnung im Text)
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    80 kg/Jahr • 6,4 t/20 Jahre
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Verteilung
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    bis zu 1000 m Umkreis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UCard>

      <!-- KPI SECTION -->
      <div class="mt-12 max-w-6xl mx-auto">
        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
        >
          <div class="p-6 space-y-6">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiBadge
                tone="rose"
                title="330–400 km/h"
                subtitle="Rotorspitzen"
              />
              <KpiBadge tone="amber" title="150 km/h" subtitle="Blattmitte" />
              <KpiBadge
                tone="rose"
                title="80 kg/Jahr"
                subtitle="Mikroplastik "
              />
              <KpiBadge
                tone="rose"
                title="6,4 t"
                subtitle="20 Jahre • 4 WKA "
              />
            </div>

            <div class="h-px bg-gray-200/70 dark:bg-gray-800/70" />

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KpiBadge tone="gray" title="3–4 Jahre" subtitle="Haltbarkeit " />
              <KpiBadge
                tone="amber"
                title="bis 1000 m"
                subtitle="Verteilung "
              />
              <KpiBadge
                tone="amber"
                title="Recycling"
                subtitle="energieintensiv"
              />
            </div>
          </div>
        </UCard>
      </div>

      <!-- MAIN -->
      <div class="mt-12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
        <!-- TEXT -->
        <section class="lg:col-span-2">
          <UCard
            class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
          >
            <div
              class="p-8 prose prose-gray dark:prose-invert prose-p:leading-relaxed max-w-none"
            >
              <h2 class="text-xl">Materialien und Abrieb</h2>
              <br />
              <p>
                Die Rotorflügel bestehen aus Balsaholz, Kunstfaserverbundstoffen
                mit Glas- oder Carbonfasern (CFK- und GFK-Verbindungen),
                vermischt mit Epoxid- und Vinylharzen. Eisen, Kupfer, Aluminium,
                Blei und Kunststoffschäume sind beigemischt. Speziellen
                Lackierungen sollen die Rotorblätter vor Abrieb schützen – was
                aber nur begrenzt gelingt.
              </p>
              <br />
              <p>
                Die Rotorspitzen erreichen eine Geschwindigkeit von etwa 330
                km/h, teilweise 400 km/h. In der Mitte des Blattes sind es immer
                noch 150 km/h. Bei diesen Geschwindigkeiten ist ein
                Wassertropfen hart wie Beton.
              </p>

              <!-- Leading Edge Callout -->
              <div
                class="not-prose my-6 rounded-2xl border border-rose-200/60 bg-rose-50/60 p-5 dark:border-rose-900/35 dark:bg-rose-950/16"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 rounded-lg bg-rose-500/10 p-2">
                    <UIcon
                      name="i-lucide-alert-triangle"
                      class="h-5 w-5 text-rose-700 dark:text-rose-300"
                    />
                  </div>
                  <div>
                    <p
                      class="m-0 text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Leading Edge Problem
                    </p>
                    <p
                      class="mt-1 mb-0 text-sm text-gray-800 dark:text-gray-200"
                    >
                      Es kommt zu punktuellen Aufrauhungen der Oberflächen und
                      das immer wieder und immer mehr. Jede Verletzung der
                      äußeren Struktur der Rotorblätter setzt Mikropartikel
                      frei, die in ihrer Giftigkeit Asbestfasern gleichen.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <p>
                Härtere Oberschichtenlacke und sonstige Schutzmechanismen
                können den Verschleiß zwar verzögern oder vermindern, sie können
                ihn jedoch nicht verhindern.
              </p>
              <br />
              <p>
                Die Rotorblätter halten bis maximal drei oder vier Jahren den
                vielfältigen Belastungen stand. Besonders die Vorderkanten der
                Rotorblätter treffen auf alles, was sich in der Luft befindet.
                Das können Regentropfen sein, Hagelkörner, Saharastaub, Insekten
                und Vögel.
              </p>
              <br />
              <h2 class="text-xl">Mikropartikel, Persistenz und PFAS</h2>
              <br />
              <p>
                Die sich ablösenden Mikropartikel kommen in der Natur nicht vor.
                Wegen ihrer hohen Stabilität werden diese chemischen
                Verbindungen durch die in der Natur üblichen Abbauprozesse
                praktisch nicht bzw. nur sehr langsam abgebaut. Diese kaum
                abbaubaren Ewigkeitschemikalien (PFAS) sind für Menschen und
                Tiere toxisch. Sie bleiben also über Jahrzehnte in den Böden und
                im Grundwasser und gelangen in die Nahrung.
              </p>
              <br />
              <!-- Calculation Eyecatcher -->
              <div class="not-prose my-10">
                <UCard
                  class="overflow-hidden bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
                >
                  <div
                    class="px-6 py-4 bg-gradient-to-r from-indigo-50/70 via-white to-amber-50/60 dark:from-indigo-950/16 dark:via-gray-950/10 dark:to-amber-950/14 border-b border-gray-200/60 dark:border-gray-800/60"
                  >
                    <div class="flex items-center justify-between gap-3">
                      <div>
                        <p
                          class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                        >
                          Rechnung im Text
                        </p>
                        <p
                          class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                        >
                          Mikroplastik-Menge über 20 Jahre
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="p-6">
                    <div class="grid gap-4 sm:grid-cols-3">
                      <div
                        class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4"
                      >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Pro Windrad
                        </p>
                        <p
                          class="text-lg font-extrabold text-gray-900 dark:text-gray-100"
                        >
                          80 kg/Jahr
                        </p>
                      </div>
                      <div
                        class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4"
                      >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Anzahl / Zeit
                        </p>
                        <p
                          class="text-lg font-extrabold text-gray-900 dark:text-gray-100"
                        >
                          4 WKA • 20 Jahre
                        </p>
                      </div>
                      <div
                        class="rounded-2xl border border-rose-200/60 dark:border-rose-900/35 bg-rose-50/60 dark:bg-rose-950/16 p-4"
                      >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Ergebnis
                        </p>
                        <p
                          class="text-lg font-extrabold text-gray-900 dark:text-gray-100"
                        >
                          6,4 t
                        </p>
                      </div>
                    </div>

                    <div
                      class="mt-5 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden"
                    >
                      <div
                        class="h-full w-[85%] bg-gradient-to-r from-rose-400/70 to-indigo-400/70 dark:from-rose-500/30 dark:to-indigo-500/30"
                      />
                    </div>

                    <p class="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      Der Wissenschaftliche Dienst des Deutschen Bundestages hat
                      bereits 2020 eine Abschätzung zur Exposition von
                      Mikroplastik durch Windräder veröffentlicht. Das
                      Fraunhofer IWES lieferte die wissenschaftliche Datenbasis
                      dazu . Umgerechnet auf die Rotorlängen von 75 m ergibt
                      sich pro Windrad eine Mikroplastikmenge von 80 kg pro
                      Jahr. Bei vier Windrädern und einer Betriebszeit von 20
                      Jahren ergibt das die gigantische Schadstoffmenge von 6,4
                      t Mikroplastik.
                    </p>
                  </div>
                </UCard>
              </div>
              <br />
              <p>
                Die Mikropartikel kontaminieren den Boden kontinuierlich und
                werden durch den Wind im Umkreis von bis zu 1000 m verteilt. In
                nicht allzu ferner Zukunft werden dadurch viele Bauern
                vermutlich ihre Erwerbsquelle verlieren, da ihre Felder wegen
                der Kontamination mit einem Nutzungsverbot belegt werden
                könnten.
              </p>
              <br />
              <p>
                Dieses sogenannte Leading Edge Problem an den Rotorblättern ist
                der Windindustrie bekannt. Die beschädigten Oberflächen mindern
                ebenfalls den Ertrag der Windräder und müssen deshalb in
                regelmäßigen Abständen repariert werden. Nur – mit der Reparatur
                ist es eben nicht getan. Der Abrieb ist bereits auf den
                umliegenden Flächen verstreut und außerdem kommt es auch bei den
                reparierten Rotorblättern wieder zu neuem Abrieb.
              </p>
              <br />
              <h2 class="text-xl">Recyclingproblem</h2>
              <br />
              <p>
                Dies ist jedoch nicht das einzige Problem der Rotorblätter. Die
                komplexen Verbundstoffe mit Glas- oder Carbonfasern sind nur
                schwer wieder trennbar. Ein umweltfreundliches Recyclen ist sehr
                energieintensiv, kostspielig – und damit oft unwirtschaftlich
                für die Betreiber.
              </p>
              <br />
              <p>
                Der Spiegel befasst sich mit dem Recyclingproblem der
                Rotorblätter, die wegen der schwierigen und kostenintensiven
                Entsorgung auch illegal im Ausland landen.
              </p>
              <br />
              <p>
                Die ZDF-Sendung „frontal“ greift das Thema ebenfalls auf und
                fragt: Wohin mit dem Wind-radschrott, der nicht recycelt werden
                kann?
              </p>
              <br />
              <p>
                Dem Landtag in Nordrhein-Westfalen wurde dazu ein ausführliches
                Gutachten vom 2. März 2023 von Rechtsanwalt Thomas Mock
                vorgelegt.
              </p>

              <!-- Quellen -->
              <div class="not-prose mt-10">
                <UCard
                  class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
                >
                  <div
                    class="px-6 py-4 bg-gradient-to-r from-gray-50/70 via-white to-gray-50/60 dark:from-gray-950/12 dark:via-gray-950/10 dark:to-gray-950/10 border-b border-gray-200/60 dark:border-gray-800/60"
                  >
                    <div class="flex items-center justify-between gap-3">
                      <div>
                        <p
                          class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                        >
                          Quellen
                        </p>
                        <p
                          class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                        >
                          Links
                        </p>
                      </div>
                      <UBadge color="neutral" variant="soft">Quellen</UBadge>
                    </div>
                  </div>

                  <div class="p-6 space-y-3 text-sm">
                    <a
                      href="https://weatherguardwind.com/leading-edge-erosion/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://weatherguardwind.com/leading-edge-erosion/
                    </a>
                    <a
                      href="https://www.bundestag.de/resource/blob/817020/27cf214cfbeaac330d3b731cbbd8610b/WD-8-077-20-pdf-data.pdf"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.bundestag.de/resource/blob/817020/27cf214cfbeaac330d3b731cbbd8610b/WD-8-077-20-pdf-data.pdf
                    </a>
                    <a
                      href="https://www.iwes.fraunhofer.de/de/forschungsprojekte/abgeschlossene-projekte-2022/beleb.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.iwes.fraunhofer.de/de/forschungsprojekte/abgeschlossene-projekte-2022/beleb.html
                    </a>
                    <a
                      href="https://www.windbranche.de/news/nachrichten/artikel-25242-fraunhofer-iwes-sagt-erosion-von-windkraftanlagen-den-kampf-an"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.windbranche.de/news/nachrichten/artikel-25242-fraunhofer-iwes-sagt-erosion-von-windkraftanlagen-den-kampf-an
                    </a>
                    <a
                      href="https://umwelt-energie-gauting.de/mikroplastikabrieb-bei-windraedern/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://umwelt-energie-gauting.de/mikroplastikabrieb-bei-windraedern/
                    </a>
                    <a
                      href="https://www.spiegel.de/wissenschaft/technik/windanlagen-rotorblaetter-mit-recycling-problem-a-4a2c64ed-2359-4711-b808-8eb216675f41"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.spiegel.de/wissenschaft/technik/windanlagen-rotorblaetter-mit-recycling-problem-a-4a2c64ed-2359-4711-b808-8eb216675f41
                    </a>
                    <a
                      href="https://www.zdfheute.de/video/frontal/wohin-mit-dem-windrad-schrott-100.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.zdfheute.de/video/frontal/wohin-mit-dem-windrad-schrott-100.html
                    </a>
                    <a
                      href="https://www.landtag.nrw.de/portal/WWW/dokumentenarchiv/Dokument/MMST18-292.pdf"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.landtag.nrw.de/portal/WWW/dokumentenarchiv/Dokument/MMST18-292.pdf
                    </a>
                  </div>
                </UCard>
              </div>
            </div>
          </UCard>
        </section>

        <!-- SIDEBAR -->
        <aside>
          <div class="sticky top-24 space-y-4">
            <UCard
              class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 p-5"
            >
              <div class="text-sm font-semibold mb-3">
                Mikroplastikabrieb bei Windrädern
              </div>
              <AssetImageViewer
                src="../assets/07.png"
                alt="Mikroplastikabrieb bei Windrädern"
                ratio="16/9"
              />
            </UCard>
            <UCard
              class="p-5 border bg-amber-50/70 border-amber-200/60 dark:bg-amber-950/15 dark:border-amber-900/35"
            >
              <div
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Kurzfazit
              </div>
              <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
                Abrieb an den Rotorblättern, potenzielle Verteilung von
                Mikropartikeln und ein aufwändiges Recycling der Verbundstoffe.
              </p>
            </UCard>
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
