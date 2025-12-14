<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-16 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[880px] uno-mx-auto">
      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-10">
          <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
            <div class="uno-w-16 uno-h-16 uno-rounded-full uno-bg-[var(--ui-input)] uno-flex uno-items-center uno-justify-center uno-font-['Outfit'] uno-text-[var(--ui-foreground)]">
              {{ $t('pages.testEnd.score', { value: scoreValue, total: scoreTotal }) }}
            </div>
          </div>

          <h1 class="uno-self-stretch uno-text-[#011813] uno-text-[32px] uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2] style-1">{{ $t('pages.testEnd.title') }}</h1>
          <p class="uno-w-[672px] uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal uno-mx-auto uno-mt-6">{{ $t('pages.testEnd.description') }}</p>

          <div class="uno-mt-6 uno-w-[672px] uno-mx-auto">
            <p class="uno-text-[#011813] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.testEnd.areasTitle') }}</p>
            <div class="uno-space-y-4 uno-mt-3 uno-text-[#4E5255] uno-font-['Outfit']">
              <div v-for="item in areas" :key="item.key" class="uno-flex uno-items-start uno-gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="none"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="uno-mt-1">
                  <g>
                    <g>
                      <path
                        d="M18.749488,7.7498495Q18.871172,7.5876044,18.935305,7.39520538Q18.999437,7.20280637,18.999437,7Q18.999437999999998,6.938603722,18.99342,6.87750308Q18.987402,6.81640245,18.975424,6.7561859Q18.963447000000002,6.69596931,18.945622999999998,6.63721675Q18.927801000000002,6.57846418,18.904305,6.52174145Q18.880811,6.46501869,18.851869,6.41087198Q18.822927,6.35672534,18.788815,6.3056762200000005Q18.754706,6.25462699,18.715757,6.20716703Q18.676807,6.15970707,18.633392999999998,6.11629337Q18.589981,6.07287961,18.542521,6.03393024Q18.495060000000002,5.9949808,18.444011,5.960871Q18.392962,5.926761,18.338816,5.897819Q18.284668,5.8688771,18.227945,5.8453817Q18.171222999999998,5.8218863,18.112471,5.8040639Q18.053719,5.7862415,17.993501000000002,5.7742636Q17.933284999999998,5.7622857,17.872185,5.7562679Q17.811084,5.75025,17.749687,5.75025Q17.604176000000002,5.75025,17.462555000000002,5.783682Q17.320934,5.817114,17.190783,5.8821894Q17.060631,5.9472648,16.948914000000002,6.04050195Q16.837195,6.13373905,16.749887,6.25014955L16.749716,6.25002086L9.9593937,15.3037825L7.1933558600000005,13.4597573L7.19323659,13.4599361Q7.03926659,13.3572898,6.86215776,13.3036656Q6.68504894,13.250041,6.5,13.250041Q6.438603722,13.2500415,6.37750308,13.2560596Q6.31640245,13.2620773,6.2561859,13.2740545Q6.19596931,13.2860327,6.13721675,13.303854900000001Q6.07846418,13.3216772,6.02174145,13.3451719Q5.96501869,13.3686676,5.91087198,13.3976097Q5.85672534,13.4265518,5.8056762200000005,13.4606614Q5.75462699,13.494772000000001,5.70716703,13.533721400000001Q5.65970707,13.5726709,5.61629337,13.6160841Q5.57287961,13.6594982,5.53393024,13.7069578Q5.4949808,13.7544179,5.460871,13.8054667Q5.426761,13.8565159,5.397819,13.9106627Q5.3688771,13.9648094,5.3453817,14.0215316Q5.3218863,14.078254699999999,5.3040639,14.1370077Q5.2862415,14.195760700000001,5.2742636,14.2559767Q5.2622857,14.3161936,5.2562679,14.3772945Q5.25025,14.4383955,5.25025,14.4997911Q5.2502501,14.654099,5.2877829,14.8037724Q5.325316,14.9534459,5.3981273000000005,15.0894947Q5.4709387,15.225544,5.57465518,15.339798Q5.67837167,15.454052,5.80676359,15.5396461L5.8066441399999995,15.5398254L9.5565398,18.039756Q9.6058254,18.072613,9.6579974,18.100661000000002Q9.7101693,18.128711,9.7647595,18.151701Q9.8193502,18.17469,9.8758698,18.192415Q9.9323897,18.210138,9.9903324,18.222439Q10.048275199999999,18.234738999999998,10.1071217,18.241505Q10.1659679,18.248272,10.2251902,18.249442000000002Q10.2844126,18.250613,10.3434803,18.246178999999998Q10.4025481,18.241743,10.460931800000001,18.231743Q10.5193157,18.221743,10.5764918,18.206265000000002Q10.633667899999999,18.190787999999998,10.6891241,18.169974Q10.744581199999999,18.149160000000002,10.7978206,18.123193999999998Q10.8510599,18.097229,10.9016056,18.066345Q10.9521513,18.035460999999998,10.9995499,17.999937Q11.0469484,17.964413,11.0907755,17.924564Q11.1346025,17.884715999999997,11.1744652,17.840902Q11.2143273,17.797089,11.2498674,17.749701L18.74966,7.74997914L18.749488,7.7498495Z"
                        fill-rule="evenodd"
                        fill="#009D77"
                        fill-opacity="1"
                      />
                    </g>
                  </g>
                </svg>
                <p><span class="uno-font-semibold">{{ item.title }}</span> {{ item.body }}</p>
              </div>
            </div>
          </div>

          <div class="uno-flex uno-items-center uno-justify-center uno-gap-3 uno-mt-8">
            <NuxtLink to="/courses" class="uno-inline-block">
              <UButton class="uno-w-[324px] uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1.5 uno-pr-1.5 uno-pl-[20px] uno-bg-[#009D77] uno-rounded-lg">
                <span class="uno-text-[#FFFFFF] uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal">{{ $t('pages.testEnd.ctaPrimary') }}</span>
              </UButton>
            </NuxtLink>
            <NuxtLink to="/tests" class="uno-inline-block">
              <UButton class="uno-w-[324px] uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1.5 uno-pr-1.5 uno-pl-[20px] uno-bg-[#011813] uno-border uno-border-solid uno-border-[#009D77] uno-rounded-lg">
                <span class="uno-text-[#009D77] uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal">{{ $t('pages.testEnd.ctaSecondary') }}</span>
              </UButton>
            </NuxtLink>
          </div>

          <p class="uno-w-[658px] uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-text-center uno-leading-normal uno-mt-4 uno-mx-auto">{{ $t('pages.testEnd.disclaimer') }}</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const route = useRoute()
const scoreValue = ref(Number(route.query.score ?? 20))
const scoreTotal = ref(Number(route.query.total ?? 40))
if (process.client) {
  const s = localStorage.getItem('testScore')
  const tt = localStorage.getItem('testTotal')
  if (!route.query.score && s) scoreValue.value = Number(s)
  if (!route.query.total && tt) scoreTotal.value = Number(tt)
}
const { t } = useI18n()
const areas = [
  { key: 'format', title: t('pages.testEnd.areas.format.title'), body: t('pages.testEnd.areas.format.body') },
  { key: 'financial', title: t('pages.testEnd.areas.financial.title'), body: t('pages.testEnd.areas.financial.body') },
  { key: 'ratio', title: t('pages.testEnd.areas.ratio.title'), body: t('pages.testEnd.areas.ratio.body') },
  { key: 'investment', title: t('pages.testEnd.areas.investment.title'), body: t('pages.testEnd.areas.investment.body') }
]
</script>

<style scoped></style>
