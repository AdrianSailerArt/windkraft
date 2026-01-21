<script setup lang="ts">
definePageMeta({
  title: 'Gigantische Windräder in Sexau – Höhe, Sichtbarkeit & Entfernungen',
  meta: [
    {
      name: 'description',
      content: 'Zwei geplante Windkraftanlagen mit 261 m Höhe prägen das gesamte Ortsbild von Sexau. Höhenprofile, Entfernungen unter 3 km und Einordnung der topografischen Situation auf Basis von Google Earth.'
    },
    { property: 'og:title', content: 'Gigantische Windräder in Sexau – Sichtbar über das gesamte Dorf' },
    {
      property: 'og:description',
      content: 'Darstellung der geplanten Windenergieanlagen in Sexau: 261 m Höhe, überragende Anhöhen im Peterswald und massive Sichtbarkeit im gesamten Dorfgebiet.'
    }
  ]
})
</script>

<template>
  <UContainer class="py-12">
    <header class="mb-10 rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div class="py-10 px-6 text-center">
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Gigantische Windräder in Sexau
        </h1>
        <p class="mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
          Zwei übergroße Windkraftanlagen prägen künftig das gesamte Ortsbild von Sexau – nicht irgendwo im Wald, sondern weithin sichtbar über das komplette Dorfgebiet.
        </p>
      </div>
    </header>

    <!-- KPI / Eye-Catcher -->
    <div class="max-w-6xl mx-auto px-4 mb-8">
      <div class="flex justify-center">
        <div class="grid grid-cols-4 gap-4">
           <KpiBadge tone="rose" title="261m" subtitle="Höhe" />
              <KpiBadge tone="amber" title="3km" subtitle="Entfernung" />
              <KpiBadge tone="gray" title="&lt; Ganz Sexau" subtitle="Sichtbarer bereich" />
              <KpiBadge tone="emerald" title="4 Anlagen" subtitle="je 7,2 MW" />

        </div>
      </div>
    </div>

    <main class="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-3 lg:items-start">
      <section class="lg:col-span-2 prose dark:prose-invert">
        <p>
           Gigantische Windräder – nicht irgendwo im Wald – sondern übergroß in ganz Sexau sichtbar.
        </p>

        <p>
          Um die Größenverhältnisse zu veranschaulichen, sind die Windräder in der nachfolgenden Grafik dargestellt. Es sind jeweils die Höhen angegeben, in welcher die Windkraftanlagen aufgestellt werden sollen.
        </p>
<br />
        <p>
          Sexau liegt 232 m über dem Meeresspiegel. Davon ausgehend sind die einzelnen Höhen berechnet. Die Höhen wurden über Google Earth ermittelt.
        </p>
<br />
        <p>
          Die Windkraftanlagen selbst haben jeweils eine Höhe von 261 m. Wie in der nachfolgenden Grafik gut zu erkennen ist, sind zwei der Windkraftanlagen (WKA 01 und WKA 02) deutlich höher, als die Erhebungen des Peterswaldes, auf denen sie stehen! Auch die Windkraftanlagen WKA 03 und WKA 04 überragen die Anhöhen, auf denen sie stehen, fast nochmals um die gleiche Höhe.
        </p>
<br />
        <p>
          Zudem liegen die Windkraftanlagen nur knapp 3 km von Sexau entfernt. Dies macht das gigantische Ausmaß und die erdrückende Wirkung auf das gesamte Dorfgebiet, auf jedes einzelne Haus in Sexau, noch deutlicher.
        </p>

        <div class="mt-6 text-sm text-gray-600 dark:text-gray-400">
          Quellen:<br />
          <ul>
            <li>EnVentus-Plattform_Q1-2022_VestasBrochure_DE_WEB.pdf</li>
            <li><a href="https://de.wikipedia.org/wiki/Sexau" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">Wikipedia – Sexau</a></li>
            <li><a href="https://earth.google.com/" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">Google Earth</a></li>
          </ul>
        </div>
      </section>

      <aside class="lg:col-span-1">
        <div class="sticky top-24">
          <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
             <UCard class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 p-5">
                <div class="text-sm font-semibold mb-3">Höhenprofil</div>
                <AssetImageViewer src="/03.jpg" alt="Höhenprofil" ratio="16/9" />
                <span class="text-sm font-semibold mb-3">Die jeweiligen Höhen sind maßstabgerecht eingezeichnet, Maßstab 1:5000 Höhen aus Angaben von Google Earth errechnet
</span>
               
              </UCard>
               <UCard class="bg-white/90 dark:bg-gray-950/25 border border-gray-200/60 dark:border-gray-800/60 p-5">
                <div class="text-sm font-semibold mb-3">Sexau mit den geplanten Windenergieanlagen</div>
                <AssetImageViewer src="/00.jpg" alt="Sexau mit den geplanten Windenergieanlagen" ratio="16/9" />
               
              </UCard>
           </div>
        </div>
      </aside>
    </main>
  </UContainer>
</template>
