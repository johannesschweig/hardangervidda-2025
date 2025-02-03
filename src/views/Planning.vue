<template>
  <div class="">
    <div class="text-2xl mb-4">Reiseplanung</div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Todos</h2>
      <div><input type="checkbox" disabled class="mr-2">Flug buchen (Februar)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Bus Hinweg buchen (max. 85 Tage im Voraus)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Zug Rückweg buchen (max. 90-120 Tage im Voraus)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Mal schauen, ob die Wanderschuhe noch leben (Mai)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Hütten reservieren (?)</input></div>
      <div><input type="checkbox" disabled class="mr-2">Packen</input></div>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Anreise</h2>
      <ul class="list-disc list-inside">
        <li>Flug Berlin-Oslo mit Norwegian Airlines
          <ul class="list-disc list-inside ml-4">
            <li>9:15-10:55 (1h 40m)</li>
          </ul>
        </li>
        <li>Zug Oslo Airport - Oslo S (HBF): 30 min</li>
        <li>Bus Oslo-Haukeliseter
          <ul class="list-disc list-inside ml-4">
            <li>13:55 → 19:00 (5h 5min)</li>
            <li><a href="https://www.nor-way.no/en/travelplanner/#/utreise?originId=18650BA5-D24F-4B0D-A98D-300D0E76ACAA&originName=Oslo%20bussterminal&destinationId=CB135C46-AD44-4E9A-86CD-3A037FCA6002&destinationName=Haukeliseter&departureDate=2025-03-07&qty_3d2fe8d3-c3c9-44b8-917c-725d859376ba=1" class="link">Link zur Buchung</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Etappen</h2>
      <a href="https://www.komoot.com/de-de/tour/2033931948">
        <img :src="tourImage" alt="Tour Image" class="mb-4" style="max-height: 40em;">
      </a>
      <ul class="list-disc list-inside">
        <li>Tag 1: Anreise, Übernachtung in Haukeliseter</li>
        <li>Etappe 1: Haukeliseter to Hellevasbu - 22km (Selbstversorgerhütte)</li>
        <li>Etappe 2: Hellevasbu to Litlos - 18km</li>
        <li>Etappe 3: Litlos to Hadlaskard - 20km (Selbstversorgerhütte)</li>
        <li>Etappe 4: Hadlaskard to Hedlo - 10km</li>
        <li>Etappe 5: Hedlo to Liseth - 21km</li>
        <li>Etappe 6: Liseth to Rembesdalsseter - 22km (Selbstversorgerhütte)</li>
        <li>Etappe 7: Rembesdalsseter to Finse - 24km</li>
        <li>+1 Chilltag: Irgendwo zwischen Tag 3 und 6 nehmen wir uns eine Auszeit und chillen an einer Hütte.</li>
        <li>Tag 10: Abreise</li>
      </ul>
      <div><a href="https://www.komoot.com/de-de/tour/2033931948" class="link">Link zur Tour auf Komoot</a></div>
      <div><a href="https://ut.no/hytte/10660/haukeliseter-fjellstue/kart#8.93/60.1864/7.3856" class="link">Hütte Haukelister auf ut.no</a></div>

      <br/>
      <div><a href="https://www.komoot.com/collection/3281681/-hardangervidda-sued-nord" class="link">Link zu den einzelnen Etappen auf Komoot</a></div>
      <a href="https://www.komoot.com/collection/3281681/-hardangervidda-sued-nord">
        <img :src="tourStagesImage" alt="Tour Image Stages" class="mb-4" style="max-height: 40em;">
      </a>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Abreise</h2>
      <ul class="list-disc list-inside">
        <li>Zug Finse - Oslo
          <ul class="list-disc list-inside ml-4">
            <li>10:30 - 15:00</li>
            <li><a href="https://www.vy.no/en/see-travel-suggestions?from=Finse+stasjon&to=Oslo+S&fromDateTime=2025-04-01T08:52:26.000Z&fromExternalId=NSR:NSR:StopPlace:200&toExternalId=NSR:NSR:StopPlace:59872,RESROBOT:760000100&passengers=W3siaWQiOjAsImFnZSI6bnVsbCwiZGlzY291bnRzIjpbXSwiY2F0ZWdvcnkiOiJBZHVsdCIsIm5hbWUiOiJBZHVsdCIsImludGVycmFpbENvZGUiOm51bGx9XQ&addons=W3sidHlwZSI6ImJpY3ljbGUiLCJudW1iZXJUb0J1eSI6MH0seyJ0eXBlIjoibGFyZ2VfYW5pbWFsIiwibnVtYmVyVG9CdXkiOjB9LHsidHlwZSI6InNtYWxsX2FuaW1hbCIsIm51bWJlclRvQnV5IjowfSx7InR5cGUiOiJzdHJvbGxlciIsIm51bWJlclRvQnV5IjowfSx7InR5cGUiOiJ3aGVlbGNoYWlyIiwibnVtYmVyVG9CdXkiOjB9XQ&fromPosition=60.601772,7.503823&toPosition=59.910357,10.753051" class="link">Link zur Buchung</a></li>
          </ul>
        </li>
        <li>Flug Oslo - Berlin
          <ul class="list-disc list-inside ml-4">
            <li>20:00 - 21:35</li>
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
import tourImage from '@/assets/planning/tour.png'
import tourStagesImage from '@/assets/planning/tour-stages.png'

const costs = ref([
  { description: 'Flug', amount: 250, currency: 'EUR' },
  { description: 'Zug Flughafen nach Oslo HBF', amount: 130, currency: 'NOK' },
  { description: 'Bus hin', amount: 60, currency: 'EUR' },
  { description: 'Zug zurück', amount: 300, currency: 'NOK' },
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
  return totalEUR.value + (totalNOK.value / 11.74)
})
</script>
