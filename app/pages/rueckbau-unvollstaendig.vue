<!-- pages/rueckbau-unvollstaendig.vue -->
<script setup lang="ts">
const title = "Rückbau der Anlagen – nur unvollständig";
const description =
  "Rückbau im Sexauer Peterswald laut Kurzbeschreibung: Turm komplett, Fundamente nur teilweise, Wege ggf. verbleibend – und rechtliche Rückbaupflichten nach BauGB/BImSchG.";

useSeoMeta({
  title,
  description,
  ogTitle: "Rückbau der Anlagen – nur unvollständig",
  ogDescription:
    "Laut Unterlagen: Fundamente nur bis Unterkante Sauberkeitsschicht, Wege ggf. nicht – plus Hinweise zur gesetzlichen Rückbaupflicht (BauGB/BImSchG).",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/rueckbau-unvollstaendig`
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
              <UBadge color="error" variant="soft" icon="i-lucide-shovel"
                >Rückbau</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-file-text"
                >Unterlagen</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-scale"
                >Recht</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Rückbau der Anlagen – nur unvollständig
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Die Betreibergesellschaft für die Windenergieanlagen im Sexauer
              Peterswald will nur einen unvollständigen Rückbau vornehmen.
            </p>

            <div
              class="mt-6 h-px bg-gradient-to-r from-amber-300/90 via-indigo-300/70 to-transparent dark:from-amber-500/35 dark:via-indigo-500/25"
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
                    Rückbau laut Unterlagen
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Turm komplett
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Fundamente
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    nur bis Sauberkeitsschicht
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">Wege</p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    nur ggf. Rückbau
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
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KpiBadge tone="rose" title="BImSchG" subtitle="§ 6 " />
              <KpiBadge
                tone="amber"
                title="Rückbau"
                subtitle="Verpflichtung "
              />
              <KpiBadge
                tone="rose"
                title="Versiegelung"
                subtitle="beseitigen "
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
              <h2 class="text-xl">Rückbau laut Betreibergesellschaft</h2>
              <br />
              <p>
                Laut Unterlagen (Kurzbeschreibung) der Betreibergesellschaft
                erfolgt der Rückbau:
              </p>
              <br />
              <!-- Bullet-Box (optisch, Inhalt unverändert) -->
              <div
                class="not-prose my-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-6"
              >
                <p
                  class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3"
                >
                  Rückbau
                </p>
                <ul
                  class="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-disc pl-5"
                >
                  <li>Windenergieanlage einschl. Turm komplett,</li>
                  <li>
                    Fundamente werden nur bis Unterkante Sauberkeitsschicht
                    zurückgebaut,
                  </li>
                  <li>
                    Wege nur dann, wenn sie für die landwirtschaftliche oder
                    forstwirtschaftliche Nutzung nicht gebraucht werden
                  </li>
                </ul>
              </div>
              <br />
              <p>
                Mit anderen Worten: Ein Großteil der Fundamente verbleiben im
                Boden, wo der Stahlbeton ungehindert vor sich hin erodiert. Die
                für den Schwerlastverkehr ausgebauten Wege sollen überhaupt
                nicht zurückgebaut werden.
              </p>
              <br />
              <!-- Dramatischer Callout -->
              <div
                class="not-prose my-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 dark:border-amber-900/35 dark:bg-amber-950/16"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 rounded-lg bg-amber-500/10 p-2">
                    <UIcon
                      name="i-lucide-alert-triangle"
                      class="h-5 w-5 text-amber-700 dark:text-amber-300"
                    />
                  </div>
                  <p class="m-0 text-sm text-gray-800 dark:text-gray-200">
                    Hier will sich die Betreibergesellschaft erhebliche Kosten
                    einsparen.
                  </p>
                </div>
              </div>

              <h2 class="text-xl">Gesetzliche Rückbaupflicht</h2>
              <br />
              <p>
                In Deutschland besteht eine gesetzliche Verpflichtung zum
                Rückbau von Windenergieanlagen nach deren Stilllegung. Gemäß §
                35 Abs. 5 Satz 2 des Baugesetzbuches (BauGB) müssen Betrei-ber
                eine Verpflichtungserklärung abgeben, die den vollständigen
                Rückbau der Anlage sowie die Beseitigung von Bodenversiegelungen
                vorsieht. Diese Verpflichtung ist Voraussetzung für die
                Genehmigung der Anlage.
              </p>
              <br />
              <p>
                Es ist ebenso eine weitere Genehmigungsvoraussetzung gemäß § 6
                BImSchG für Windvorhaben im Außenbereich, also außerhalb von
                Ortschaften auf bislang unbebautem Land, muss sich zum
                vollständigen Rückbau inklusive Fundamente verpflichten. Diese
                Rückbauverpflichtung ist keine Kann-Bestimmung, sondern
                bundesweit geltende gesetzliche Vorschrift.
              </p>
              <br />
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
                          Dokument & Link
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
                        „DSV2025-197-Windpark-PI-2-1_2025_Kurzbeschreibung_SEPI_v1“
                      </p>
                      <!-- Optional: wenn du die Datei in /public ablegst -->
                      <a
                        href="https://sexau.mein-intra.net/data/file/councilservice/2/1/1/6/DSV2025-197-Windpark-PI-2-1_2025_Kurzbeschreibung_SEPI_v1.pdf"
                        class="mt-2 inline-flex items-center gap-2 text-indigo-600 hover:underline dark:text-indigo-300 text-sm"
                        target="_blank"
                        rel="noopener"
                      >
                        <UIcon name="i-lucide-file-text" class="h-4 w-4" />
                        Dokument öffnen
                      </a>
                     
                    </div>

                    <a
                      href="https://wind-turbine.com/anbieter/windkraftanlagen/dienstleister/logistik-transport/rueckbau-von-windkraftanlagen"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://wind-turbine.com/anbieter/windkraftanlagen/dienstleister/logistik-transport/rueckbau-von-windkraftanlagen
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
                    Kurzvisualisierung
                  </div>
                </div>
                <UBadge color="info" variant="soft">Übersicht</UBadge>
              </div>

              <div
                class="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Turm
                  </p>
                  <p class="mt-1">komplett zurückgebaut</p>
                </div>
                <div
                  class="rounded-xl border border-amber-200/60 dark:border-amber-900/35 bg-amber-50/60 dark:bg-amber-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Fundamente
                  </p>
                  <p class="mt-1">nur bis Unterkante Sauberkeitsschicht</p>
                </div>
                <div
                  class="rounded-xl border border-amber-200/60 dark:border-amber-900/35 bg-amber-50/60 dark:bg-amber-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Wege
                  </p>
                  <p class="mt-1">nur ggf. Rückbau</p>
                </div>
              </div>
            </UCard>

            <UCard
              class="p-5 border bg-rose-50/70 border-rose-200/60 dark:bg-rose-950/15 dark:border-rose-900/35"
            >
              <div
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Kurzfazit
              </div>
              <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
                Der „unvollständige Rückbau“ im Spannungsfeld zu gesetzlichen
                Rückbaupflichten (BauGB/BImSchG), die einen vollständigen
                Rückbau inkl. Beseitigung von Versiegelungen vorsehen.
              </p>
            </UCard>
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
