<!-- pages/hochburg-kulturdenkmal.vue -->
<script setup lang="ts">
const title = "Die Hochburg als besonders schützenswertes Kulturdenkmal";
const description =
  "Die Hochburg als seltenes, in „höchstem Maße raumwirksames Kulturdenkmal“: Umgebungsschutz, Sichtachsen und Auswirkungen geplanter Windräder auf Blickbeziehungen.";

useSeoMeta({
  title,
  description,
  ogTitle: "Die Hochburg als besonders schützenswertes Kulturdenkmal",
  ogDescription:
    "Umgebungsschutz, Sichtachsen und Denkmalschutz: Warum die geplanten Windräder den Blick auf und von der Hochburg drastisch verändern würden.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/hochburg-kulturdenkmal`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });
</script>

<template>
  <div class="relative">
    <!-- Background decoration (light + dark) -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-100/45 blur-3xl dark:bg-amber-900/16"
      />
      <div
        class="absolute top-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-100/35 blur-3xl dark:bg-indigo-900/14"
      />
      <div
        class="absolute bottom-0 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-100/35 blur-3xl dark:bg-emerald-900/12"
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
              <UBadge color="error" variant="soft" icon="i-lucide-landmark"
                >Kulturdenkmal</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-eye"
                >Sichtachsen</UBadge
              >
              <UBadge color="success" variant="soft" icon="i-lucide-mountain"
                >Panorama</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Die Hochburg als besonders schützenswertes Kulturdenkmal
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Die Hochburg ist ein sehr beliebtes Ausflugsziel für Touristen.
              Nach dem Heidelberger Schloss ist die Hochburg die zweitgrößte
              Burganlage in Baden. Schwarzwald Tourismus schreibt auf seiner
              Seite „Über dem Ort thront eindrucksvoll die Hochburg - eine
              historische Perle mit herrlicher Aussicht.“
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
                  <p class="text-xs text-gray-500 dark:text-gray-400">Status</p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    „In höchstem Maße raumwirksam“
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Seltenheit
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    &lt; 1 % besonders schützenswert
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Prüfmaßstab
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Umgebungsschutz / Bewertungsraster
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
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
        >
          <div class="h-1 bg-amber-400/70 dark:bg-amber-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Einordnung
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Tourismus &amp; Wahrzeichen
            </p>
          </div>
        </UCard>

        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
        >
          <div class="h-1 bg-indigo-400/70 dark:bg-indigo-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Denkmalschutz
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Sichtachsen &amp; Umgebungsschutz
            </p>
          </div>
        </UCard>

        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
        >
          <div class="h-1 bg-emerald-400/70 dark:bg-emerald-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Konflikt
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Blickbeziehungen würden sich ändern
            </p>
          </div>
        </UCard>
      </div>

      <!-- KPI SECTION -->
      <div class="mt-12 max-w-6xl mx-auto">
        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
        >
          <div class="p-6 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <KpiBadge tone="gray" title="Umgebung" subtitle="Schutz " />
              <KpiBadge
                tone="amber"
                title="Tourismus"
                subtitle="Ausflugsziel "
              />
              <KpiBadge
                tone="amber"
                title="Bewertungsraster"
                subtitle="Planung "
              />
              <KpiBadge
                tone="rose"
                title="keine Lösung"
                subtitle="denkmalverträglich "
              />
            </div>
          </div>
        </UCard>
      </div>

      <!-- MAIN -->
      <div class="mt-12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
        <!-- CONTENT -->
        <section class="lg:col-span-2">
          <UCard
            class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
          >
            <div
              class="p-8 prose prose-gray dark:prose-invert prose-p:leading-relaxed max-w-none"
            >
              <h2 class="text-xl">
                Seltenes Kulturdenkmal mit besonderem Umgebungsschutz
              </h2>

              <p>
                Laut dem „Ministerium für Landesentwicklung und Wohnen
                Baden-Württemberg“ gehört die Hochburg zu den in „höchstem Maße
                raumwirksamen Kulturdenkmalen“. Ein von der Landesdenkmalpflege
                entwickeltes „Bewertungsraster“ prüft, ob der Umgebungsschutz
                der Planung und Genehmigung von Windenergieanlagen
                entgegensteht. Bei weit über 99 Prozent der Kul-turdenkmale
                steht dem nichts entgegenstehen. Weniger als 1 Prozent der
                Kulturdenkmale sind also besonders schützenswert – die Hochburg
                zählt zu diesen sehr seltenen und besonderen Kulturdenkmalen.
              </p>

              <!-- Dramaturgie-Callout -->
              <div
                class="not-prose my-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 dark:border-amber-900/35 dark:bg-amber-950/16"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 rounded-lg bg-amber-500/10 p-2">
                    <UIcon
                      name="i-lucide-shield"
                      class="h-5 w-5 text-amber-700 dark:text-amber-300"
                    />
                  </div>
                  <p class="m-0 text-sm text-gray-800 dark:text-gray-200">
                    Weniger als 1 Prozent der Kulturdenkmale sind besonders
                    schützenswert – die Hochburg zählt zu diesen sehr seltenen
                    und besonderen Kulturdenkmalen.
                  </p>
                </div>
              </div>

              <h2 class="text-xl">Engagement vor Ort</h2>
              <br />
              <p>
                Der „Verein zur Erhaltung der Ruine Hochburg e.V.“ hat aus einer
                einst völlig zugewachsenen Ruine das heute weithin bekannte
                Touristen- und Naherholungsgebiet Hochburg entstehen lassen.
                Stefan Schlatterer - Oberbürgermeister der Stadt Emmendingen -
                ist Vorsitzender des Vereins.
              </p>
              <br />
              <h2 class="text-xl">
                Sichtachsen, Ausblick und fehlende Darstellung
              </h2>
              <br />
              <p>
                Bei der Beurteilung der Windenergie in Bezug auf den
                Denkmalschutz werden die Sichtachsen von verschiedenen
                Standorten auf das Denkmal sowie der Blick aus dem Gebäude
                heraus bewertet.
              </p>
              <br />
              <p>
                Der Blick aus der Hochburg auf die niedrigen Berge des
                Peterswaldes und auf Sexau würde durch die Windräder komplett
                verändert. Das lässt sich mit Denkmalschutz nicht vereinbaren.
                In den offiziellen Unterlagen der Betreibergesellschaft ist
                nicht dargestellt, wie drastisch sich der Blick aus der Hochburg
                verändern würde. Wie soll die Denkmalschutzbehörde im
                Landratsamt Emmendingen eine korrekte Entscheidung treffen
                können, wenn derart wichtige Unterlagen fehlen?
              </p>
              <br />
              <p>
                Eine denkmalverträgliche Lösung gibt es im Fall der Hochburg
                nicht. Der Blick auf die Hochburg und der Ausblick von der
                Hochburg auf das herrliche Panorama sind für das Verständnis und
                die Einordnung des historischen Wertes der Hochburg von
                zentraler Bedeutung.
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
                          Links
                        </p>
                      </div>
                      <UBadge color="neutral" variant="soft">Quellen</UBadge>
                    </div>
                  </div>

                  <div class="p-6 space-y-3 text-sm">
                    <a
                      href="https://de.wikipedia.org/wiki/Hochburg_(Emmendingen)"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://de.wikipedia.org/wiki/Hochburg_(Emmendingen)
                    </a>
                    <a
                      href="https://www.schwarzwald-tourismus.info/orte/sexau-4befcc5124"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.schwarzwald-tourismus.info/orte/sexau-4befcc5124
                    </a>
                    <a
                      href="https://mlw.baden-wuerttemberg.de/de/denkmalschutz/umgebungsschutz"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://mlw.baden-wuerttemberg.de/de/denkmalschutz/umgebungsschutz
                    </a>
                    <a
                      href="https://wzo.de/emmendinger-tor/ab-sofort-kann-man-die-hochburg-als-virtuelles-3d-modell-erleben/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://wzo.de/emmendinger-tor/ab-sofort-kann-man-die-hochburg-als-virtuelles-3d-modell-erleben/
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
                Blick von der Hochburg mit den geplanten Windrädern
              </div>
              <AssetImageViewer
                src="/10.jpg"
                alt="Blick von der Hochburg mit den geplanten Windrädern"
                ratio="16/9"
              />
              <span class="text-sm"
                >Quelle: Google Earth, Data attribution 3/18/2025 – ergänzt
                durch eigene Darstellung der Windräder</span
              >
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
                Die Hochburg als selten besonders schützenswertes Kulturdenkmal,
                bei dem Sichtachsen und der Ausblick zentral sind – und durch
                die Windräder „komplett verändert“ würden.
              </p>
            </UCard>
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
