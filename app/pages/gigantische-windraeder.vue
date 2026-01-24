<template>
  <div class="relative">
    <ChapterNavigation />

    <UContainer class="relative py-12">
      <!-- HERO -->
      <UCard
        class="overflow-hidden bg-white/85 dark:bg-gray-950/35 border border-gray-200/60 dark:border-gray-800/60"
      >
        <div class="grid lg:grid-cols-12">
          <div class="lg:col-span-8 p-8 sm:p-12">
            <div class="flex flex-wrap gap-2">
              <UBadge color="info" variant="soft" icon="i-lucide-wind">
                Windenergie
              </UBadge>
              <UBadge color="info" variant="soft" icon="i-lucide-eye">
                Sichtbarkeit
              </UBadge>
              <UBadge color="success" variant="soft" icon="i-lucide-mountain">
                Topografie
              </UBadge>
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Gigantische Windräder in Sexau
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Zwei übergroße Windkraftanlagen prägen künftig das gesamte
              Ortsbild von Sexau – nicht irgendwo im Wald, sondern weithin
              sichtbar über das komplette Dorfgebiet.
            </p>

            <div
              class="mt-6 h-px bg-gradient-to-r from-rose-300/90 via-amber-300/70 to-transparent dark:from-rose-500/35 dark:via-amber-500/25"
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
                    Anlagenhöhe
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    261 m
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Entfernung
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    &lt; 3 km
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Wirkung
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Gesamtes Ortsbild betroffen
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
          <div class="p-6">
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <KpiBadge tone="rose" title="261 m" subtitle="Höhe" />
              <KpiBadge tone="amber" title="3 km" subtitle="Entfernung" />
              <KpiBadge
                tone="gray"
                title="Ganz Sexau"
                subtitle="Sichtbarkeit"
              />
              <KpiBadge tone="emerald" title="4 Anlagen" subtitle="je 7,2 MW" />
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
            <div class="p-8 prose prose-gray dark:prose-invert max-w-none">
              <p>
                Gigantische Windräder – nicht irgendwo im Wald – sondern
                übergroß in ganz Sexau sichtbar.
              </p>
              <br />
              <p>
                Um die Größenverhältnisse zu veranschaulichen, sind die
                Windräder in der nachfolgenden Grafik dargestellt. Es sind
                jeweils die Höhen angegeben, in welcher die Windkraftanlagen
                aufgestellt werden sollen.
              </p>
              <br />
              <p>
                Sexau liegt 232 m über dem Meeresspiegel. Davon ausgehend sind
                die einzelnen Höhen berechnet. Die Höhen wurden über Google
                Earth ermittelt.
              </p>
              <br />
              <p>
                Die Windkraftanlagen selbst haben jeweils eine Höhe von 261 m.
                Wie in der nachfolgenden Grafik gut zu erkennen ist, sind zwei
                der Windkraftanlagen (WKA 01 und WKA 02) deutlich höher, als die
                Erhebungen des Peterswaldes, auf denen sie stehen! Auch die
                Windkraftanlagen WKA 03 und WKA 04 überragen die Anhöhen, auf
                denen sie stehen, fast nochmals um die gleiche Höhe.
              </p>
              <br />
              <p>
                Zudem liegen die Windkraftanlagen nur knapp 3 km von Sexau
                entfernt. Dies macht das gigantische Ausmaß und die erdrückende
                Wirkung auf das gesamte Dorfgebiet, auf jedes einzelne Haus in
                Sexau, noch deutlicher.
              </p>
              <br />
              <!-- Quellen -->
              <div class="not-prose mt-10">
                <UCard
                  class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
                >
                  <div class="p-6 space-y-2 text-sm">
                    <a
                      href="https://www.vestas.de/content/dam/vestas-com/de/anlagentechnologie/EnVentus-Plattform_Q1-2022_VestasBrochure_DE_WEB.pdf.coredownload.inline.pdf"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline"
                    >
                      EnVentus-Plattform – Vestas
                    </a>
                    <a
                      href="https://de.wikipedia.org/wiki/Sexau"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline"
                    >
                      Wikipedia – Sexau
                    </a>
                    <a
                      href="https://earth.google.com/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline"
                    >
                      Google Earth
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
              <AssetImageViewer
                title="Höhenprofil"
                src="/03.jpg"
                alt="Höhenprofil"
                caption="Die jeweiligen Höhen sind maßstabgerecht eingezeichnet, Maßstab
                1:5000 Höhen aus Angaben von Google Earth errechnet"
              />
            </UCard>

            <UCard
              class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 p-5"
            >
              <AssetImageViewer
                title="  Sexau mit den geplanten Windenergieanlagen"
                src="/00.jpg"
                alt="Sexau mit den geplanten Windenergieanlagen"
              />
            </UCard>
          </div>
        </aside>
      </div>
    </UContainer>
     <ChapterNavigation />
  </div>
</template>
