<!-- pages/dohlenkrebs-aussterben-sexau.vue -->
<script setup lang="ts">
    const title = 'Der Dohlenkrebs – eine vom Aussterben bedrohte Tierart'
    const description =
      'Der seltenste einheimische Flusskrebs Deutschlands: Vorkommen im Sexauer Peterswald, Schutzstatus, Rote Liste und Konflikt mit dem Bau geplanter Windkraftanlagen.'
    
    useSeoMeta({
      title,
      description,
      ogTitle: 'Der Dohlenkrebs – eine vom Aussterben bedrohte Tierart',
      ogDescription:
        'Vorkommen des Dohlenkrebses im Sexauer Peterswald, hohe Empfindlichkeit, Schutzstatus und Konflikt mit geplanten Windkraftanlagen.',
      ogType: 'article',
      twitterCard: 'summary_large_image'
    })
    
    const config = useRuntimeConfig()
    const canonical = config.public?.siteUrl ? `${config.public.siteUrl}/dohlenkrebs-aussterben-sexau` : undefined
    useHead({ link: canonical ? [{ rel: 'canonical', href: canonical }] : [] })
    
    const imageUrl =
      'https://www.ag.ch/de/themen/landwirtschaft-tiere/wild-wassertiere/wassertiere-lebensraeume/projekte/foerderung-stein-und-dohlenkrebs'
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
                  <UBadge color="error" variant="soft" icon="i-lucide-leaf">Artenschutz</UBadge>
                  <UBadge color="info" variant="soft" icon="i-lucide-droplets">Fließgewässer</UBadge>
                  <UBadge color="error" variant="soft" icon="i-lucide-shield">Rote Liste</UBadge>
                </div>
    
                <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Der Dohlenkrebs – eine vom Aussterben bedrohte Tierart
                </h1>
    
                <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
                  In Deutschland ist der Dohlenkrebs der seltenste einheimische Flusskrebs, da er lediglich in wenigen Fließgewässern in Südbaden vorkommt. In den Gewässern im Sexauer Peterswald lebt der Dohlenkrebs, genau dort wo die Windparks mit den vier Windrädern entstehen sollen.
                </p>
    
                <div
                  class="mt-6 h-px bg-gradient-to-r from-emerald-300/90 via-indigo-300/70 to-transparent
                         dark:from-emerald-500/35 dark:via-indigo-500/25"
                />
              </div>
    
              <!-- HERO SIDEPANEL -->
              <div
                class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-200/60 dark:border-gray-800/60"
              >
                <div
                  class="p-8 sm:p-10 bg-gradient-to-b from-white to-gray-50/70
                         dark:from-gray-950/30 dark:to-gray-950/10"
                >
                  <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Überblick</p>
    
                  <div class="mt-4 space-y-3">
                    <div class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4">
                      <p class="text-xs text-gray-500 dark:text-gray-400">Seltenheit </p>
                      <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">seltenster einheimischer Flusskrebs</p>
                    </div>
                    <div class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4">
                      <p class="text-xs text-gray-500 dark:text-gray-400">Größe </p>
                      <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">bis zu 10 cm</p>
                    </div>
                    <div class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4">
                      <p class="text-xs text-gray-500 dark:text-gray-400">Status </p>
                      <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">vom Aussterben bedroht</p>
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
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <KpiBadge tone="rose" title="Südbaden" subtitle="Vorkommen " />
                  <KpiBadge tone="emerald" title="Sexauer" subtitle="Peterswald " />
                  <KpiBadge tone="amber" title="Rote Liste" subtitle="geführt " />
                  <KpiBadge tone="rose" title="bis 10 cm" subtitle="empfindlich " />
                </div>
    
                <div class="h-px bg-gray-200/70 dark:bg-gray-800/70" />
    
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <KpiBadge tone="gray" title="Rückgang" subtitle="Bestände " />
                  <KpiBadge tone="emerald" title="EU + national" subtitle="Schutz " />
                 
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
                   <br />
                  <p>
                    Es ist bekannt, dass die bis zu 10 cm großen Dohlenkrebse sehr empfindlich auf Veränderungen in der Umwelt reagieren.
                  </p>
     <br />
                  <p>
                    Die Bestände der heimischen Flusskrebse gehen kontinuierlich zurück. Ihre Häufigkeit hat in den letzten Jahren stark abgenommen, besonders verschärft hat sich die Situation in den vergangenen Jahrzehnten. Viele lokale Bestände sind unwiederbringlich erloschen und die heimischen Flusskrebsarten gehören zu den am meisten gefährdeten Spezies in Europa.
                  </p>
     <br />
                  <!-- Dramatischer Callout (ohne Inhalt zu ändern) -->
                  <div
                    class="not-prose my-6 rounded-2xl border border-rose-200/60 bg-rose-50/60 p-5
                           dark:border-rose-900/35 dark:bg-rose-950/16"
                  >
                    <div class="flex items-start gap-3">
                      <div class="mt-0.5 rounded-lg bg-rose-500/10 p-2">
                        <UIcon name="i-lucide-alert-triangle" class="h-5 w-5 text-rose-700 dark:text-rose-300" />
                      </div>
                      <p class="m-0 text-sm text-gray-800 dark:text-gray-200">
                        Aufgrund seiner Seltenheit wird der Dohlenkrebs sogar als vom Aussterben bedroht eingestuft.
                      </p>
                    </div>
                  </div>
    
                  <p>
                    Die im Gebiet der geplanten Windräder lebenden heimische Dohlenkrebs gehört nicht nur zu den stark gefährdeten Flusskrebsarten. Aufgrund seiner Seltenheit wird der Dohlenkrebs sogar als vom Aussterben bedroht eingestuft. Er wird deshalb auf der Roten Liste der bedrohten Arten geführt. Die heimischen Flusskrebse unterliegen einem europarechtlichen wie nationalen Schutz.
                  </p>
     <br />
                  <p>
                    Der Dohlenkrebs kommt nur an wenigen Stellen in Südbaden vor. Es sind die einzigen Vorkommen der Art in Deutschland.
                  </p>
    <br />
                <h2 class="text-xl">Hinweis zur „Gutachterlichen Stellungnahme“</h2>
     <br />
                  <p>
                    In der „Gutachterlichen Stellungnahme zur standortbezogenen Vorprüfung“ wird zwar auf die im Gebiet lebenden Fledermäuse (S. 5) eingegangen, jedoch in keiner Weise auf die derart seltenen und vom Aussterben bedrohten Dohlenkrebse!!!
                  </p>
     <br />
                <h2 class="text-xl">Konflikt mit BfN-Richtlinien</h2>
     <br />
                  <p>
                    Der Bau von Windkraftanlagen im Sexauer Peterswald steht in direkten Widerspruch zu den Richtlinien des Bundesamtes für Naturschutz (BfN) , wo der Artenschutz besonders im Fokus steht: In Gebieten mit Vorkommen gefährdeter beziehungsweise störungsempfindlicher Arten dürfen Windkraftanlagen nur mit Auflagen oder gar nicht entstehen.
                  </p>
     <br />
                  <!-- Quellen -->
                  <div class="not-prose mt-10">
                    <UCard class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">
                      <div class="px-6 py-4 bg-gradient-to-r from-gray-50/70 via-white to-gray-50/60 dark:from-gray-950/12 dark:via-gray-950/10 dark:to-gray-950/10 border-b border-gray-200/60 dark:border-gray-800/60">
                        <div class="flex items-center justify-between gap-3">
                          <div>
                            <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Quellen</p>
                            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Links & Dokument</p>
                          </div>
                          <UBadge color="neutral" variant="soft">Quellen</UBadge>
                        </div>
                      </div>
    
                      <div class="p-6 space-y-3 text-sm">
                       
                        <a
                          href="https://de.wikipedia.org/wiki/Dohlenkrebs"
                          target="_blank"
                          rel="noopener"
                          class="block text-indigo-600 hover:underline dark:text-indigo-300"
                        >
                          https://de.wikipedia.org/wiki/Dohlenkrebs
                        </a>
                        <a
                          href="https://um.baden-wuerttemberg.de/de/umwelt-natur/biologische-vielfalt-und-mensch/artenschutz-und-management/invasive-arten/gebietsfremder-flusskrebs"
                          target="_blank"
                          rel="noopener"
                          class="block text-indigo-600 hover:underline dark:text-indigo-300"
                        >
                          https://um.baden-wuerttemberg.de/de/umwelt-natur/biologische-vielfalt-und-mensch/artenschutz-und-management/invasive-arten/gebietsfremder-flusskrebs
                        </a>
                        <a
                          href="https://www.waldwissen.net/de/lebensraum-wald/tiere-im-wald/insekten-wirbellose/flusskrebse-in-baden-wuerttemberg"
                          target="_blank"
                          rel="noopener"
                          class="block text-indigo-600 hover:underline dark:text-indigo-300"
                        >
                          https://www.waldwissen.net/de/lebensraum-wald/tiere-im-wald/insekten-wirbellose/flusskrebse-in-baden-wuerttemberg
                        </a>
    
                        <div class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4">
                          <p class="text-xs text-gray-500 dark:text-gray-400">Dokument </p>
                          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            Bürger- und Gemeinderatsportal der Gemeinde Sexau, Unterlagen zur öffentlichen Gemeinderatssitzung vom 5.6.2025
                            „DSV2025-210-Windpark-PII-03_WKAs_03-04_Sexau-Peterswald_UVP-VP_20250317.pdf“
                          </p>
                          <!-- Optional: wenn du das PDF unter /public ablegst, Link aktivieren -->
                          <a
                            href="https://sexau.mein-intra.net/data/file/councilservice/2/1/3/4/DSV2025-210-Windpark-PII-03_WKAs_03-04_Sexau-Peterswald_UVP-VP_20250317.pdf"
                            class="mt-2 inline-flex items-center gap-2 text-indigo-600 hover:underline dark:text-indigo-300 text-sm"
                            target="_blank"
                            rel="noopener"
                          >
                            <UIcon name="i-lucide-file-text" class="h-4 w-4" />
                            PDF öffnen
                          </a>
                          
                        </div>
    
                        <a
                          href="https://www.bfn.de/"
                          target="_blank"
                          rel="noopener"
                          class="block text-indigo-600 hover:underline dark:text-indigo-300"
                        >
                          https://www.bfn.de/
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
                
                <AssetImageViewer src="/09.jpg"
                caption="Bild: https://www.ag.ch/de/themen/landwirtschaft-tiere/wild-wassertiere/wassertiere-lebensraeume/projekte/foerderung-stein-und-dohlenkrebs "
                title="Der vom Aussterben bedrohte Dohlenkrebs (Austropotamobius pallipes)"
                alt="Der vom Aussterben bedrohte Dohlenkrebs (Austropotamobius pallipes)" />
      
              </UCard>
                <UCard class="p-5 border bg-emerald-50/70 border-emerald-200/60 dark:bg-emerald-950/15 dark:border-emerald-900/35">
                  <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Kurzfazit</div>
                  <p class="mt-2 text-sm text-gray-800 dark:text-gray-200">
                    Seltenes Vorkommen, hohe Empfindlichkeit und Schutzstatus –  direkten Konflikt zwischen Windparkbau und Artenschutz-Richtlinien.
                  </p>
                </UCard>
              </div>
            </aside>
          </div>
        </UContainer>
           <ChapterNavigation class="mt-4" />
      </div>
    </template>
    