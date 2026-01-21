<!-- pages/immobilienwerte-tourismus-sexau.vue -->
<script setup lang="ts">
  const title = 'Sinkende Immobilienwerte & Tourismus in Sexau – Auswirkungen der Windkraft'
  const description =
    'Windkraftanlagen in weniger als 3 km Entfernung zu Sexau: belegte Auswirkungen auf Immobilienwerte, Wohnqualität und Tourismus auf Basis wissenschaftlicher Studien.'
  
  useSeoMeta({
    title,
    description,
    ogTitle: 'Windkraftanlagen Sexau – Immobilienwerte, Wohnen & Tourismus',
    ogDescription:
      'Abstände bis 680 m, belegte Wertverluste von Immobilien und drohende Einbußen im Tourismus durch geplante Windenergieanlagen in Sexau.',
    ogType: 'article',
    twitterCard: 'summary_large_image'
  })
  
  const config = useRuntimeConfig()
  const canonical = config.public?.siteUrl ? `${config.public.siteUrl}/immobilienwerte-tourismus-sexau` : undefined
  
  useHead({
    link: canonical ? [{ rel: 'canonical', href: canonical }] : []
  })
  </script>
  
  <template>
    <div class="relative">
      <!-- Background decoration (light + dark) -->
      <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-100/55 blur-3xl dark:bg-amber-900/20"
        />
        <div
          class="absolute top-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-rose-100/45 blur-3xl dark:bg-rose-900/18"
        />
        <div
          class="absolute bottom-0 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-emerald-100/45 blur-3xl dark:bg-emerald-900/14"
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
                <UBadge color="warning" variant="soft">Immobilien</UBadge>
                <UBadge color="info" variant="soft">Wohnen</UBadge>
                <UBadge color="info" variant="soft">Tourismus</UBadge>
              </div>
  
              <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Sinkende Immobilienwerte, Wohnen &amp; Tourismus
              </h1>
  
              <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
                Die geringe Entfernung der geplanten Windkraftanlagen zu Sexau hat weitreichende Folgen
                für Wohnqualität, Immobilienentwicklung und touristische Attraktivität.
              </p>
  
              <div
                class="mt-6 h-px bg-gradient-to-r from-amber-300/90 via-rose-300/80 to-transparent dark:from-amber-500/40 dark:via-rose-500/30"
              />
            </div>
  
            <!-- HERO SIDEPANEL -->
            <div
              class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-200/60 dark:border-gray-800/60"
            >
              <div
                class="p-8 sm:p-10 bg-gradient-to-b from-white to-gray-50/70 dark:from-gray-950/30 dark:to-gray-950/10"
              >
                <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Überblick
                </p>
  
                <div class="mt-4 space-y-3">
                  <div
                    class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                  >
                    <p class="text-xs text-gray-500 dark:text-gray-400">Nähe zur Gemeinde</p>
                    <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">&lt; 3 km</p>
                  </div>
                  <div
                    class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                  >
                    <p class="text-xs text-gray-500 dark:text-gray-400">Ortsteile</p>
                    <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      680 m / 870 m
                    </p>
                  </div>
                  <div
                    class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                  >
                    <p class="text-xs text-gray-500 dark:text-gray-400">Studienergebnisse</p>
                    <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      −7,1 % bis −23 % Wertverlust
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>
  
        <!-- KPI SECTION -->
        <div class="mt-12 max-w-6xl mx-auto">
          <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60">
            <div class="p-6 space-y-6">
              <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <KpiBadge tone="amber" title="&lt; 3 km" subtitle="Gemeinde" />
                <KpiBadge tone="amber" title="680 m" subtitle="Seilerhöfe" />
                <KpiBadge tone="amber" title="870 m" subtitle="Eberbächle" />
                <KpiBadge tone="rose" title="Tourismus" subtitle="betroffen" />
                 <KpiBadge tone="rose" title="−23 %" subtitle="Ø Wertverlust Immobilien" />
              </div>
  
              
            </div>
          </UCard>
        </div>
  
        <!-- MAIN -->
        <div class="mt-12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
          <!-- TEXT -->
          <section class="lg:col-span-2">
            <UCard class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60">
              <div class="p-8 prose prose-gray dark:prose-invert prose-p:leading-relaxed max-w-none">
                <h2 class="text-xl">Weniger als 3 km Entfernung zur Gemeinde Sexau</h2>
  <br />
                <p>
                  Die einzelnen Windkraftanlagen (WKA) befinden sich lediglich in einer Entfernung von knapp
                  <strong>3.000 m</strong> zur Gemeinde Sexau. Zu den einzelnen Ortsteilen sogar weniger:
                  <strong>680 m (Sexau Seilerhöfe)</strong> und
                  <strong>870 m (Sexau Eberbächle)</strong>.
                </p>
  
                <!-- DISTANZ -->
                <div
                  class="not-prose my-6 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/80 dark:bg-gray-950/20 p-5"
                >
                  <div class="flex justify-between text-sm font-medium text-gray-800 dark:text-gray-200">
                    <span>🏠 Haus</span>
                    <span>⚙️ WKA</span>
                  </div>
  
                  <div class="mt-4 relative h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <div
                      class="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gradient-to-r from-amber-400/75 to-rose-400/70 dark:from-amber-500/45 dark:to-rose-500/40"
                    />
                    <span class="absolute left-1/4 -top-6 text-xs font-semibold text-gray-700 dark:text-gray-200">
                      680 m
                    </span>
                    <span class="absolute right-0 -top-6 text-xs font-semibold text-gray-700 dark:text-gray-200">
                      &lt; 3 km
                    </span>
                  </div>
                </div>
  
                <h2 class="text-xl">Sinkende Immobilienwerte durch unattraktive Umgebungsfaktoren</h2>
  <br />
                <p>
                  Der Wert einer Immobilie setzt sich aus dem Zusammenspiel zahlreicher Einflussfaktoren zusammen. Windräder können einen entscheidenden Einfluss dabei spielen.
                  Nach einer Studie des RWI Leibniz-Instituts für Wirtschaftsforschung in Essen bestimmen Abstand und Lage den Einfluss. In der Studie wurden rund drei Millionen
                  Verkaufsangebote auf dem Online-Portal Immoscout24 ausgewertet. Windräder, die in einem Abstand von einem Kilometer von einem Wohnhaus errichtet werden, erzielten im
                  Durchschnitt einen um 7,1 Prozent geringeren Verkaufspreis der Immobilie. Dieser Effekt nimmt mit der Entfernung ab. Erst ab einer Entfernung von acht bis neun
                  Kilometern der Windkraftanlage zum Haus konnten keine Auswirkungen auf den Immobilienwert festgestellt werden.
                </p>
  <br />
                <blockquote>
                  Windräder, die in einem Abstand von einem Kilometer von einem Wohnhaus errichtet werden,
                  erzielten im Durchschnitt einen um <strong>7,1&nbsp;Prozent</strong> geringeren Verkaufspreis
                  der Immobilie.
                </blockquote>
  
                <!-- STUDIEN BALKEN (schematisch, optisch) -->
                <div class="not-prose my-6 space-y-3">
                  <div class="flex items-center gap-3">
                    <span class="w-24 text-sm text-gray-700 dark:text-gray-200">1 km</span>
                    <div class="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                      <div class="h-full w-[60%] rounded-full bg-amber-400/75 dark:bg-amber-500/45" />
                    </div>
                    <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">−7,1 %</span>
                  </div>
  
                  <div class="flex items-center gap-3">
                    <span class="w-24 text-sm text-gray-700 dark:text-gray-200">ländlich (1km)</span>
                    <div class="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                      <div class="h-full w-[85%] rounded-full bg-rose-400/75 dark:bg-rose-500/45" />
                    </div>
                    <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">−23 %</span>
                  </div>
  
                  <div class="flex items-center gap-3">
                    <span class="w-24 text-sm text-gray-700 dark:text-gray-200">8–9 km</span>
                    <div class="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                      <div class="h-full w-[10%] rounded-full bg-gray-400/60 dark:bg-gray-500/35" />
                    </div>
                    <span class="text-sm text-gray-700 dark:text-gray-200">0 %</span>
                  </div>
                </div>
  
                <p>
                  Die Studie zeigt aber auch, dass Häuser in ländlichen Regionen besonders stark betroffen sind. Der Wertverlust kann im Ein-Kilometer-Radius sogar 23 Prozent
                  betragen.
                </p>
  <br />
                <p>
                  Die Studie basiert auf Immobilientransaktionsdaten aus den Jahren 2007 bis 2015. In diesem Zeitraum waren Windkraftanlagen noch deutlich kleiner als moderne Anlagen,
                  die aktuell gebaut werden.
                </p>
  <br />
                <p>
                  Die Störung des Landschaftsbildes wäre bei den geplanten monströsen Windkraftanlagen in Sexau derart massiv, dass der Immobilienwert möglicherweise drastisch sinken würde.
                </p>
  <br />
                <p>
                  Geplante Hauskäufe wurden vermutlich abgesagt. Grundstücke verlieren ihren Wert. Schließlich wollen Käufer, die sich in ländlichen Gegenden ansiedeln wollen,
                  tatsächlich Natur und keine derart präsenten Windräder praktisch direkt vor der Haustür.
                </p>
  <br />
                <h2 class="text-xl">Tourismus und Gastgewerbe drohen massive Einbußen</h2>
  <br />
                <p>
                  In nur 500 m Entfernung zu einem der Windräder befindet sich das beliebte Berggasthof Linde. Durch eine direkte Erhebung direkt hinter dem Berggasthof Linde dürfte
                  einiges abgemildert werden. Bleibt zu hoffen, dass sich die Windparks nicht nachteilig auf die Gästezahlen im Berggasthof auswirken.
                </p>
  <br />
                <p>
                  Ganz direkte Auswirkungen haben die Windparks jedoch im gesamten Ortsgebiet von Sexau. Touristen die Sexau wegen seiner idyllischen Lage und unberührten Natur bisher
                  schätzen, suchen sich vermutlich andere Urlaubs- und Freizeitziele, die dies tatsächlich noch zu bieten haben.
                </p>
  
                <div class="mt-6 text-sm text-gray-600 dark:text-gray-400">
                  Quelle:
                  <a
                    href="https://www.landundforst.de/energie/windenergie/windparks-immobilien-so-beeinflussen-windraeder-hauspreis-572865"
                    target="_blank"
                    rel="noopener"
                    class="text-indigo-600 hover:underline dark:text-indigo-300"
                  >
                    Land &amp; Forst – Einfluss von Windparks auf Immobilienpreise
                  </a>
                </div>
              </div>
            </UCard>
          </section>
  
          <!-- SIDEBAR -->
          <aside>
            <div class="sticky top-24 space-y-4">
                <UCard class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 p-5">
                <div class="text-sm font-semibold mb-3">Die Entfernung der Windkraftanlagen zu den Ortschaften</div>
                <AssetImageViewer src="/05.jpg" alt="Die Entfernung der Windkraftanlagen zu den Ortschaften" ratio="16/9" />
               
              </UCard>
  
              <UCard
                class="p-5 border bg-amber-50/70 border-amber-200/60 dark:bg-amber-950/15 dark:border-amber-900/35"
              >
                <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Kurzfazit</div>
                <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
                  Geringe Abstände, Wertverluste und Risiken für touristische Attraktivität.
                </p>
              </UCard>
            </div>
          </aside>
        </div>
      </UContainer>
    </div>
  </template>
  