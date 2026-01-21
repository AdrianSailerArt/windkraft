<!-- pages/risiken-gemeinde-sexau.vue -->
<script setup lang="ts">
const title = "Risiken für die Gemeinde Sexau";
const description =
  "EEG § 6 Zahlungen (bis 0,2 ct/kWh), wirtschaftliche Risiken durch Subventionsabhängigkeit und negative Preise, Haftungsrisiken bei Insolvenz sowie Rückbaukosten – mit Beispielen aus der Branche.";

useSeoMeta({
  title,
  description,
  ogTitle: "Risiken für die Gemeinde Sexau",
  ogDescription:
    "EEG § 6 Zahlungen vs. reale Risiken: Subventionsabhängigkeit, negative Preise, Konkurrenz durch PV, Zwangsabschaltungen, Haftung bei Insolvenz und Rückbaukosten.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/risiken-gemeinde-sexau`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });
</script>

<template>
  <div class="relative">
    <!-- Background decoration (light + dark) -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl dark:bg-rose-900/14"
      />
      <div
        class="absolute top-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-amber-100/35 blur-3xl dark:bg-amber-900/12"
      />
      <div
        class="absolute bottom-0 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-indigo-100/35 blur-3xl dark:bg-indigo-900/12"
      />
    </div>
  <ChapterNavigation class="mt-16" />
    <UContainer class="relative py-12">
      <!-- HERO -->
      <UCard
        class="overflow-hidden bg-white/85 dark:bg-gray-950/35 border border-gray-200/60 dark:border-gray-800/60"
      >
        <div class="grid lg:grid-cols-12">
          <div class="lg:col-span-8 p-8 sm:p-12">
            <div class="flex flex-wrap gap-2">
              <UBadge color="warning" variant="soft" icon="i-lucide-coins"
                >Einnahmen</UBadge
              >
              <UBadge
                color="warning"
                variant="soft"
                icon="i-lucide-alert-triangle"
                >Haftung</UBadge
              >
              <UBadge color="error" variant="soft" icon="i-lucide-file-warning"
                >Insolvenz</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Risiken für die Gemeinde Sexau
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Die der Gemeinde Sexau in Aussicht gestellten Einnahmen klingen auf den ersten Blick verlockend. Die
              Risiken werden dadurch leicht verdrängt. Diese Risiken sind jedoch
              durchaus real und werden mit jeder weiteren in Deutschland errichtetend Windenergieanlage
              wahrscheinlicher.
            </p>

            <div
              class="mt-6 h-px bg-gradient-to-r from-rose-300/85 via-amber-300/70 to-transparent dark:from-rose-500/28 dark:via-amber-500/22"
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
                    EEG § 6
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    bis 0,2 ct/kWh
                  </p>
                </div>

                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Anlagen
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    4 × 7,2 MW
                  </p>
                </div>

                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Rückbau
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Ø 305.000 € / Anlage
                  </p>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </UCard>

      <!-- EYECATCHER STRIP -->
      <div class="mt-10 max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
        >
          <div class="h-1 bg-amber-400/70 dark:bg-amber-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Einnahmen
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              0,2 ct/kWh – Aufteilung im 2,5 km Radius
            </p>
          </div>
        </UCard>

        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
        >
          <div class="h-1 bg-rose-400/70 dark:bg-rose-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Worst Case
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Insolvenz → Haftungs- & Rückbaurisiko
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
              Systemrisiko
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              EEG/Preise/PV-Ausbau → Rentabilität kippt
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
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiBadge tone="amber" title="7,2 MW" subtitle="Nennleistung " />
              <KpiBadge
                tone="rose"
                title="1,22 Mio. €"
                subtitle="Rückbau 4 Anlagen "
              />
              <KpiBadge tone="rose" title="Insolvenz" subtitle="Haftung " />
              <KpiBadge tone="amber" title="EEG" subtitle="Subvention " />
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
              <h2 class="text-xl">§ 6 EEG 2023: Zahlungen an Gemeinden</h2>
              <br />
              <p>
                Der § 6 EEG 2023 regelt, dass die Betreiber von
                Windenergieanlagen, den betroffenen Gemeinden bis zu 0,2 Cent
                pro Kilowattstunde für die tatsächlich eingespeiste Strommenge
                und für die fiktive Strommenge zahlen können. Als betroffen
                gelten Gemeinden, die sich im Umkreis von 2,5 km um die
                Windenergieanlage befinden. Die 0,2 Cent je Kilowattstunde
                werden also zwischen Sexau, Emmendingen und Waldkirch
                aufgeteilt, wobei Sexau den größten Teil erhalten soll.
              </p>
              <br />
              <p>
                Die vier Windanlagen, die der Betreiber in Sexau installieren
                will, haben eine Nennleistung von jeweils 7,2 MW. Diese Leistung
                beschreibt die Spitzenleistung einer Anlage, ihre maximale
                Leistung. Die tatsächlich erzeugten Kilowattstunden liegen in
                der Regel deutlich darunter. Das gilt besonders bei Windenergie
                und Photovoltaik, denn die Erzeugung erneuerbarer Energien ist
                wetterbedingt starken Schwankungen unterworfen.
              </p>
              <br />
              <p>Zudem locken lukrative Pachteinnahmen.</p>
              <br />
              <div
                class="not-prose my-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 dark:border-amber-900/35 dark:bg-amber-950/16"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 rounded-lg bg-amber-500/10 p-2">
                    <UIcon
                      name="i-lucide-sparkles"
                      class="h-5 w-5 text-amber-700 dark:text-amber-300"
                    />
                  </div>
                  <p class="m-0 text-sm text-gray-800 dark:text-gray-200">
                    Alle diese Einnahmen klingen auf den ersten Blick
                    verlockend. Die Risiken werden dadurch leicht verdrängt.
                    Diese Risiken sind jedoch durchaus real und werden mit jeder
                    weiteren in Deutschland errichteten Windenergieanlage wahrscheinlicher.
                  </p>
                </div>
              </div>
              <br />
              <h2 class="text-xl">Risiken, die im Text genannt werden</h2>
              <br />
              <div
                class="not-prose my-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-6"
              >
                <ul
                  class="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-disc pl-5"
                >
                  <li>
                    Die Rentabilität von Windenergie hängt stark von der
                    Subventionierung nach dem EEG ab und diese wird mehr und
                    mehr in Frage gestellt. Sobald die EEG-Förderung entfällt,
                    wird jede Windkraftanlage zum Minusgeschäft.
                  </li>
                  <li>
                    Je öfter der Strompreis wegen einem Überangebot an Strom ins
                    Negative fällt und deshalb die Leistung gedrosselt bzw. die
                    Windräder ganz abgeschaltet werden, um so unrentabler
                    werden die Windräder.
                  </li>
                  <li>
                    Der stetige Ausbau von Photovoltaikanlagen ist eine direkte
                    Konkurrenz zur Windkraft. Je mehr Solarstrom ins Netz
                    eingespeist wird, um so weniger wird Windenergie gebraucht.
                    Um das Stromnetz bei zu viel eingespeistem Strom nicht zu
                    überlasten, drohen Zwangsabschaltungen.
                  </li>
                </ul>
              </div>
              <br />
              <h2 class="text-xl">Insolvenz: Haftung &amp; Rückbau</h2>
              <br />
              <p>
                Bei einem Konkurs der Betreibergesellschaft haftet die Gemeinde
                Sexau als Grundstückseigentümerin. Dieses Szenario muss auf
                jeden Fall in die Überlegungen mitaufgenommen werden.
              </p>
              <br />
              <p>
                Wenn der (insolvente) Betreiber das Grundstück nicht wieder in
                seinen Originalzustand zurückversetzt, wird es kompliziert. Im
                Regelfall wird die Windenergieanlage zum wesentlichen
                Bestandteil des Grundstücks (§ 94 BGB). Der
                Grundstückseigentümer muss eventuell den Restwert der Anlage an
                den Insolvenzverwalter des bisherigen Betreibers erstatten. Ist
                der Betreiber nicht fähig den Rückbau durchzuführen, ist dafür
                der Grundstückseigentümer verantwortlich.
              </p>
              <br />
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
                  <p class="m-0 text-sm text-gray-800 dark:text-gray-200">
                    Dies könnte also zu einem ausgewachsenen finanziellen
                    Desaster für die Gemeinde Sexau werden.
                  </p>
                </div>
              </div>
              <br />
              <p>
                Die Kosten für den Rückbau von Windenergieanlagen variieren je
                nach Anlagentyp, Standort und Größe erheblich. Laut Greenpeace
                belaufen sich die Rückbaukosten für Anlagen mit einer Leistung
                von 4,1 – 7,6 MW auf durchschnittlich 305.000 Euro pro
                Windenergieanlage. Für alle vier Windenergieanlagen sind das
                1,22 Millionen Euro.
              </p>
              <br />
              <p>
                Hinterlegte Sicherheitsleistungen der Betreibergesellschaft sind
                aus Kostengründen in der Regel zu niedrig angesetzt und decken
                lediglich einen Mindestwert, der bei weitem nicht ausreicht.
              </p>
              <br />
              <h2 class="text-xl">
                Rostocker Windradbauer meldet Insolvenz an
              </h2>
              <br />
              <p>
                Ein großer Hersteller von Windkraftanlagen mit rund 280
                Mitarbeitern hat im Oktober 2025 Insolvenz angemeldet. Das
                Unternehmen Eno Energy galt als einer der wichtigsten
                mittelständischen Hersteller von Windenergieanlagen in
                Norddeutschland. Das Unternehmen benennt folgende Gründe:
              </p>
              <br />
              <div
                class="not-prose my-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-6"
              >
                <ul
                  class="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-disc pl-5"
                >
                  <li>
                    Die vergangene Regierung hat die Genehmigung von
                    Windkraftprojekten stark beschleunigt. Zu hohe Ausgaben
                    seien die Folge gewesen. Parallel sinken die Preise durch
                    den anhaltenden Wettbewerb in der Branche.
                  </li>
                  <li>
                    Die neue Bundesregierung will lieber Gaskraftwerke als neue
                    Windparks bauen lassen.
                  </li>
                  <li>
                    Ein Lieferant der Rotorblätter hat den Liefervertrag
                    gekündigt, die Windkraftanlagen sei-en jedoch nur mit diesen
                    Blättern zertifiziert.
                  </li>
                </ul>
              </div>
              <br />
              <h2 class="text-xl">
                R21-Expertenrat: Subventionen für erneuerbare Energien
                einstellen
              </h2>
              <br />
              <p>
                Am 13.11.2025 wurde der mit 10.000 Euro dotierte
                „Ordnungspolitische Preis“ des Wirtschaftsverbandes DIE
                FAMILIENUNTERNEHMER in Berlin verliehen. Der Preis ging an neun
                Autoren für ihren Artikel „Der Befreiungsschlag“. Der Artikel
                wurde am 14.01.2025 in der Frankfurter Allgemeinen Zeitung FAZ
                veröffentlicht. Die Autoren zeigen in ihrem Artikel schonungslos
                auf, dass der deutsche Weg in der Energietransformation
                international die meisten Kosten verursacht hat, aber bei der
                Einsparung von Emissionen alles andere als effizient ist.
              </p>
              <br />
              <p>
                Alle Autoren bilden den R21-Expertenrat für Energie- und
                Klimapolitik. In ihrem Artikel prangern die Autoren an, dass
                Deutschland weit davon entfernt ist, eine rationale Antwort auf
                die Herausforderungen des Klimawandels zu geben. Der
                Expertenrat fordert für die deutsche und europäische
                Klimapolitik einen mutigen Befreiungsschlag, um den Niedergang
                der deutschen Wirtschaft zu stoppen und den Wohlstand des Landes
                zu sichern.
              </p>
              <br />
              <p>
                Der Expertenrat zeigt auf, dass das neue Energiesystem deutlich
                weniger Versorgungssicherheit bietet als das alte und zudem
                erheblich teureren Strom produziert. Die Energiewende führt zu
                erheblichen sozialen Kosten durch den Landschaftsverbrauch der
                Wind- und zunehmend der Solarenergie.
              </p>
              <br />
              <p>
                Der Expertenrat fordert u.a., die Subventionen für den Ausbau
                erneuerbarer Energien so schnell wie möglich einzustellen.
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
                      href="https://www.gesetze-im-internet.de/eeg_2014/__6.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.gesetze-im-internet.de/eeg_2014/__6.html
                    </a>
                    <a
                      href="https://www.eon.de/de/gk/energiewissen/nennleistung-installierte-leistung.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.eon.de/de/gk/energiewissen/nennleistung-installierte-leistung.html
                    </a>
                    <a
                      href="https://www.heid-immobilienbewertung.de/magazin/windkraftanlage-wertermittlung/#wertminderung-von-grundstuecken-in-der-umgebung-einer-windkraftanlage-"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.heid-immobilienbewertung.de/magazin/windkraftanlage-wertermittlung/#wertminderung-von-grundstuecken-in-der-umgebung-einer-windkraftanlage-
                    </a>
                    <a
                      href="https://www.greenpeace.de/publikationen/Studie%20Windkraft-Ru%CC%88ckbau.pdf"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.greenpeace.de/publikationen/Studie%20Windkraft-Ru%CC%88ckbau.pdf
                    </a>
                    <a
                      href="https://www.focus.de/finanzen/200-arbeitsplaetze-in-gefahr-windradbauer-aus-rostock-muss-insolvenz-anmelden_9e1e81d4-91f8-43e4-9803-3cddd2d654de.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.focus.de/finanzen/200-arbeitsplaetze-in-gefahr-windradbauer-aus-rostock-muss-insolvenz-anmelden_9e1e81d4-91f8-43e4-9803-3cddd2d654de.html
                    </a>
                    <a
                      href="https://www.familienunternehmer.eu/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.familienunternehmer.eu/
                    </a>
                    <a
                      href="https://denkfabrik-r21.de/der-befreiungsschlag/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://denkfabrik-r21.de/der-befreiungsschlag/
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
                    Risiko-Kaskade
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Einnahmen → Unsicherheit → Haftung
                  </div>
                </div>
              </div>

              <div
                class="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <div
                  class="rounded-xl border border-amber-200/60 dark:border-amber-900/35 bg-amber-50/60 dark:bg-amber-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    1) Einnahmen
                  </p>
                  <p class="mt-1">§ 6 EEG + Pacht .</p>
                </div>

                <div
                  class="rounded-xl border border-indigo-200/60 dark:border-indigo-900/35 bg-indigo-50/60 dark:bg-indigo-950/14 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    2) Rentabilität kippt
                  </p>
                  <p class="mt-1">EEG/Preise/PV/Zwangsabschaltungen .</p>
                </div>

                <div
                  class="rounded-xl border border-rose-200/60 dark:border-rose-900/35 bg-rose-50/60 dark:bg-rose-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    3) Worst Case
                  </p>
                  <p class="mt-1">
                    Insolvenz → Grundstückseigentümer verantwortlich .
                  </p>
                </div>
              </div>
            </UCard>

            <UCard
              class="p-5 border bg-rose-50/70 border-rose-200/60 dark:bg-rose-950/14 dark:border-rose-900/30"
            >
              <div
                class="text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Kostenanker
              </div>
              <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
                „305.000 Euro pro Windenergieanlage“ (4,1–7,6 MW) → bei vier
                Anlagen „1,22 Millionen Euro“.
              </p>
            </UCard>

            <UAlert
              color="neutral"
              variant="soft"
              icon="i-lucide-shield-alert"
              title="Merksatz"
              description="Einnahmen wirken sofort – Risiken zeigen sich oft erst später, dann aber finanziell erheblich."
            />
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
