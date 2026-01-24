<!-- pages/schall-infraschall.vue -->
<script setup lang="ts">
const title = "Schall und Infraschall";
const description =
  "Schallpegel der geplanten Windräder und Diskussion um Infraschall: Reichweite, Wahrnehmung, Abstandsempfehlungen und Hinweise aus Quellen.";

useSeoMeta({
  title,
  description,
  ogTitle: "Schall und Infraschall – Windkraftanlagen bei Sexau",
  ogDescription:
    "Schallpegel (dB(A)) und Infraschall: Angaben zu Lautstärke, Reichweite, sensiblen Personengruppen und empfohlenen Abständen.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/schall-infraschall`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });
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
              <UBadge color="info" variant="soft" icon="i-lucide-audio-lines"
                >Schall (dB(A))</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-waves"
                >Infraschall</UBadge
              >
              <UBadge color="warning" variant="soft" icon="i-lucide-ruler"
                >Abstand</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Schall und Infraschall
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Windräder erzeugen Schall – und zusätzlich niederfrequente
              Schallanteile (Infraschall), die über große Distanzen wirksam sein
              können.
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
                    Schall pro Anlage
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    107,8 dB(A)
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    In 3 km Entfernung
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    ~ 30 dB(A)
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Empfehlung
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    mind. 5 km Abstand
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
                tone="gray"
                title="107,8 dB(A)"
                subtitle="pro Windrad "
              />
              <KpiBadge
                tone="amber"
                title="130 dB(A)"
                subtitle="Schmerzgrenze "
              />
              <KpiBadge tone="gray" title="~ 30 dB(A)" subtitle="in 3 km " />
              <KpiBadge
                tone="rose"
                title="&lt; 20 Hz"
                subtitle="Infraschall "
              />
            </div>

            <div class="h-px bg-gray-200/70 dark:bg-gray-800/70" />

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KpiBadge tone="rose" title="~ 30 %" subtitle="sensibel " />
              <KpiBadge tone="amber" title="≥ 5 km" subtitle="Empfehlung " />
              <KpiBadge tone="amber" title="km-weit" subtitle="messbar " />
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
              <h2 class="text-xl">Schallpegel und Wahrnehmung</h2>
              <br />
              <p>
                Windräder erzeugen Schall, je näher am Windrad, umso mehr. Jedes
                der geplanten Windräder erzeugt einen Schall von 107,8 dB(A) und
                ist damit lauter als ein Presslufthammer. Die Schmerzgrenze
                liegt übrigens bei 130 dB(A).
              </p>
              <br />
              <!-- Dramaturgie: Pegel-Leiste -->
              <div
                class="not-prose my-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-5"
              >
                <div class="flex items-center justify-between">
                  <div
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Pegel (schematisch)
                  </div>
                  <UBadge color="info" variant="soft">dB(A)</UBadge>
                </div>

                <div class="mt-4 space-y-3 text-sm">
                  <div class="flex items-center gap-3">
                    <span class="w-28 text-gray-700 dark:text-gray-200"
                      >30 dB(A)</span
                    >
                    <div
                      class="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden"
                    >
                      <div
                        class="h-full w-[25%] rounded-full bg-emerald-400/70 dark:bg-emerald-500/30"
                      />
                    </div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >Flüstern
                    </span>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="w-28 text-gray-700 dark:text-gray-200"
                      >107,8 dB(A)</span
                    >
                    <div
                      class="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden"
                    >
                      <div
                        class="h-full w-[80%] rounded-full bg-indigo-400/70 dark:bg-indigo-500/30"
                      />
                    </div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >pro Windrad
                    </span>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="w-28 text-gray-700 dark:text-gray-200"
                      >130 dB(A)</span
                    >
                    <div
                      class="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden"
                    >
                      <div
                        class="h-full w-[95%] rounded-full bg-rose-400/70 dark:bg-rose-500/30"
                      />
                    </div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >Schmerzgrenze
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <p>
                Sogar in 3 km Entfernung, in Sexau-Dorf, erzeugen die Windräder
                noch einen Schall von ca. 30 dBA. Dies entspricht etwa der
                Lautstärke von Flüstern – das jedoch permanent vorhanden und
                ständig zu hören ist – auch nachts. Das liegt jedoch alles
                innerhalb der gültigen Grenzwerte.
              </p>
              <br />
              <h2 class="text-xl">
                Infraschall: Reichweite und fehlende Abschirmung
              </h2>
              <br />
              <p>
                Dieser Schall ist jedoch nicht das eigentlich problematische,
                der erzeugte Infraschall jedoch schon. Offiziell sind die
                niederfrequenten Schallwellen von Windrädern kein Problem.
                Infraschall unterhalb von 20 Hertz liegt unterhalb der
                Hörschwelle von Menschen, er dringt mühelos durch Mauern,
                Fenster und Dämmungen. Infraschall bleibt über große Distanzen
                wirksam und kann in mehrere Kilometer Entfernung gemessen
                werden.
              </p>
              <br />
              <!-- Dramaturgie: Kernpunkt Callout -->
              <div
                class="not-prose my-6 rounded-2xl border border-rose-200/60 bg-rose-50/60 p-5 dark:border-rose-900/35 dark:bg-rose-950/16"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 rounded-lg bg-rose-500/10 p-2">
                    <UIcon
                      name="i-lucide-waves"
                      class="h-5 w-5 text-rose-700 dark:text-rose-300"
                    />
                  </div>
                  <div>
                    <p
                      class="m-0 text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Infraschall kann nicht abgeschirmt werden
                    </p>
                    <p
                      class="mt-1 mb-0 text-sm text-gray-800 dark:text-gray-200"
                    >
                      Der einzig wirksame Schutz bestehe in ausreichendem
                      Abstand zur Wohnbebauung.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <p>
                Professor Ken Mattsson lehrt an der Universität Uppsala und
                beschäftigt sich seit langem mit der unterschätzten Belastung
                durch Infraschall. Laut Professor Mattsson reagieren rund 30
                Prozent der Bevölkerung besonders sensibel auf Infraschall. Der
                einzig wirksame Schutz bestehe in aus-reichendem Abstand zur
                Wohnbebauung, da Infraschall nicht abgeschirmt werden kann.
                Seine Empfehlung: mindestens fünf Kilometer.
              </p>
              <br />
              <h2 class="text-xl">
                Hinweise zu modernen Anlagen, Effekten und Beobachtungen
              </h2>
              <br />
              <p>
                Besonders moderne, leistungsstärkere Windkraftanlagen erzeugen
                mehr Infraschall als älteren Modelle. Professor Mattson verweist
                auf Studien, die Effekte auf das autonome Nervensystem und die
                Gehirnaktivität zeigen.
              </p>
              <br />
              <p>
                Auch die Ärztin Dr. Ursula Bellut-Staeck warnt vor möglichen
                Schäden an Endothelzellen in Blutrhaltensgefäßen, die zu
                Bluthochdruck oder Schlaflosigkeit führen könnten. Ebenso kam es
                zu Verhaltensänderungen bei Tieren, etwa Milchrückgänge bei
                Kühen oder Stress bei Meeressäugern.
              </p>
              <br />
              <!-- Quellenblock -->
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
                          Links & Dokument
                        </p>
                      </div>
                      <UBadge color="neutral" variant="soft">Quellen</UBadge>
                    </div>
                  </div>

                  <div class="p-6 space-y-3 text-sm">
                    <div
                      class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4"
                    >
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        Dokument
                      </p>
                      <p
                        class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                      >
                        Bürger- und Gemeinderatsportal der Gemeinde Sexau,
                        Unterlagen zur öffentlichen Gemeinderatssitzung vom
                        5.6.2025
                        „DSV2025-202-Windpark-PI-250502_26-SEP-SIP-Rev.03-MuS.pdf“
                      </p>
                      <!-- Optional: wenn du das PDF unter /public ablegst, Link aktivieren -->
                      <a
                        href="https://sexau.mein-intra.net/export/auth/8a798c34-e479f049-a68ee916-b6803803/data/file/councilservice/2/1/1/6/DSV2025-202-Windpark-PI-250502_26-SEP-SIP-Rev.03-MuS.pdf"
                        class="mt-2 inline-flex items-center gap-2 text-indigo-600 hover:underline dark:text-indigo-300 text-sm"
                        target="_blank"
                        rel="noopener"
                      >
                        <UIcon name="i-lucide-file-text" class="h-4 w-4" />
                        PDF öffnen
                      </a>
                    </div>

                    <a
                      href="https://www.sonicshop.de/gehoerschutz-ratgeber/grundlagen/lautstaerke-geraeusche-sprache/lautstaerkevergleich-verschiedener-schallquellen-pegelvergleich.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.sonicshop.de/gehoerschutz-ratgeber/grundlagen/lautstaerke-geraeusche-sprache/lautstaerkevergleich-verschiedener-schallquellen-pegelvergleich.html
                    </a>

                    <a
                      href="https://blackout-news.de/aktuelles/infraschall-die-verborgenen-gefahren-von-windkraftanlagen/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://blackout-news.de/aktuelles/infraschall-die-verborgenen-gefahren-von-windkraftanlagen/
                    </a>

                    <a
                      href="https://report24.news/infraschall-von-windkraftanlagen-gesundheitsrisiko-oder-nocebo-effekt/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://report24.news/infraschall-von-windkraftanlagen-gesundheitsrisiko-oder-nocebo-effekt/
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
              <div class="flex items-center justify-between gap-3">
                <div>
                  <div
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Schall vs. Infraschall
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Was macht den Unterschied?
                  </div>
                </div>
                <UBadge color="info" variant="soft">Einordnung</UBadge>
              </div>

              <div
                class="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/70 dark:bg-gray-950/20 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Schall (hörbar)
                  </p>
                  <p class="mt-1">
                    Pegel in dB(A) – wahrnehmbar, aber laut Text innerhalb der
                    Grenzwerte.
                  </p>
                </div>

                <div
                  class="rounded-xl border border-rose-200/60 dark:border-rose-900/35 bg-rose-50/60 dark:bg-rose-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Infraschall (&lt; 20 Hz)
                  </p>
                  <p class="mt-1">
                    Unterhalb der Hörschwelle, dringt durch Gebäude und bleibt
                    über große Distanzen messbar.
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
