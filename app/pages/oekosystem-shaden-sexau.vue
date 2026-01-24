<!-- pages/oekosystem-schaeden-sexau.vue -->
<script setup lang="ts">
const title = "Massive Schäden im Ökosystem";
const description =
  "Auswirkungen geplanter Windkraftanlagen im Sexauer Peterswald: Eingriffe in Wald, Boden und Wasserhaushalt, Transport- und Zuwegungsmaßnahmen sowie langfristige Folgen fürs Ökosystem.";

useSeoMeta({
  title,
  description,
  ogTitle: "Massive Schäden im Ökosystem – Windkraft im Sexauer Peterswald",
  ogDescription:
    "Waldrodung, Fundamentierung, Zuwegung und mögliche Folgen für Boden, Wasserhaushalt und Waldökosystem im Sexauer Peterswald.",
  ogType: "article",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/oekosystem-schaeden-sexau`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });
</script>

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
              <UBadge color="success" variant="soft" icon="i-lucide-leaf"
                >Wald &amp; Natur</UBadge
              >
              <UBadge color="info" variant="soft" icon="i-lucide-droplets"
                >Wasserhaushalt</UBadge
              >
              <UBadge color="warning" variant="soft" icon="i-lucide-truck"
                >Transport &amp; Wege</UBadge
              >
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Massive Schäden im Ökosystem
            </h1>

            <p class="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg">
              Der Schwarzwald gehört zu den schönsten und berühmtesten Gegenden
              Deutschlands. Touristen kommen von weit her, um hier zu wandern,
              sich zu erholen und an der noch weitgehend unberührten Natur zu
              erfreuen.
            </p>

            <div
              class="mt-6 h-px bg-gradient-to-r from-emerald-300/90 via-amber-300/70 to-transparent dark:from-emerald-500/35 dark:via-amber-500/25"
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
                    Fundament
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    &gt; 500 m² Betonsockel
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Waldverlust
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    ~ 1 ha pro Windrad
                  </p>
                </div>
                <div
                  class="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/25 p-4"
                >
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Zufahrtsweg
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    mind. 3 km durch Wald
                  </p>
                </div>
              </div>

              <UAlert
                class="mt-6"
                color="neutral"
                variant="soft"
                icon="i-lucide-info"
                title="Hinweis"
                description="Die folgenden Punkte beschreiben Eingriffe und mögliche Folgen für Boden, Wasser und Waldökosystem."
              />
            </div>
          </div>
        </div>
      </UCard>

      <!-- STORY STRIP -->
      <div class="mt-10 max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
        >
          <div class="h-1 bg-emerald-400/70 dark:bg-emerald-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Ausschlusskriterien
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              BfN: wertvolle Wälder
            </p>
          </div>
        </UCard>

        <UCard
          class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
        >
          <div class="h-1 bg-amber-400/70 dark:bg-amber-500/30" />
          <div class="p-5">
            <p
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Boden &amp; Wasser
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Verdichtung, Abfluss, Erosion
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
              Logistik
            </p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Schwertransporte, Wege, Kabel
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
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <KpiBadge tone="amber" title="&gt; 500 m²" subtitle="Fundament" />
              <KpiBadge tone="rose" title="~ 1 ha" subtitle="Wald pro WKA" />
              <KpiBadge tone="gray" title="86 m" subtitle="Rotorblatt" />
              <KpiBadge tone="gray" title="~ 20 Jahre" subtitle="Betrieb " />
              <KpiBadge tone="emerald" title="≥ 3 km" subtitle="Zufahrtsweg" />
            </div>

            <div class="h-px bg-gray-200/70 dark:bg-gray-800/70" />
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
              <h2 class="text-xl">Ökologisch wertvolle Wälder laut BfN</h2>
              <br />
              <p>
                Laut dem Bundesamt für Naturschutz (BfN) kommen Waldgebiete mit
                besonders wertvollen Laub- und Mischwäldern oder mit besonders
                hoher ökologischer Wertigkeit für Windkraftanlagen nicht
                infrage. Neben Naturschutzgebieten schließt das Bundesamt für
                Naturschutz (BfN) unter anderem auch Wälder mit altem
                Baumbestand, mit Bodenschutzfunktion oder Flächen mit
                kulturhistorisch wertvollen oder landschaftsprägenden Beständen
                aus. Dies alles trifft für die vorgesehenen Standorte im Sexauer
                Peterswald eindeutig zu.
              </p>
              <br />

              <h2 class="text-xl">
                Fundament, Sprengung und dauerhafte Kontamination
              </h2>
              <br />
              <p>
                Das Fundament der Windenergietürme besteht in über 500 m² großen
                und mehrere Meter tiefen Betonsockeln, die in den Waldboden
                versenkt werden. Kuppen oder Felsen im Sockelfundament müssen
                beseitigt und zum Teil weggesprengt werden.
              </p>

              <!-- DRAMA CALLOUT -->
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
                    Nach Abbau der Türme in ca. 20 Jahren verbleiben die
                    Betonsockel auch größtenteils dort. Beton und Stahl
                    erodieren ungehindert weiter und kontaminieren auf Dauer
                    Böden, Grundwasser und Waldökosysteme.
                  </p>
                </div>
              </div>
              <br />
              <p>
                Durch die mechanischen Belastungen durch Sprengung, Rammung und
                Vibrationsübertragung der Windenergieanlagen in das umgebende
                Gestein können Quellen versiegen und irreversible Veränderungen
                der Wasserwege im Grundwasser entstehen.
              </p>
              <br />
              <p>
                Durch die Bewegung der Rotorflügel kommt es zu vermehrter
                Trockenheit in der Umgebung. Dies schädigt Vegetation und
                Baumbestand in der Umgebung, was u.a. zu vermehrtem
                Borkenkäferbefall führen kann. Zudem sorgt die Luftverwirbelung
                für eine relative Temperaturerhöhung vor Ort.
              </p>
              <br />
              <p>
                Außerdem müssen Leitungen zum Abtransport der gewonnenen Energie
                durch den Waldboden verlegt werden.
              </p>

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
                          Fundament &amp; Eingriff
                        </p>
                        <p
                          class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                        >
                          Betonsockel im Waldboden
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="p-6">
                    <div class="grid gap-4 sm:grid-cols-3">
                      <div
                        class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4"
                      >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Größe
                        </p>
                        <p
                          class="text-lg font-extrabold text-gray-900 dark:text-gray-100"
                        >
                          &gt; 500 m²
                        </p>
                      </div>
                      <div
                        class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4"
                      >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Tiefe
                        </p>
                        <p
                          class="text-lg font-extrabold text-gray-900 dark:text-gray-100"
                        >
                          mehrere Meter
                        </p>
                      </div>
                      <div
                        class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-950/20 p-4"
                      >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Maßnahmen
                        </p>
                        <p
                          class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                        >
                          Beseitigung / Sprengung
                        </p>
                      </div>
                    </div>
                  </div>
                </UCard>
              </div>
              <br />
              <h2 class="text-xl">
                Waldrodung, Schwertransporte und Bodenschäden
              </h2>
              <br />
              <p>
                Für jedes Windrad wird etwa ein Hektar Wald abgeholzt. Es werden
                Fundamente benötigt, Zufahrtswege und die Baustelleneinrichtung.
                Mit riesigen Schwertransportern und Spezialfahrzeugen wie
                Bladeliftern für schwieriges Gelände werden die Einzelteile zum
                Aufstellungsort gebracht. Darunter auch die 86 m langen
                Rotorblätter. Jedes Rotorblatt wiegt etwa 20 Tonnen. Zusammen
                mit dem Transporter rollen bei jeder Fahrt 100 Tonnen über die
                Waldwege.
              </p>

              <div
                class="not-prose my-8 rounded-2xl border border-indigo-200/60 bg-indigo-50/60 p-6 dark:border-indigo-900/35 dark:bg-indigo-950/16"
              >
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p
                      class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                    >
                      Transport
                    </p>
                    <p
                      class="mt-1 text-3xl font-extrabold text-gray-900 dark:text-gray-100"
                    >
                      86 m
                    </p>
                    <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      Rotorblatt-Länge
                    </p>
                  </div>
                  <div class="text-right">
                    <p
                      class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                    >
                      Gewicht
                    </p>
                    <p
                      class="mt-1 text-2xl font-extrabold text-gray-900 dark:text-gray-100"
                    >
                      20 t
                    </p>
                    <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      pro Rotorblatt
                    </p>
                  </div>
                </div>

                <div
                  class="mt-5 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden"
                >
                  <div
                    class="h-full w-[85%] bg-gradient-to-r from-indigo-400/70 to-amber-400/70 dark:from-indigo-500/35 dark:to-amber-500/30"
                  />
                </div>

                <p class="mt-4 text-sm text-gray-800 dark:text-gray-200">
                  Zusammen mit dem Transporter rollen bei jeder Fahrt 100 Tonnen
                  über die Waldwege.
                </p>
              </div>
              <br />
              <p>
                Die schützende Waldbodenkrume wird aufgerissen, maschinell
                umgelagert und hoch verdichtet. Wasserdurchlässigkeit, Filter-
                und Speicherfunktion gehen weitgehend verloren. Das
                Bodenökosystem wird dabei für Jahrhunderte irreparabel zerstört.
              </p>
              <br />
              <p>
                Die Versiegelung und Verdichtung der Böden führen zu erheblichen
                Problemen im Wasserhaushalt. Sowohl Speicherfähigkeit als auch
                Grundwasserneubildungsrate sinken. Die Gefahr von sturzartigem
                Abfluss insbesondere bei Starkregenfällen steigt, ebenso wie die
                Hangerosion.
              </p>
              <br />
              <p>
                Die für die Windräder und Zufahrtswege abgeholzten Bäume sollen
                an anderer Stelle wieder aufgeforstet werden. Es werden jedoch
                nicht nur Bäume gerodet, sondern ebenfalls das zugehörige
                Ökosystem geschädigt.
              </p>
              <br />
              <p>
                Die neugepflanzten Bäume brauchen etwa 40 Jahre um zu der Größe
                wie die gefällten Bäume heranzuwachsen. Allein daraus ergibt
                sich, dass Abholzung und Aufforstung nicht 1:1 austauschbar
                sind.
              </p>
              <br />
              <h2 class="text-xl">Ungewöhnlich langer Zufahrtsweg</h2>
              <br />
              <p>
                Richtig heftig und noch deutlich verschlimmert wird dies alles
                durch den ungewöhnlich langen Zufahrtsweg. Vermutlich wird der
                Zufahrtsweg von den Staudenhöfen ausgehend in den Peterswald
                führen.
              </p>

              <div
                class="not-prose my-6 rounded-2xl border border-amber-200/60 bg-amber-50/70 p-6 dark:border-amber-900/35 dark:bg-amber-950/15"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 rounded-lg bg-amber-500/10 p-2">
                    <UIcon
                      name="i-lucide-route"
                      class="h-5 w-5 text-amber-700 dark:text-amber-300"
                    />
                  </div>
                  <div>
                    <p
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                      Zufahrtsweg
                    </p>
                    <p class="mt-1 text-sm text-gray-800 dark:text-gray-200">
                      Der Zufahrtsweg wäre mindestens 3 km lang und würde fast
                      vollständig mitten durch den Wald führen. Der Zufahrtsweg
                      würde den Peterswald nahezu komplett durchschneiden.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Quellenblock -->
              <div class="not-prose mt-10">
                <UCard
                  class="bg-white/85 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 overflow-hidden"
                >
                  <div
                    class="px-6 py-4 bg-gradient-to-r from-emerald-50/70 via-white to-gray-50/60 dark:from-emerald-950/14 dark:via-gray-950/10 dark:to-gray-950/10 border-b border-gray-200/60 dark:border-gray-800/60"
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
                      href="https://www.bfn.de/"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.bfn.de/
                    </a>
                    <a
                      href="https://www.lana-schwarzwald.de/artikel0027.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.lana-schwarzwald.de/artikel0027.html
                    </a>
                    <a
                      href="https://www.enbw.com/unternehmen/themen/windkraft/windrad-transport.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.enbw.com/unternehmen/themen/windkraft/windrad-transport.html
                    </a>
                    <a
                      href="https://www.lana-schwarzwald.de/artikel0027.html"
                      target="_blank"
                      rel="noopener"
                      class="block text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      https://www.lana-schwarzwald.de/artikel0027.html
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
              title=" Der vermutlich geplante Zufahrtsweg"
                src="/07.jpg"
                alt="Der vermutlich geplante Zufahrtsweg"
                caption="Quelle: Google Earth, Data attribution 3/18/2025 – ergänzt durch
                eigene Darstellung des Zufahrtsweges und der Windräder"
              />
             
            </UCard>
          </div>
        </aside>
      </div>
    </UContainer>
       <ChapterNavigation />
  </div>
</template>
