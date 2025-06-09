<template>
  <div class="">
    <div class="text-2xl mb-4">Reiseplanung</div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Todos</h2>
      <div><input type="checkbox" checked disabled class="mr-2">Flug buchen (Februar)</input></div>
      <div><input type="checkbox" checked disabled class="mr-2">Bus Hinweg buchen (ab Mitte Mai)</input></div>
      <div><input type="checkbox" checked disabled class="mr-2">Zug Rückweg buchen (ab Mitte April-Mai)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Mal schauen, ob die Wanderschuhe noch leben (Mai)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Hütten reservieren (?)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Packen</input></div>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Anreise (06. Aug)</h2>
      <ul class="list-disc list-inside">
        <li>Flug Berlin-Oslo mit Norwegian Airlines
          <ul class="list-disc list-inside ml-4">
            <li>9:15-10:55 (1h 40m)</li>
          </ul>
        </li>
        <li>Zug Oslo Airport - Oslo S (HBF): 30 min</li>
        <li>DNT Mitgliedschaft abschließen und Schlüssel abholen</li>
        <li>Bus Oslo-Haukeliseter
          <ul class="list-disc list-inside ml-4">
            <li>13:55 → 19:00 (5h 5min)</li>
            <li><a href="https://www.nor-way.no/en/" class="link">Link zur Buchung</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Etappen</h2>
      <iframe src="https://www.komoot.com/tour/2033931948/embed?profile=1" width="100%" height="700" frameborder="0" scrolling="no"></iframe>
      <ul class="list-disc list-inside">
        <li>Tag 1: Anreise, Übernachtung in Haukeliseter</li>
        <li>Etappe 1: Haukeliseter to Hellevasbu - 21.5 km (Selbstversorgerhütte)</li>
        <li>Etappe 2: Hellevasbu to Litlos - 16.5 km</li>
        <li>Etappe 3: Litlos to Hadlaskard - 20.6 km (Selbstversorgerhütte)</li>
        <li>Etappe 4: Hadlaskard to Hedlo - 9 km</li>
        <li>Etappe 5: Hedlo to Liseth - 16.2 km</li>
        <li>Etappe 6: Liseth to Rembesdalsseter - 19 km (Selbstversorgerhütte)</li>
        <li>Etappe 7: Rembesdalsseter to Finse - 20.8 km</li>
        <li>+1 Chilltag: Irgendwo zwischen Tag 3 und 6 nehmen wir uns eine Auszeit und chillen an einer Hütte.</li>
        <li>Tag 10: Abreise</li>
      </ul>
      <div><a href="https://www.komoot.com/de-de/tour/2033931948" class="link">Link zur Tour auf Komoot</a></div>
      <div><a href="https://ut.no/hytte/10660/haukeliseter-fjellstue/kart#8.93/60.1864/7.3856" class="link">Hütte Haukelister auf ut.no</a></div>

      <br/>
      <div><a href="https://www.komoot.com/collection/3281681/-hardangervidda-sued-nord" class="link">Link zu den einzelnen Etappen auf Komoot</a></div>
      <iframe src="https://www.komoot.com/collection/3281681/embed" width="100%" height="800" frameborder="none" scrolling="no"></iframe>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Abreise (15. Aug)</h2>
      <ul class="list-disc list-inside">
        <li>Zug Finse - Oslo
          <ul class="list-disc list-inside ml-4">
            <li class="font-semibold">08:38 - 13:05</li>
            <li class="opacity-50">10:30 - 15:00 (schon relativ teuer)</li>
            <li><a href="https://www.vy.no/en/" class="link">Link zur Buchung</a></li>
          </ul>
        </li>
        <li>Flug Oslo - Berlin
          <ul class="list-disc list-inside ml-4">
            <li>18:30 - 20:05</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Kosten</h2>
      <ul class="list-disc list-inside">
        <li v-for="(cost, index) in costs" :key="index">
          {{ cost.description }}: {{ cost.amount }} {{ cost.currency }}
        </li>
      </ul>
      <div class="mt-4">
        <p>Gesamtkosten: {{ totalCostEUR.toFixed(2) }} EUR</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const costs = ref([
  { description: 'Flug', amount: 280, currency: 'EUR' },
  { description: 'Zug Flughafen nach Oslo HBF', amount: 130, currency: 'NOK' },
  { description: 'Bus hin', amount: 400, currency: 'NOK' },
  { description: 'Zug zurück', amount: 409, currency: 'NOK' },
  { description: 'Zug Oslo HBF zum Flughafen', amount: 130, currency: 'NOK' },
  { description: 'DNT Mitgliedschaft', amount: 810, currency: 'NOK' },
  { description: 'Übernachtung (Schlafsaal) mit Vollpension', amount: 990 * 9, currency: 'NOK' }
])

const totalEUR = computed(() => {
  return costs.value
    .filter(cost => cost.currency === 'EUR')
    .reduce((total, cost) => total + cost.amount, 0)
})

const totalNOK = computed(() => {
  return costs.value
    .filter(cost => cost.currency === 'NOK')
    .reduce((total, cost) => total + cost.amount, 0)
})

const totalCostEUR = computed(() => {
  return totalEUR.value + (totalNOK.value / 11.50)
})
</script>
