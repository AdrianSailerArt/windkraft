<!-- pages/schattenwurfprognose-unvollstaendig.vue -->
<script setup lang="ts">
const title = "Schattenwurfprognose – unvollständig und mit veralteten Daten";
const description =
  "Schattenwurf: Anforderungen der LUBW/LAI-Hinweise, fehlende Anlagen in der Prognose, „vorläufige“ Rotorblattwerte und veraltete Sonnenscheindaten (Freiburg vs. DWD).";

useSeoMeta({
  title,
  description,
  ogTitle: "Schattenwurfprognose – unvollständig und mit veralteten Daten",
  ogDescription:
    "Kritikpunkte an der Schattenwurfprognose: 2 Anlagen fehlen, Rotorblattwerte „vorläufig“, Sonnenscheinwahrscheinlichkeit mit veralteten Daten angesetzt.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/schattenwurfprognose-unvollstaendig`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });

const sunshineRows = [
  {
    label: "Schattenwurfprognose der Betreibergesellschaft",
    Jan: "1,82",
    Feb: "3,04",
    Mär: "4,05",
    Apr: "5,34",
    Mai: "6,49",
    Jun: "6,96",
    Jul: "8,01",
    Aug: "7,90",
    Sep: "5,97",
    Okt: "3,31",
    Nov: "2,47",
    Dez: "1,69",
    Durchschnitt: "4,75",
  },
  {
    label:
      "durchschnittl. Werte des Deutschen Wetterdienstes aus den Jahren 2015-2025, ermittelt über WetterKontor",
    Jan: "1,98",
    Feb: "3,49",
    Mär: "5,1",
    Apr: "6,5",
    Mai: "6,82",
    Jun: "8,35",
    Jul: "8,26",
    Aug: "7,85",
    Sep: "6,37",
    Okt: "3,81",
    Nov: "2,15",
    Dez: "1,89",
    Durchschnitt: "5,22",
  },
  {
    label: "Unterschied",
    Jan: "+0,16",
    Feb: "+0,45",
    Mär: "+1,05",
    Apr: "+1,16",
    Mai: "+0,33",
    Jun: "+1,39",
    Jul: "+0,25",
    Aug: "-0,05",
    Sep: "+0,4",
    Okt: "+0,5",
    Nov: "-0,32",
    Dez: "+0,2",
    Durchschnitt: "+0,47",
  },
];

const months = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
  "Durchschnitt",
];
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
        class="absolute bottom-0 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-rose-100/35 blur-3xl dark:bg-rose-900/12"
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
              <UBadge color="warning" variant="soft" icon="i-lucide-sun"
                >Schattenwurf</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-file-warning"
                >Prognose</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-calendar-clock"
                >Datenstand</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Schattenwurfprognose – unvollständig und mit veralteten Daten
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Die Landesanstalt für Umwelt Baden-Württemberg regelt die
              Genehmigungsverfahren für Windenergieanlagen. Es werden die
              rechtlich verbindlichen Regelungen des Immissionsschutzes geprüft,
              etwa in den Bereichen Lärm, Infraschall oder Schattenwurf.
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
                  <p class="text-xs text-gray-500 dark:text-gray-400">Regel</p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Alle WKA im Umkreis einbeziehen
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Fehlende WKA
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    WKA 3 &amp; WKA 4
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Abweichung
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    ~ 10 % längere Sonne
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
                title="1995–2006"
                subtitle="Sensor Freiburg "
              />
              <KpiBadge tone="rose" title="+2" subtitle="WKA fehlen " />
              <KpiBadge tone="amber" title="+0,47 h" subtitle="Ø/Tag " />
              <KpiBadge tone="amber" title="~ 10 %" subtitle="länger Sonne " />
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
              <h2 class="text-xl">
                Regelwerk: optische Immissionen &amp; Einbeziehung aller Anlagen
              </h2>
              <br />
              <p>
                Die von der Landesanstalt herausgegebenen Hinweise zur
                Ermittlung und Beurteilung der optischen Immissionen von
                Windkraftanlagen (WKA-Schattenwurfhinweise) regeln näheres:
              </p>
              <br />
              <blockquote>
                „Wissenschaftliche Untersuchungen belegen die Erfahrung, dass
                Windkraftanlagen (WKA) durch den bewegten Anlagenrotor optische
                Immissionen insbesondere in Form periodischen Schattenwurfs mit
                erheblichen Belästigungswirkungen (Stressor) in der
                Nachbarschaft hervorrufen können. Bei der Entscheidung über die
                Genehmigung von WKA ist auf der Grundlage dieser Hinweise von
                der zuständigen Immissionsschutzbehörde zu prüfen, ob die
                Anforderungen des Immissionsschutzrechts in Bezug auf die
                Einwirkung durch Lichtblitze und bewegten, periodischen
                Schattenwurf durch den Rotor von den Anlagen eingehalten werden,
                ggf. ist die Genehmigung mit entsprechenden Nebenbestimmungen zu
                versehen…“
              </blockquote>
              <br />
              <blockquote>
                „Bei der Beurteilung sind alle WKA im Umkreis einzubeziehen, die
                auf den jeweiligen Immissionspunkt einwirken.“
              </blockquote>
              <br />
              <p>
                [Auszug: Landesanstalt für Umwelt Baden-Württemberg - Hinweise
                zur Ermittlung und Beurteilung der optischen Immissionen von
                Windkraftanlagen (WKA-Schattenwurfhinweise)]
              </p>
              <br />
              <div class="not-prose my-8 flex items-center gap-3">
                <div class="h-px flex-1 bg-gray-200/80 dark:bg-gray-800/70" />
                <UBadge color="info" variant="soft">Unvollständig</UBadge>
                <div class="h-px flex-1 bg-gray-200/80 dark:bg-gray-800/70" />
              </div>
              <br />
              <h2 class="text-xl">
                Zwei Windanlagen fehlen in der Schattenwurfprognose
              </h2>
              <br />
              <p>
                Die von der Betreibergesellschaft vorgelegte
                Schattenwurfprognose entspricht NICHT den Regelungen des
                Immissionsschutzes. Diese Schattenwurfprognose schließt
                lediglich 2 der geplanten Windkraftanlagen ein (WKA 1 und WKA
                2).
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
                    Im unmittelbaren Umkreis sind von der gleichen
                    Betreibergesellschaft jedoch auch die beiden weiteren
                    Windkraftanlagen geplant (WKA 3 und WKA 4). Diese beiden
                    Windkraftanlagen fehlen in der Schattenwurfprognose.
                  </p>
                </div>
              </div>
              <br />
              <h2 class="text-xl">
                Rotorblatttiefen – Berechnung mit „vorläufigen“ Werten
              </h2>
              <br />
              <p>
                In der Schattenwurfprognose werden die zugrunde gelegten Werte
                zu den Rotorblatttiefen als vorläufig angegeben. Wieso
                vorläufig? Beispielsweise hängt die angegebene Nennleistung von
                7,2 kW direkt mit den Rotorblättern zusammen. Außerdem ist der
                Anlagentyp Vestas V172 bereits seit 2022 auf dem Markt. Die
                Berechnung hätte mit den tatsächlichen Werten durchgeführt
                werden können.
              </p>
              <br />
              <p>
                „Vorläufige“ Werte aus der Schattenwurfprognose (siehe
                nachfolgende Abbildung): Beispielsweise wird die max. Blatttiefe
                für die geplanten Windanlagen des Typs V172 (Rotordurchmesser
                172 m) mit 4350 mm angegeben, also lediglich 30 mm Blatttiefe
                mehr als die Vorgängerversion V162 (Rotordurchmesser 162 m) mit
                einem 10 m geringeren Rotordurchmesser.
              </p>
              <br />
              <p>
                Ganz kurios wird es in der nächsten Spalte „Blatttiefe bei 90%
                Radius“. Hier schrumpft die Blatttiefe bei der V172 plötzlich
                auf 1261 mm, während sie bei der Vorgängerversion V162 noch 1690
                mm aufwies. Bei sämtlichen Vorgängerversionen stiegt die
                Blatttiefe jeweils deutlich an.
              </p>
              <br />
              <p>
                Dementsprechend ist die Mittlere Blatttiefe mit 2806 mm
                ebenfalls fehlerhaft (errechnet sich aus max. Blatttiefe und
                Blatttiefe bei 90% Radius).
              </p>
              <br />
              <div
                class="not-prose my-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-5"
              >
                <div class="flex items-center justify-between gap-3">
                  <div>
                    
                    <p
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                   Durch diese zu niedrig angesetzten „vorläufigen“ Werte ergeben sich in der Folge zu niedrig angesetzte Angaben zum Schattenwurf. Der Schattenwurf dürfte deutlich ausgeprägter sein als angegeben.

                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <!-- Bild später ersetzen -->
                  <AssetImageViewer
                    src="/20.png"
                    alt="Vorläufige Werte – Rotorblatttiefen (Schattenwurfprognose)"
                    ratio="16/9"
                  />
                </div>
              </div>
              <br />
              <p>
                Durch diese zu niedrig angesetzten „vorläufigen“ Werte ergeben
                sich in der Folge zu niedrig angesetzte Angaben zum
                Schattenwurf. Der Schattenwurf dürfte deutlich ausgeprägter sein
                als angegeben.
              </p>
              <br />
              <div class="not-prose my-8 flex items-center gap-3">
                <div class="h-px flex-1 bg-gray-200/80 dark:bg-gray-800/70" />
                <UBadge color="warning" variant="soft">Veraltete Daten</UBadge>
                <div class="h-px flex-1 bg-gray-200/80 dark:bg-gray-800/70" />
              </div>
              <br />
              <h2 class="text-xl">
                Sonnenscheinwahrscheinlichkeit – zu niedrige Werte angesetzt
              </h2>
              <br />
              <p>
                Für die Schattenwurfberechnung sind die täglichen Sonnenstunden
                wichtig. Die Schattenwurfprognose der Betreibergesellschaft
                wurde mit dem Programm windPRO (Modul SHADOW) erstellt. Als
                Werte für die monatliche Sonnenscheinwahrscheinlichkeit wurden
                die Daten der Klimastation in Freiburg verwendet. Dies lässt
                sich im Programm so einstellen.
              </p>
              <br />
              <p>
                Die Messwerte für die Sonnenscheindauer werden über einen Sensor
                an der Wetterstation ermittelt. An vielen Stationen des
                Deutschen Wetterdienstes wurde die Sonnenschein-Messsensorik
                mittlerweile abgebaut. So auch an der Wetterstation Freiburg, wo
                die Sonnenscheindauer vom Jahr 1995 bis zum Jahr 2006 über einen
                Sensor ermittelt wurde.
              </p>
              <br />
              <p>
                Mittlerweile werden durch den Deutschen Wetterdienst Daten
                bereitgestellt, die auch Messwerte der Meteosat-Satelliten bei
                der Bestimmung der Sonnenscheindauer mitberücksichtigen.
              </p>
              <br />
              <p>
                Die Daten des Deutschen Wetterdienstes sind also wesentlich
                aktueller als die veralteten Daten der Wetterstation Freiburg,
                die ja seit dem Jahr 2006 die Sonnenscheindauer nicht mehr
                ermittelt.
              </p>
              <br />
              <p>
                Dieser Punkt innerhalb der Schattenwurfberechnung ist
                insbesondere deshalb wichtig, weil die Sonnenscheindauer
                sukzessive zunimmt. Der Deutsche Wetterdienst hat ermittelt,
                dass dies durchgängig durch alle Jahreszeiten der Fall ist.
                Schaut man sich nur die Jahre ab 2011 an (14 Jahre), so gab es
                im Mittel im Vergleich zu 1961 bis 1990 insgesamt 200
                Sonnenstunden mehr (+13%).
              </p>
              <br />
              <div
                class="not-prose my-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-5"
              >
                <div class="flex items-center justify-between gap-3">
                  <div>
                   
                    <p
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                     In der Grafik sieht man die Veränderung der Sonnenscheindauer in h (oben) bzw. Prozent (unten) für die einzelnen Monate, Jahreszeiten und das Gesamtjahr) im Vergleich verschiedener Referenzperioden zu 1961 bis 1990
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <!-- Bild später ersetzen -->
                  <AssetImageViewer
                    src="/12.png"
                    alt="Veränderung der Sonnenscheindauer (DWD) – Vergleich der Referenzperioden"
                    ratio="16/9"
                  />
                  <AssetImageViewer
                    src="/13.JPG"
                    alt="Veränderung der Sonnenscheindauer (DWD) – Vergleich der Referenzperioden"
                    ratio="16/9"
                  />
                </div>
              </div>
              <br />
              <p>
                In der Schattenwurfberechnung der Betreibergesellschaft wurden
                die nachfolgenden Werte zur Sonnenscheinwahrscheinlichkeit
                angesetzt:
              </p>
              <br />
              <div class="not-prose my-10">
                <UCard
                  class="overflow-hidden bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60"
                >
                  <div
                    class="px-6 py-4 bg-gradient-to-r from-amber-50/70 via-white to-indigo-50/60 dark:from-amber-950/14 dark:via-gray-950/10 dark:to-indigo-950/14 border-b border-gray-200/60 dark:border-gray-800/60"
                  >
                    <div class="flex items-center justify-between gap-3">
                      <div>
                        <p
                          class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                        >
                          Vergleich
                        </p>
                        <p
                          class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                        >
                          Sonnenscheindauer pro Tag
                        </p>
                      </div>
                      <UBadge color="info" variant="soft">Tabelle</UBadge>
                    </div>
                  </div>

                  <div class="p-6">
                    <div
                      class="overflow-x-auto rounded-xl border border-gray-200/60 dark:border-gray-800/60"
                    >
                      <table class="min-w-[920px] w-full text-sm">
                        <thead class="bg-gray-50/80 dark:bg-gray-950/20">
                          <tr>
                            <th
                              class="p-3 text-left font-semibold text-gray-900 dark:text-gray-100"
                            ></th>
                            <th
                              v-for="m in months"
                              :key="m"
                              class="p-3 text-right font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap"
                            >
                              {{ m }}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(row, idx) in sunshineRows"
                            :key="row.label"
                            class="border-t border-gray-200/60 dark:border-gray-800/60"
                            :class="
                              idx === 2
                                ? 'bg-amber-50/60 dark:bg-amber-950/12'
                                : ''
                            "
                          >
                            <td
                              class="p-3 text-left text-gray-800 dark:text-gray-200 font-medium min-w-[320px]"
                            >
                              {{ row.label }}
                            </td>
                            <td
                              v-for="m in months"
                              :key="m"
                              class="p-3 text-right text-gray-800 dark:text-gray-200"
                            >
                              {{ (row as any)[m] }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p class="mt-4 text-sm text-gray-700 dark:text-gray-300">
                      Bei der Betrachtung der Werte fällt auf, dass die Sonne
                      durchschnittlich 0,47 Stunden pro Tag länger scheint, als
                      in der Schattenwurfprognose des Betreibers angegeben. In
                      Prozent ausgedrückt, scheint die Sonne ca. 10% länger als
                      für den Schattenwurf berücksichtigt.
                    </p>
                  </div>
                </UCard>
              </div>
              <br />
              <p>
                Über WetterKontor.de können alle Daten zur Sonnenscheindauer,
                also auch die aktuellen Daten, abgerufen werden. Die Daten
                werden vom Deutschen Wetterdienst eingespeist.
              </p>
              <br />
              <p>
                Bereits mit den Werten aus der Schattenwurfprognose der
                Betreibergesellschaft müssen die Windanlagen mit einer
                Abschaltautomatik versehen werden, um die Richtwerte für die
                Beschattungsdauer einzuhalten. Tatsächlichen scheint die Sonne
                jedoch ca. 10% länger, was entsprechend die Schattenwurfzeit
                erhöht. Aus diesem Grund werden die Abschaltzeiten für die
                Windanlagen länger.
              </p>
              <br />
              <p>
                Entsprechend den Daten des Deutschen Wetterdienstes wird sich
                die Sonnenscheindauer in Zukunft noch weiter erhöhen, was für
                die folgenden Jahre zu noch längeren Abschaltzeiten für die
                Windanlagen führen wird.
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
                          Links & Dokument
                        </p>
                      </div>
                      <UBadge color="neutral" variant="soft">Quellen</UBadge>
                    </div>
                  </div>

                  <div class="p-6 space-y-3 text-sm">
                    <a
                      href="https://www.lubw.baden-wuerttemberg.de/erneuerbare-energien/genehmigungsverfahren"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.lubw.baden-wuerttemberg.de/erneuerbare-energien/genehmigungsverfahren
                    </a>

                    <a
                      href="https://www.lubw.baden-wuerttemberg.de/documents/10184/61110/Anlage+-+LAI_WKA_Schattenwurfhinweise.pdf"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.lubw.baden-wuerttemberg.de/documents/10184/61110/Anlage+-+LAI_WKA_Schattenwurfhinweise.pdf
                    </a>

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
                        „DSV2025-201-Windpark-PI-10.2.1_SEP-SWP-Rev.01-MuS“
                      </p>
                      <a
                        href="https://sexau.mein-intra.net/export/auth/8a798c34-e479f049-a68ee916-b6803803/data/file/councilservice/2/1/1/6/DSV2025-201-Windpark-PI-10.2.1_SEP-SWP-Rev.01-MuS.pdf"
                        class="mt-2 inline-flex items-center gap-2 text-indigo-600 hover:underline dark:text-indigo-300 text-sm"
                        target="_blank"
                        rel="noopener"
                      >
                        <UIcon name="i-lucide-file-text" class="h-4 w-4" />
                        Dokument öffnen
                      </a>
                     
                    </div>

                    <a
                      href="https://help.emd.dk/mediawiki/index.php/SHADOW-Berechnung"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://help.emd.dk/mediawiki/index.php/SHADOW-Berechnung
                    </a>

                    <a
                      href="https://cdc.dwd.de/rest/metadata/station/html/812300590823"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://cdc.dwd.de/rest/metadata/station/html/812300590823
                    </a>

                    <a
                      href="https://www.wetterkontor.de/wetter-rueckblick/monats-und-jahreswerte.asp?id=60&jr0=2015&jr1=2025&mo0=1&mo1=12"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.wetterkontor.de/wetter-rueckblick/monats-und-jahreswerte.asp?id=60&jr0=2015&jr1=2025&mo0=1&mo1=12
                    </a>

                    <a
                      href="https://www.dwd.de/DE/wetter/thema_des_tages/2025/4/10.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.dwd.de/DE/wetter/thema_des_tages/2025/4/10.html
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
                    Kurzpunkte
                  </div>
                </div>
              </div>

              <div
                class="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <div
                  class="rounded-xl border border-rose-200/60 dark:border-rose-900/35 bg-rose-50/60 dark:bg-rose-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Prognose unvollständig
                  </p>
                  <p class="mt-1">Es fehlen WKA 3 und WKA 4 .</p>
                </div>

                <div
                  class="rounded-xl border border-amber-200/60 dark:border-amber-900/35 bg-amber-50/60 dark:bg-amber-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    „Vorläufige“ Rotorblattwerte
                  </p>
                  <p class="mt-1">
                    Blatttiefen/abgeleitete Werte werden als problematisch
                    beschrieben .
                  </p>
                </div>

                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/70 dark:bg-gray-950/20 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Sonnenscheindauer
                  </p>
                  <p class="mt-1">Vergleich führt zu +0,47 h/Tag bzw. ~10% .</p>
                </div>
              </div>
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
                Fehlende Anlagen in der Prognose, „vorläufige“
                Rotorblattparameter und zu niedrige
                Sonnenscheinwahrscheinlichkeiten – mit Konsequenzen für
                Schattenwurf und Abschaltzeiten.
              </p>
            </UCard>
          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
