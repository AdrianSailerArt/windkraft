<script setup lang="ts">
const title = "Datenschutzerklärung";
const description = "Datenschutzerklärung und Informationen zur Datenverarbeitung";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
});

const config = useRuntimeConfig();
const canonical = config.public?.siteUrl
  ? `${config.public.siteUrl}/datenschutz`
  : undefined;
useHead({ link: canonical ? [{ rel: "canonical", href: canonical }] : [] });
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">
    <UContainer class="py-24">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Datenschutzerklärung
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
          </p>
        </div>

        <!-- Content -->
        <div class="space-y-8 prose prose-lg dark:prose-invert max-w-none">
          <!-- Verantwortlicher -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              1. Verantwortlicher
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-2">
              <p>Heidrun Schwörer</p>
              <p>Am Löwengarten 14<br />79350 Sexau</p>
              <p>
                <strong>E-Mail:</strong>
                <a href="mailto:info@timeless-well.de" class="text-primary-600 dark:text-primary-400 hover:underline">
                  info@timeless-well.de
                </a>
              </p>
            </div>
          </div>

          <!-- Erhobene Daten -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              2. Welche Daten werden erfasst?
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-4">
              <div>
                <h3 class="font-semibold mb-2">Automatisch erfasste Daten:</h3>
                <ul class="list-disc ml-6 space-y-1">
                  <li>IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Aufgerufene Seiten/Ressourcen</li>
                  <li>Browser- und Betriebssystem-Informationen</li>
                  <li>Referrer-Informationen</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-2">Daten aus Kontaktformularen:</h3>
                <p>Falls vorhanden, werden Name, E-Mail-Adresse und Nachrichteninhalt erfasst.</p>
              </div>
            </div>
          </div>

          <!-- Rechtsgrundlage -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              3. Rechtsgrundlage
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                <strong>Berechtigtes Interesse (Art. 6 Abs. 1 f DSGVO):</strong>
                Die Verarbeitung erfolgt zur Optimierung der Website und zur Gewährleistung der Websicherheit.
              </p>
              <p>
                <strong>Ihre Einwilligung (Art. 6 Abs. 1 a DSGVO):</strong>
                Bei Kontaktformularen erfolgt die Verarbeitung auf Basis Ihrer Einwilligung.
              </p>
            </div>
          </div>

          <!-- Hosting & Infrastruktur -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              4. Hosting & Infrastruktur
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                Diese Website wird auf Vercel gehostet. Vercel kann bei der Bereitstellung der Website personenbezogene Daten verarbeiten (z.B. IP-Adressen in Server-Logs).
              </p>
              <p>
                <strong>Datenschutzerklärung:</strong>
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" class="text-primary-600 dark:text-primary-400 hover:underline">
                  Vercel Privacy Policy
                </a>
              </p>
            </div>
          </div>

          <!-- Server-Logs -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              5. Server-Logs
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-2">
              <p>
                Der Hosting-Provider erfasst automatisch Informationen in sog. Server-Log-Dateien:
              </p>
              <ul class="list-disc ml-6 space-y-1">
                <li>Browsertyp und Version</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>HTTP-Statuscode</li>
              </ul>
              <p class="mt-3">
                Diese Daten werden in der Regel nach 7-30 Tagen gelöscht.
              </p>
            </div>
          </div>

          <!-- Cookies -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              6. Cookies
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                Diese Website setzt minimal Cookies. Wenn Cookies verwendet werden, erfolgt dies entweder:
              </p>
              <ul class="list-disc ml-6 space-y-1">
                <li>Auf Basis Ihrer ausdrücklichen Einwilligung, oder</li>
                <li>Zur Gewährleistung der technischen Funktionalität der Website</li>
              </ul>
              <p>
                Sie können Cookies in den Einstellungen Ihres Browsers deaktivieren.
              </p>
            </div>
          </div>

          <!-- Externe Dienste -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              7. Externe Dienste und Verknüpfungen
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                Diese Website kann Links zu externen Websites enthalten. Für den Datenschutz auf externen Websites tragen wir keine Verantwortung.
              </p>
              <p>
                Bitte informieren Sie sich auf den Datenschutzerklärungen der verlinkten Websites.
              </p>
            </div>
          </div>

          <!-- Ihre Rechte -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200/40 dark:border-emerald-900/20 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              8. Ihre Rechte
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-2">
              <p>Sie haben folgende Rechte:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen</li>
                <li><strong>Berichtigungsrecht:</strong> Unrichtige Daten können korrigiert werden</li>
                <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten fordern</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen</li>
                <li><strong>Widerrufsrecht:</strong> Sie können erteilte Einwilligungen jederzeit widerrufen</li>
              </ul>
              <p class="mt-3">
                Kontaktieren Sie uns unter
                <a href="mailto:info@timeless-well.de" class="text-primary-600 dark:text-primary-400 hover:underline">
                  info@timeless-well.de
                </a>
                zur Geltendmachung dieser Rechte.
              </p>
            </div>
          </div>

          <!-- Datensicherheit -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              9. Datensicherheit
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                Diese Website verwendet HTTPS (SSL/TLS-Verschlüsselung) zur Sicherung der Datenübertragung.
              </p>
              <p>
                Trotz aller Sicherheitsmaßnahmen können wir absolute Sicherheit nicht garantieren. Der Zugang und die Nutzung dieser Website erfolgen auf Ihr eigenes Risiko.
              </p>
            </div>
          </div>

          <!-- Kontakt & Beschwerden -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/30 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              10. Kontakt & Beschwerde
            </h2>
            <div class="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                Bei Fragen zum Datenschutz kontaktieren Sie uns:
              </p>
              <p>
                <a href="mailto:info@timeless-well.de" class="text-primary-600 dark:text-primary-400 hover:underline">
                  info@timeless-well.de
                </a>
              </p>
              <p>
                Sie haben zudem das Recht, sich beschwerde bei der zuständigen Aufsichtsbehörde einzureichen:
                <a href="https://www.bfdi.bund.de/" target="_blank" rel="noopener" class="text-primary-600 dark:text-primary-400 hover:underline">
                  Bundesbeauftragter für den Datenschutz (BfDI)
                </a>
              </p>
            </div>
          </div>

          <!-- Änderungen -->
          <div class="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/20 p-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              11. Änderungen dieser Datenschutzerklärung
            </h2>
            <div class="text-gray-700 dark:text-gray-300">
              <p>
                Diese Datenschutzerklärung kann jederzeit geändert werden. Die aktuelle Version wird auf dieser Website veröffentlicht.
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Letzte Aktualisierung: Januar 2026
              </p>
            </div>
          </div>

          <!-- Navigation -->
          <div class="pt-8 mt-8 border-t border-gray-200/60 dark:border-gray-800/60">
            <div class="flex gap-4 flex-wrap">
              <NuxtLink to="/impressum" class="text-primary-600 dark:text-primary-400 hover:underline">
                → Zum Impressum
              </NuxtLink>
              <NuxtLink to="/" class="text-primary-600 dark:text-primary-400 hover:underline">
                → Zur Startseite
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
