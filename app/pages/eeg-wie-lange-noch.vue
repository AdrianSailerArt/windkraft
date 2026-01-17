<!-- pages/eeg-wie-lange-noch.vue -->
<script setup lang="ts">
    const title = 'Das Erneuerbare-Energien-Gesetz (EEG) – wie lange noch?'
    const description =
      'EEG-Vergütung und Entschädigung für nicht erzeugten Strom, Genehmigungsboom 2025, fehlende Gebote in der Nordsee, Energiewende-Monitoring und Solarspitzengesetz.'
    
    useSeoMeta({
      title,
      description,
      ogTitle: 'Das Erneuerbare-Energien-Gesetz (EEG) – wie lange noch?',
      ogDescription:
        'Warum sich Windanlagen auch an windschwachen Standorten rechnen, was der Genehmigungsboom 2025 bedeutet – und welche Signale es aus Ausschreibungen, Monitoring und Solarspitzengesetz gibt.',
      ogType: 'article',
      twitterCard: 'summary_large_image'
    })
    
    const config = useRuntimeConfig()
    const canonical = config.public?.siteUrl ? `${config.public.siteUrl}/eeg-wie-lange-noch` : undefined
    useHead({ link: canonical ? [{ rel: 'canonical', href: canonical }] : [] })
    </script>
    
    <template>
      <div class="relative">
        <!-- Background decoration (light + dark) -->
        <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-100/45 blur-3xl dark:bg-amber-900/16" />
          <div class="absolute top-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-100/35 blur-3xl dark:bg-indigo-900/14" />
          <div class="absolute bottom-0 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-100/35 blur-3xl dark:bg-emerald-900/12" />
        </div>
    
        <UContainer class="relative py-12">
          <!-- HERO -->
          <UCard class="overflow-hidden bg-white/85 dark:bg-gray-950/35 border border-gray-200/60 dark:border-gray-800/60">
            <div class="grid lg:grid-cols-12">
              <div class="lg:col-span-8 p-8 sm:p-12">
                <div class="flex flex-wrap gap-2">
                  <UBadge color="amber" variant="soft" icon="i-lucide-scale">Förderlogik</UBadge>
                  <UBadge color="indigo" variant="soft" icon="i-lucide-file-text">Ausschreibungen</UBadge>
                  <UBadge color="emerald" variant="soft" icon="i-lucide-sun">Solarspitzengesetz</UBadge>
                </div>
    
                <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Das Erneuerbare-Energien-Gesetz (EEG) – wie lange noch?
                </h1>
    
                <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
                  Wie bereits beschrieben, erhalten Anlagenbetreiber Geld für NICHT erzeugten Strom dank dem Erneuerbare-Energien-Gesetz (EEG), also aus Steuergeldern.
                  Gezahlt wird die Differenz zwischen Strom-Markterlös („Marktwert“) und einem garantierten Mindesterlös.
                </p>
    
                <div
                  class="mt-6 h-px bg-gradient-to-r from-amber-300/90 via-indigo-300/70 to-transparent
                         dark:from-amber-500/35 dark:via-indigo-500/25"
                />
              </div>
    
              <!-- HERO SIDEPANEL -->
              <div class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-200/60 dark:border-gray-800/60">
                <div class="p-8 sm:p-10 bg-gradient-to-b from-white to-gray-50/70 dark:from-gray-950/30 dark:to-gray-950/10">
                  <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Überblick</p>
    
                  <div class="mt-4 space-y-3">
                    <div class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4">
                      <p class="text-xs text-gray-500 dark:text-gray-400">Vergütung </p>
                      <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Differenz Marktwert ↔ Mindesterlös
                      </p>
                    </div>
    
                    <div class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4">
                      <p class="text-xs text-gray-500 dark:text-gray-400">Genehmigungsboom </p>
                      <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        ~ 1.100 Anträge (Mai–Juni 2025)
                      </p>
                    </div>
    
                    <div class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4">
                      <p class="text-xs text-gray-500 dark:text-gray-400">Nordsee-Ausschreibung </p>
                      <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        2,5 GW – kein Gebot (01.08.2025)
                      </p>
                    </div>
                  </div>
    
                  
                </div>
              </div>
            </div>
          </UCard>
    
          <!-- STORY STRIP -->
          <div class="mt-10 max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
            <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
              <div class="h-1 bg-amber-400/70 dark:bg-amber-500/30" />
              <div class="p-5">
                <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Mechanik</p>
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Geld für NICHT erzeugten Strom</p>
              </div>
            </UCard>
    
            <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
              <div class="h-1 bg-indigo-400/70 dark:bg-indigo-500/30" />
              <div class="p-5">
                <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Signale</p>
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Boom, Protest, keine Gebote</p>
              </div>
            </UCard>
    
            <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
              <div class="h-1 bg-emerald-400/70 dark:bg-emerald-500/30" />
              <div class="p-5">
                <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Kurswechsel?</p>
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Monitoring &amp; Solarspitzengesetz</p>
              </div>
            </UCard>
          </div>
    
          <!-- KPI / HIGHLIGHTS -->
          <div class="mt-12 max-w-6xl mx-auto">
            <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60">
              <div class="p-6 space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-5">
                    <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">These </p>
                    <p class="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Ohne Vergütung für NICHT erzeugten Strom würde niemand investieren.
                    </p>
                  </div>
    
                  <div class="rounded-2xl border border-amber-200/60 dark:border-amber-900/35 bg-amber-50/60 dark:bg-amber-950/16 p-5">
                    <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Zeitfenster </p>
                    <p class="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Ende Mai – Ende Juni 2025: Boom bei Anträgen (~ 1.100)
                    </p>
                  </div>
    
                  <div class="rounded-2xl border border-rose-200/60 dark:border-rose-900/35 bg-rose-50/60 dark:bg-rose-950/16 p-5">
                    <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Marktsignal </p>
                    <p class="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Nordsee 2,5 GW: KEIN Gebot (01.08.2025)
                    </p>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
    
          <!-- MAIN -->
          <div class="mt-12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
            <!-- CONTENT -->
            <section class="lg:col-span-2">
              <UCard class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60">
                <div class="p-8 prose prose-gray dark:prose-invert prose-p:leading-relaxed max-w-none">
                  <h2>EEG: Vergütung &amp; Investitionsanreiz</h2>
    
                  <p>
                    Wie bereits beschrieben, erhalten Anlagenbetreiber Geld für NICHT erzeugten Strom dank dem Erneuerbare-Energien-Gesetz (EEG), also aus Steuergeldern.
                    Gezahlt wird die Differenz zwischen Strom-Markterlös („Marktwert“) und einem garantierten Mindesterlös.
                  </p>
    
                  <div class="not-prose my-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 dark:border-amber-900/35 dark:bg-amber-950/16">
                    <div class="flex items-start gap-3">
                      <div class="mt-0.5 rounded-lg bg-amber-500/10 p-2">
                        <UIcon name="i-lucide-coins" class="h-5 w-5 text-amber-700 dark:text-amber-300" />
                      </div>
                      <p class="m-0 text-sm text-gray-800 dark:text-gray-200">
                        Dank dieser Gesetzeslage rentieren sich Windanlagen auch in windschwachen Standorten wie im Schwarzwald.
                        Umgekehrt heißt das aber auch, dass niemand in Windkraftanlagen an Land investieren würde, sobald die Vergütung für NICHT erzeugten Strom wegfällt.
                      </p>
                    </div>
                  </div>
    
                  <h2>Genehmigungsboom &amp; Protest</h2>
    
                  <p>
                    Zwischen Ende Mai und Ende Juni 2025 gab es laut dem Stuttgarter Umweltministerium einen Boom an Genehmigungsanträgen für gut 1.100 neue Windkraftanlagen.
                    Dies wäre ein enormer Zuwachs, gemessen an den 808 Anlagen, die im Südwesten aktuell in Betrieb sind.
                    Der Grund für den Antragsboom war, dass am 30. Juni 2025 die EU-Notfallverordnung für beschleunigte Genehmigungsverfahren auslief.
                  </p>
    
                  <p>
                    Wie viele dieser beantragten Projekte umgesetzt werden, vermag in der Branche niemand zu sagen.
                    An vielen Orten regt sich massiver Protest gegen Windkraft im Schwarzwald.
                    Beispielswei-se stoppte in Remchingen, zwischen Karlsruhe und Pforzheim gelegen, ein Bürgerentscheid das geplante Projekt.
                    66 Prozent der Bevölkerung votierten gegen die Bereitstellung gemeindeei-gener Flächen für ein Windprojekt.
                    Auch in Oberkirch im Ortenaukreis lehnten 55 Prozent der Bürger die Verpachtung kommunaler Flächen für Windkraftanlagen ab.
                  </p>
    
                  <div class="not-prose my-8 flex items-center gap-3">
                    <div class="h-px flex-1 bg-gray-200/80 dark:bg-gray-800/70" />
                    <UBadge color="indigo" variant="soft">Marktsignale</UBadge>
                    <div class="h-px flex-1 bg-gray-200/80 dark:bg-gray-800/70" />
                  </div>
    
                  <h2>Keine Gebote trotz „windreicher Nordsee“</h2>
    
                  <p>
                    Wie stark die Windenergie am Steuertropf hängt, zeigt sich deutlich an folgendem Sachverhalt.
                    Die Bundesnetzagentur teilte mit, dass bei der Ausschreibung zweier Windflächen mit einer Kapazität von 2,5 Gigawatt in der Nordsee
                    KEIN Gebot zum Gebotstermin 01.08.2025 eingegan-gen ist.
                    Man stelle sich vor, nicht etwa im windarmen Schwarzwald, sondern in der windreichen Nordsee findet sich KEIN Investor.
                    Dies könnte mit höheren Baukosten durch gestiegene Roh-stoffpreise einerseits und sinkenden Strompreisen andererseits zu tun haben.
                  </p>
    
                  <h2>Energiewende-Monitoring &amp; Einordnung (Zitat)</h2>
    
                  <p>
                    Ob die Bundesregierung an den Ausbauzielen für die erneuerbaren Energien festhält, ist eben-falls fraglich.
                    Bundeswirtschaftsministerin Katherina Reiche (CDU) lässt derzeit ein Gutachten erstellen, ein Energiemonitoring das Grundlage für weitere Entscheidungen
                    zum Ausbau oder Anhalten der Energiewende sein soll.
                  </p>
    
                  <blockquote>
                    Bundeswirtschaftsministerin Reiche beschreibt im September 2025 anlässlich der Vorlage des Energiewende-Monitoringberichtes die bei ihrem Amtsantritt vorgefundene Situation so:
                    „Die installierte Leistung aus Solar und Wind reicht heute phasenweise weit über den realen Bedarf hinaus, während zu Zeiten mit wenig Wind und wenig Sonne die Versorgungslücke nur durch fossile Erzeuger oder Importe geschlossen werden kann. … Das Resultat sind hohe Investitionen in das gesamte Stromsystem, vor allem in Infrastruktur, Speicher, Netzausbau und Backup-Kapazitäten, die für eine verlässliche Stromversorgung erforderlich sind. Hinzu kommen enorme Kosten für Netzengpässe (Abregelung, Redispatch), die entstehen, wenn die Netze den erzeug-ten Strom nicht aufnehmen und transportieren können. … Eine weitere Folge der ungesteuer-ten Stromproduktion der erneuerbaren Energien sind teure Überschüsse, die – häufig subventi-oniert – ins Ausland exportiert werden.“
                  </blockquote>
    
                  <h2>Solarspitzengesetz</h2>
    
                  <p>
                    Für Solarstrom wurde die EEG-Förderung bereits angepasst bzw. entsprechend verringert.
                    Am 25. Februar 2025 trat das sogenannte Solarspitzengesetz in Kraft.
                    Es soll die immer häufiger auf-tretenden Stromspitzen und damit negative Börsenstrompreise vermindern.
                    Dadurch erhalten die meisten neuen PV-Anlagen keine Vergütung mehr, wenn der Strompreis an der Börse nega-tiv ist.
                  </p>
    
                  <!-- Quellen -->
                  <div class="not-prose mt-10">
                    <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
                      <div
                        class="px-6 py-4 bg-gradient-to-r from-gray-50/70 via-white to-gray-50/60
                               dark:from-gray-950/12 dark:via-gray-950/10 dark:to-gray-950/10
                               border-b border-gray-200/60 dark:border-gray-800/60"
                      >
                        <div class="flex items-center justify-between gap-3">
                          <div>
                            <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Quellen</p>
                            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Links</p>
                          </div>
                          <UBadge color="neutral" variant="soft">Quellen</UBadge>
                        </div>
                      </div>
    
                      <div class="p-6 space-y-3 text-sm">
                        <a href="https://taz.de/Mehr-Antraege-fuer-Windraeder/!6099141/" target="_blank" rel="noopener" class="block text-indigo-600 hover:underline dark:text-indigo-300">
                          https://taz.de/Mehr-Antraege-fuer-Windraeder/!6099141/
                        </a>
                        <a href="https://taz.de/Ausschreibung-von-Windkraftanlagen/!6102109/" target="_blank" rel="noopener" class="block text-indigo-600 hover:underline dark:text-indigo-300">
                          https://taz.de/Ausschreibung-von-Windkraftanlagen/!6102109/
                        </a>
                        <a href="https://www.bb-lebenswert.de/windkraftanlagen/wirtschaftlichkeit/" target="_blank" rel="noopener" class="block text-indigo-600 hover:underline dark:text-indigo-300">
                          https://www.bb-lebenswert.de/windkraftanlagen/wirtschaftlichkeit/
                        </a>
                        <a href="https://www.klimaschutz-niedersachsen.de/aktuelles/Solarspitzengesetz-in-Kraft-was-aendert-sich-fuer-neue-PV-Anlagen-4233" target="_blank" rel="noopener" class="block text-indigo-600 hover:underline dark:text-indigo-300">
                          https://www.klimaschutz-niedersachsen.de/aktuelles/Solarspitzengesetz-in-Kraft-was-aendert-sich-fuer-neue-PV-Anlagen-4233
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
                <UCard class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 p-5">
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Dramaturgie</div>
                      <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">3 Punkte aus dem Text</div>
                    </div>
                    <UBadge color="amber" variant="soft">Kurz</UBadge>
                  </div>
    
                  <div class="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div class="rounded-xl border border-amber-200/60 dark:border-amber-900/35 bg-amber-50/60 dark:bg-amber-950/16 p-4">
                      <p class="font-semibold text-gray-900 dark:text-gray-100">1) Förderlogik</p>
                      <p class="mt-1">Geld für NICHT erzeugten Strom .</p>
                    </div>
                    <div class="rounded-xl border border-indigo-200/60 dark:border-indigo-900/35 bg-indigo-50/60 dark:bg-indigo-950/14 p-4">
                      <p class="font-semibold text-gray-900 dark:text-gray-100">2) Boom &amp; Protest</p>
                      <p class="mt-1">~ 1.100 Anträge, Bürgerentscheide .</p>
                    </div>
                    <div class="rounded-xl border border-rose-200/60 dark:border-rose-900/35 bg-rose-50/60 dark:bg-rose-950/16 p-4">
                      <p class="font-semibold text-gray-900 dark:text-gray-100">3) Marktsignal</p>
                      <p class="mt-1">Nordsee 2,5 GW ohne Gebot .</p>
                    </div>
                  </div>
                </UCard>
    
                <UCard class="p-5 border bg-emerald-50/70 border-emerald-200/60 dark:bg-emerald-950/14 dark:border-emerald-900/30">
                  <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Kurzfazit</div>
                  <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
                    Der Text stellt die Frage nach der Zukunft der EEG-Logik, verweist auf Genehmigungsdynamik, Proteste,
                    fehlende Gebote in Ausschreibungen und politische Signale (Monitoring/Solarspitzengesetz).
                  </p>
                </UCard>
              </div>
            </aside>
          </div>
        </UContainer>
      </div>
    </template>
    