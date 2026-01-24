<!-- pages/stromnetz-nicht-geeignet-erneuerbare.vue -->
<script setup lang="ts">
const title = "Deutsches Stromnetz ist NICHT für erneuerbare Energie geeignet";
const description =
  "Warum Windräder trotz Wind stillstehen: Netzüberlastung durch schwankende Einspeisung, Redispatch/Abregelung, Entschädigungen, negative Strompreise, fehlende Speicher – und Lösungen wie Südlink/Ultranet.";

useSeoMeta({
  title,
  description,
  ogTitle: "Deutsches Stromnetz ist NICHT für erneuerbare Energie geeignet",
  ogDescription:
    "Netzfrequenz, Abregelung (Redispatch), Entschädigungen, negative Börsenpreise und fehlende Speicher: Warum Windräder trotz Wind stillstehen können.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/stromnetz-nicht-geeignet-erneuerbare`
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
              <UBadge color="warning" variant="soft" icon="i-lucide-activity"
                >Netzfrequenz</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-sun-wind"
                >Abregelung</UBadge
              >
              <UBadge color="error" variant="soft" icon="i-lucide-trending-down"
                >Negative Preise</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Deutsches Stromnetz ist NICHT für erneuerbare Energie geeignet
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Die Rotoren an Windrädern drehen sich nicht – trotz einer frischen
              Brise. Es gibt verschiedene Gründe, weshalb die Anlagen gedrosselt
              oder ganz abgeschaltet werden müssen.
            </p>

            <div
              class="mt-6 h-px bg-gradient-to-r from-indigo-300/85 via-amber-300/70 to-transparent dark:from-indigo-500/30 dark:via-amber-500/22"
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
                    Stabilität
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    50 Hertz
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Abregelung 2024
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    9,4 TWh
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Entschädigung 2024
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    ~ 550 Mio. €
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
                tone="emerald"
                title="50 Hz"
                subtitle="Ziel-Frequenz "
              />
              <KpiBadge tone="rose" title="49,5–50,2" subtitle="kritisch " />
              <KpiBadge
                tone="amber"
                title="9,4 TWh"
                subtitle="abgeregelt 2024 "
              />
              <KpiBadge
                tone="amber"
                title="~ 550 Mio. €"
                subtitle="Entschädigung 2024 "
              />
            </div>

            <div class="h-px bg-gray-200/70 dark:bg-gray-800/70" />

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KpiBadge tone="gray" title="~ 20 %" subtitle="Ø Windleistung " />
              <KpiBadge
                tone="rose"
                title="~ 6×/Jahr"
                subtitle="Dunkelflauten "
              />
              <KpiBadge
                tone="emerald"
                title="2028"
                subtitle="Südlink/Ultranet "
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
              <br />
              <h2 class="text-xl">Warum Windräder trotz Wind stillstehen</h2>
              <br />
              <p>
                Die Rotoren an Windrädern drehen sich nicht – trotz einer
                frischen Brise. Es gibt verschiedene Gründe, weshalb die Anlagen
                gedrosselt oder ganz abgeschaltet werden müssen :
              </p>
              <br />
              <div
                class="not-prose my-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-6"
              >
                <ul
                  class="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-disc pl-5"
                >
                  <li>
                    Das Stromnetz wird durch schwankenden eingespeisten Strom
                    überlastet
                  </li>
                  <li>Fallende Strompreise</li>
                  <li>Wartungen von Windkraftanlagen</li>
                  <li>Automatische Abschaltung zum Eigenschutz</li>
                  <li>Abschaltung für den Tier- und Anwohnerschutz</li>
                </ul>
              </div>
              <br />
              <h2 class="text-xl">
                Das Stromnetz wird durch schwankenden eingespeisten Strom
                überlastet
              </h2>
              <br />
              <p>
                Einer der Gründe, warum Windräder bei Wind stillstehen, ist das
                Stromnetz der Bundesrepublik – eine komplexe, über Jahrzehnte
                gewachsene Infrastruktur mit einer stabilen Frequenz von 50
                Hertz. Schwankt diese zu stark, ist die Stromversorgung
                gefährdet. Nähert sich der Wert einer Frequenz über 50,2 oder
                unter 49,5 Hertz, müssen Ausgleichsmaßnahmen treffen werden, um
                eine Überlastung des Stromnetzes und Stromausfälle zu vermeiden.
              </p>
              <br />
              <p>
                Früher sorgten große Kraftwerke für die nötige Stabilität, denn
                sie produzierten durchgängig die gleiche Leistung. Die
                Netzfrequenz blieb fast wie von selbst bei 50 Hertz. Wind- und
                Solaranlagen produzieren jedoch ungleichmäßig, je nach
                Wetterlage mehr oder weniger. Die Stromerzeugung schwankt
                wetterabhängig stark und damit kommt es zu starken Schwankungen
                der Frequenz. Die Folge daraus: Bei zu viel Sonne oder Wind
                müssen Anlagen gedrosselt bzw. ganz abgeschaltet werden, bei zu
                wenig Sonne oder windschwachen Zeiten müssen andere
                (Reserve-)Kraftwerke zugeschaltet werden. Die Kraftwerke werden
                meist mit Kohle oder Gas betrieben. Nur so kann die Netzfrequenz
                trotz der stärkeren Schwankungen stabil gehalten werden. Reichen
                die Inlandskapazitäten nicht, wird Strom aus dem Ausland
                zugekauft.
              </p>
              <br />
              <!-- Dramaturgie-Callout -->
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
                    Im Jahr 2024 mussten so etwa 9,4 Terawattstunden
                    erneuerbarer Strom über diesen Redispatch abgeregelt werden,
                    um die Netzfrequenz zu sichern.
                  </p>
                </div>
              </div>
              <br />
              <p>
                Dies entspricht in etwa so viel Strom, wie ganz Deutschland in
                rund einer Woche verbraucht. Oder so viel, wie etwa zweieinhalb
                Millionen Zwei-Personen-Haushalte in einem Jahr verbrauchen.
              </p>
              <br />
              <p>
                Die abgeregelte Energie wird als Ausfallarbeit bezeichnet, wofür
                die Anlagenbetreiber gemäß dem Erneuerbare-Energien-Gesetz (EEG)
                eine Entschädigung erhalten, also Geld für NICHT erzeugten
                Strom. Nach vorläufigen Angaben der Bundesnetzagentur betrug die
                Summe der Ent-schädigungsansprüche für abgeregelte
                Erneuerbare-Energien-Anlagen im Jahr 2024 rund 550 Millionen
                Euro.
              </p>
              <br />
              <p>
                Die Entschädigungszahlungen werden finanziert über das
                sogenannte EEG-Konto, das früher aus der EEG-Umlage gespeist
                wurde - also direkt über die Stromrechnung der Verbraucher. Seit
                2022 kommt das Geld aus dem Bundeshaushalt – also aus
                Steuergeldern.
              </p>
              <br />
              <p>
                Im Februar 2022 wurde der Höchstwert mit 56.718 MW von 58.000 MW
                möglicher installierter Leistung aller verfügbaren Windräder
                eingespeist, da sie fast voll produziert haben. Zu anderen
                Zeiten kommt es vor, dass die Gesamtproduktion der
                Windkraftanlagen nahe bei Null liegt. Es weht einfach nicht
                immer irgendwo Wind. Im Jahresdurchschnitt wurde nur knapp 20 %
                der maximal möglichen Windkraft-Leistung realisiert und ins Netz
                eingespeist.
              </p>
              <br />
              <!-- Grafik: Maximale Einspeisung -->
              <div
                class="not-prose my-8 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-5"
              >
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <p
                      class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                    >
                      Grafik
                    </p>
                    <p
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Maximale Einspeisung aus Windenergieanlagen im Jahr 2022
                    </p>
                  </div>
                  <UBadge color="info" variant="soft">Bundesnetzagentur</UBadge>
                </div>
                <div class="mt-4">
                  <AssetImageViewer
                    src="/15.JPG"
                    alt="Gründe für abgelehnte oder zurückgezogene Vorhaben"
                    ratio="16/9"
                  />
                </div>
                <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  Grafik: Bundesnetzagentur
                </p>
              </div>
              <br />
              <p>
                Die Frage, wie viele Haushalte ein Windpark mit Strom versorgen
                kann, muss vor diesem Hintergrund anders beantwortet werden. Da
                der Wind nicht stetig weht, kann der Strom auch nicht
                bedarfsgerecht erzeugt werden. Somit ist korrekterweise die
                Frage mit genau keiner zu beantworten. Daran können auch noch
                mehr Anlagen nichts ändern.
              </p>
              <br />
              <p>
                Welche Gefahren mit den Schwankungen und Instabilitäten in den
                europäischen Stromnetzen verbunden ist, zeigt der Strom-Blackout
                vom 28.04.2025 auf der iberischen Halbinsel. In ganz Spanien und
                Portugal war der Strom stundenlang weg. Ursache war eine
                Überspannung, also zu viel Strom im Netz. Das löste eine
                Kettenreaktion von Abschaltungen aus. Mit Ausbau der
                erneuerbaren Energien steigt die Gefahr für weitere Blackouts.
              </p>
              <br />
              <p>
                Laut einer Studie des Netzbetreibers Amprion kommt es im
                Durchschnitt etwa sechsmal im Jahr zu sogenannten Dunkelflauten.
                Bei dieser Wetterlage mit geringer Sonneneinstrahlung und
                Windstille liefern Photovoltaik und Windenergie über 24 Stunden
                hinweg kaum Strom.
              </p>
              <br />
              <p>
                Woher soll in dieser Zeit der benötigte Strom kommen? Die
                Bundesregierung will deshalb zusätzliche Gaskraftwerke bauen
                lassen. In den nächsten Jahren sollen Anlagen mit einer Leistung
                von zehn Gigawatt entstehen, hat der Koalitionsausschuss Mitte
                November 2025 beschlossen. Das entspricht etwa 25 neuen
                Kraftwerken. Zusätzlich ist geplant, zwei Gigawatt Leistung
                technologieoffen auszuschreiben.
              </p>
              <br />
              <p>
                Die EnBW ist derzeit der größte Investor in Gaskraftwerke in
                Deutschland und realisiert allein die Hälfte aller im Bau
                befindlichen Gaskraftwerke.
              </p>
              <br />
              <h2 class="text-xl">Fallende Strompreise</h2>
              <br />
              <p>
                Strom wird an der Strombörse gehandelt. Angebot und Nachfrage
                bestimmen den Preis. Trifft viel Wind- oder Solarstrom auf eine
                gleichbleibende Nachfrage, sinkt der Kurs – die erneuerbaren
                Energien wirken dann über das sogenannte Merit-Order-System
                preisdämpfend auf den Strommarkt.
              </p>
              <br />
              <p>
                Bei einem Überangebot kann der Strompreis sogar ins Negative
                fallen. Dann müssten die Betreiber sogar draufzahlen, um ihren
                Strom loszuwerden. Daher drosseln sie lieber die Leistung bzw.
                schalten die Windräder ganz ab. Trotz genügend Wind drehen dann
                die Windräder nicht mehr.
              </p>
              <br />
              <p>
                Besonders bei optimalen Windverhältnissen kommt es also vor,
                dass die Anlage abgeschaltet wird, denn würde die Anlage
                weiterlaufen, würden Verluste entstehen, weil die Betriebskosten
                und erst recht die sogenannten Stromgestehungskosten höher als
                die Einnahmen wären.
              </p>
              <br />
              <p>
                Statistisch hat Strom aus Windkraft mittlerweile an rund 20
                Tagen im Jahr keinen Marktwert mehr. Bei einer freiwilligen
                Abschaltung wird keine Entschädigung gezahlt.
              </p>
              <br />
              <!-- Grafik: negative Preise -->
              <div
                class="not-prose my-8 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-5"
              >
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <p
                      class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                    >
                      Grafik
                    </p>
                    <p
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Anzahl der Stunden mit negativen Börsenstrompreisen pro
                      Jahr seit 2015
                    </p>
                  </div>
                  <UBadge color="info" variant="soft">Quelle</UBadge>
                </div>
                <div class="mt-4">
                  <AssetImageViewer
                    src="/16.JPG"
                    alt="Anzahl der Stunden mit negativen Börsenstrompreisen pro Jahr seit 2015"
                    ratio="16/9"
                  />
                </div>
                <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  Quelle:
                  https://www.klimaschutz-niedersachsen.de/aktuelles/Solarspitzengesetz-in-Kraft-was-aendert-sich-fuer-neue-PV-Anlagen-4233
                </p>
              </div>
              <br />
              <h2 class="text-xl">Lösungen – erst im Entstehen</h2>
              <br />
              <p>
                Es genügt also nicht, Windkraftanlagen zu bauen, denn sie
                gewährleisten keine sichere Stromversorgung.
              </p>
              <br />
              <p>
                Eine mögliche Lösung besteht im Bau von Übertragungsleitungen,
                die erneuerbare Energie von den windreichen norddeutschen Küsten
                in die windschwachen Gebiete im Süden bringen. Die
                Windstromleitungen Südlink und Ultranet sollen im Jahr 2028
                fertiggestellt sein und dann Strom bis nach Baden-Württemberg
                bringen.
              </p>
              <br />
              <p>
                Die Frage nach der Speicherung von Windenergie ist bis heute
                nicht gelöst. Wenige Pilotprojekte oder einzelne kurzfristige
                Zwischenspeichermöglichkeiten sind alles, was es bislang gibt.
              </p>
              <br />
              <div
                class="not-prose my-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 dark:border-amber-900/35 dark:bg-amber-950/16"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 rounded-lg bg-amber-500/10 p-2">
                    <UIcon
                      name="i-lucide-lightbulb"
                      class="h-5 w-5 text-amber-700 dark:text-amber-300"
                    />
                  </div>
                  <p class="m-0 text-sm text-gray-800 dark:text-gray-200">
                    Lösungsansätze sind also dringend erforderlich. Bevor diese
                    nicht vorhanden sind, verschärft jedes weitere Windrad nur
                    die Instabilität im deutschen Stromnetz.
                  </p>
                </div>
              </div>
              <br />
              <p>
                Angesichts dieser Tatsache stellt sich die Frage, warum weitere
                Windenergieanlagen geplant sind. Laut der Landesanstalt für
                Umwelt Baden-Württemberg sind derzeit (Stand 19.01.2026) allein
                in Baden-Württemberg 817 Windenergieanlagen in Betrieb, weitere
                1.787 sind in Planung.
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
                      href="https://www.enbw.com/unternehmen/themen/windkraft/warum-windraeder-stillstehen.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.enbw.com/unternehmen/themen/windkraft/warum-windraeder-stillstehen.html
                    </a>
                    <a
                      href="https://www.ndr.de/nachrichten/info/suedlink-so-viel-mehr-windkraft-kapazitaeten-hat-der-norden,strommix120.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.ndr.de/nachrichten/info/suedlink-so-viel-mehr-windkraft-kapazitaeten-hat-der-norden,strommix120.html
                    </a>
                    <a
                      href="https://www.zdfheute.de/politik/deutschland/entschaedigungszahlungen-erneuerbare-energie-gesunken-100.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.zdfheute.de/politik/deutschland/entschaedigungszahlungen-erneuerbare-energie-gesunken-100.html
                    </a>
                    <a
                      href="https://data.bundesnetzagentur.de/Bundesnetzagentur/SharedDocs/Mediathek/Monitoringberichte/MonitoringberichtEnergie2023.pdf"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://data.bundesnetzagentur.de/Bundesnetzagentur/SharedDocs/Mediathek/Monitoringberichte/MonitoringberichtEnergie2023.pdf
                    </a>
                    <a
                      href="https://www.br.de/nachrichten/deutschland-welt/spanien-zu-viel-strom-im-netz-war-ursache-fuer-blackout-im-april,UoOLeG6"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.br.de/nachrichten/deutschland-welt/spanien-zu-viel-strom-im-netz-war-ursache-fuer-blackout-im-april,UoOLeG6
                    </a>
                    <a
                      href="https://www.sueddeutsche.de/wissen/gaskraftwerke-klimaschutz-deutschland-auswirkungen-plaene-li.3281635"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.sueddeutsche.de/wissen/gaskraftwerke-klimaschutz-deutschland-auswirkungen-plaene-li.3281635
                    </a>
                    <a
                      href="https://www.staatsanzeiger.de/nachrichten/wirtschaft/energiebranche-draengt-auf-schnelle-ausschreibungen-fuer-gaskraftwerke/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.staatsanzeiger.de/nachrichten/wirtschaft/energiebranche-draengt-auf-schnelle-ausschreibungen-fuer-gaskraftwerke/
                    </a>
                    <a
                      href="https://de.wikipedia.org/wiki/Suedlink"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://de.wikipedia.org/wiki/Suedlink
                    </a>
                    <a
                      href="https://umweltdaten.lubw.baden-wuerttemberg.de/repositories/energie_windenergie,7C1pAhtTDpA00YwQGcVz/workbooks/Stand-des-Windenergieausbaus,HVkeV1PiHZnNuLxtOLvS/worksheets/Dashboard-Windenergieaus-bau,cGEXqcxsY7hw87gLB2P8?workbookHash=hYenVU8RaA1sa2IFFmw9_i0z5PBkCMfsvRGeJVWnqgHqgOVu&embeddingTargetId=windenergieausbau"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://umweltdaten.lubw.baden-wuerttemberg.de/.../windenergieausbau
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
                    Kernlogik
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Warum Abschaltungen passieren
                  </div>
                </div>
              </div>

              <div
                class="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/70 dark:bg-gray-950/20 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Wetter → Einspeisung
                  </p>
                  <p class="mt-1">Produktion schwankt stark .</p>
                </div>
                <div
                  class="rounded-xl border border-rose-200/60 dark:border-rose-900/35 bg-rose-50/60 dark:bg-rose-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Schwankung → Frequenzrisiko
                  </p>
                  <p class="mt-1">Über 50,2 / unter 49,5 Hz → Maßnahmen .</p>
                </div>
                <div
                  class="rounded-xl border border-amber-200/60 dark:border-amber-900/35 bg-amber-50/60 dark:bg-amber-950/16 p-4"
                >
                  <p class="font-semibold text-gray-900 dark:text-gray-100">
                    Maßnahmen → Abregelung
                  </p>
                  <p class="mt-1">Drosseln/Abschalten + Reservekraftwerke .</p>
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
                Volatile Einspeisung, Netzstabilität (50 Hz),
                Abregelung/Entschädigung, negative Börsenpreise und ungelöste
                Speicherung.
              </p>
            </UCard>


          </div>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
