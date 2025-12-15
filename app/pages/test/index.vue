<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-flex uno-flex-col uno-items-center uno-gap-4">
        <div class="uno-w-[80px] uno-h-[80px] uno-flex uno-items-center uno-justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="none"
            version="1.1"
            width="80"
            height="79.997802734375"
            viewBox="0 0 80 79.997802734375">
            <g>
              <g>
                <path
                  d="M23.9426,6.2976718C32.925961,-2.1259091,46.915886,-2.0954692,55.862717,6.3669062C55.862717,6.3669062,65.106529,15.110062,65.106529,15.110062C65.106529,15.110062,73.639397,24.138941,73.639397,24.138941C82.045288,33.033203,82.129723,46.91748,73.832123,55.912834C73.832123,55.912834,65.106529,65.372101,65.106529,65.372101C65.106529,65.372101,55.921101,73.837807,55.921101,73.837807C50.19355,79.116486,42.487534,80.997826,35.349407,79.500229C31.20351,78.630402,28.862253,74.346199,28.864952,70.110046C28.864952,70.106804,28.864954,70.104179,28.864954,70.102196C28.864954,70.102196,28.864954,61.03669,28.864954,61.03669C32.181892,62.790154,35.962029,63.784851,39.974991,63.784882C53.123951,63.784882,63.783291,53.125492,63.783329,39.976543C63.783329,26.827562,53.12397,16.168211,39.974991,16.168211C26.826096,16.168312,16.166658,26.827625,16.166658,39.976543C16.16666,40.681503,16.199121,41.379169,16.259142,42.068558C16.198723,42.420307,16.167173,42.781994,16.167173,43.15099C16.167173,43.15099,16.167173,66.079948,16.167173,66.079948C16.167173,66.079948,14.579951,64.578491,14.579951,64.578491C14.579951,64.578491,6.3570857,55.874084,6.3570857,55.874084C-2.1002257,46.921619,-2.1215689,32.930992,6.3085184,23.952936C6.3085184,23.952936,15.109026,14.580988,15.109026,14.580988C15.109026,14.580988,23.9426,6.2976718,23.9426,6.2976718ZM39.974991,28.86599C46.111183,28.86599,51.085545,33.840351,51.085545,39.976543C51.085506,46.112705,46.11116,51.087105,39.974991,51.087105C33.838909,51.087002,28.864473,46.11264,28.864437,39.976543C28.864437,33.840416,33.838886,28.866091,39.974991,28.86599Z"
                  fill="#009D77"
                  fill-opacity="1" />
              </g>
            </g>
          </svg>
        </div>
        <h1 class="uno-w-[909.71px] uno-text-[#011813] uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-8 md:uno-mb-12">{{ $t('pages.testIntro.title') }}</h1>
      </div>

      <div class="uno-mt-6">
        <div class="uno-grid uno-gap-8 md:uno-gap-12 md:uno-grid-cols-3">
          <div class="uno-bg-[#FBF0F4] uno-rounded-[24px] uno-w-[300px] uno-mx-auto">
            <div class="uno-inline-block uno-w-fit uno-mx-auto uno-p-4 uno-space-y-2 uno-bg-[#FBF0F4] uno-rounded-2xl">
              <div class="uno-flex uno-flex-col uno-items-center uno-gap-3">
                <span class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--color-pink-4)] uno-flex uno-items-center uno-justify-center">
                  <NuxtImg src="/images/test/1.png" alt="step1" width="80" height="80" />
                </span>
                <span class="uno-inline-flex uno-justify-start uno-items-center uno-flex-row uno-gap-2.5 uno-py-1 uno-px-4 uno-bg-[#FD9AC0] uno-rounded-3xl uno-self-start uno-text-[#011813] uno-text-center uno-text-xs uno-font-['Outfit'] uno-font-medium uno-leading-[1.36]">STEP 1</span>
              </div>
              <div class="uno-text-[#011813] uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-semibold">{{ $t('pages.testIntro.pc.step1.title') }}</div>
              <p class="uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-['Outfit']">{{ $t('pages.testIntro.pc.step1.desc') }}</p>
            </div>
          </div>

          <div class="uno-bg-white uno-rounded-[24px] uno-w-[300px] uno-mx-auto">
            <div class="uno-inline-block uno-w-fit uno-mx-auto uno-p-4 uno-space-y-2 uno-bg-[#EEE5F8] uno-rounded-[24px]">
              <div class="uno-flex uno-flex-col uno-items-center uno-gap-3">
                <span class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--color-purple-4)] uno-flex uno-items-center uno-justify-center">
                  <NuxtImg src="/images/test/2.png" alt="step2" width="80" height="80" />
                </span>
                <span class="uno-inline-flex uno-justify-start uno-items-center uno-flex-row uno-gap-2.5 uno-py-1 uno-px-4 uno-bg-[#DEC4FA] uno-rounded-3xl uno-text-[#011813] uno-text-center uno-text-xs uno-font-['Outfit'] uno-font-medium uno-leading-[1.36] uno-self-start">STEP 2</span>
              </div>
              <div class="uno-text-[#011813] uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-semibold">{{ $t('pages.testIntro.pc.step2.title') }}</div>
              <p class="uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-['Outfit']">{{ $t('pages.testIntro.pc.step2.desc') }}</p>
            </div>
          </div>

          <div class="uno-bg-[#D2F2E9] uno-rounded-[24px] uno-p-4 uno-space-y-2 uno-w-[300px] uno-mx-auto">
            <div class="uno-flex uno-flex-col uno-items-center uno-gap-3">
              <span class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/test/3.png" alt="step3" width="80" height="80" />
              </span>
              <span class="uno-inline-block uno-rounded-full uno-bg-[var(--color-green-2)] uno-text-[#011813] uno-text-xs uno-font-['Outfit'] uno-px-3 uno-py-1 uno-self-start">STEP 3</span>
            </div>
            <div class="uno-text-[#011813] uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-semibold">{{ $t('pages.testIntro.pc.step3.title') }}</div>
            <p class="uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-['Outfit']">{{ $t('pages.testIntro.pc.step3.desc') }}</p>
          </div>
        </div>
      </div>

      <div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-6">
        <div class="uno-flex uno-items-center uno-justify-between uno-text-[var(--ui-muted-foreground)]">
          <div class="uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-leading-normal">{{ progress }}%</div>
          <div class="uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.testIntro.progress.step', { current, total }) }}</div>
        </div>
        <div class="uno-relative uno-w-full uno-h-[10px] uno-rounded-xl uno-bg-[#DDDDDD] uno-mt-2">
          <div class="uno-absolute uno-top-0 uno-left-0 uno-w-[32px] uno-h-[10px] uno-rounded-xl uno-bg-[#009D77] uno-z-10"></div>
          <div class="uno-h-full uno-rounded-full uno-bg-[var(--ui-primary)]" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-4">
        <div class="uno-flex uno-items-center uno-justify-between">
          <NuxtLink to="/tests" class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
          <h2 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">{{ $t('pages.testIntro.instructions') }}</h2>
          <div class="uno-w-6"></div>
        </div>
        <div class="uno-flex uno-flex-row uno-items-center uno-justify-between uno-gap-0 uno-mt-4 uno-px-[10%]">
          <div class="uno-flex uno-flex-col uno-items-center uno-gap-1">
            <div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2"></div>
            <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.sd') }}</span>
          </div>
          <div class="uno-flex uno-flex-col uno-items-center uno-gap-1">
            <div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2"></div>
            <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.d') }}</span>
          </div>
          <div class="uno-flex uno-flex-col uno-items-center uno-gap-1">
            <div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2"></div>
            <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.n') }}</span>
          </div>
          <div class="uno-flex uno-flex-col uno-items-center uno-gap-1">
            <div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2"></div>
            <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.a') }}</span>
          </div>
          <div class="uno-flex uno-flex-col uno-items-center uno-gap-1">
            <div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2"></div>
            <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.sa') }}</span>
          </div>
        </div>
      </div>

      <div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-4">
        <div class="uno-space-y-4">
          <div v-for="(q, qi) in questions" :key="qi" class="uno-bg-white uno-rounded-[20px] uno-border uno-border-[var(--ui-border)] uno-shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
            <div class="uno-p-5 md:uno-p-6">
                <p class="uno-text-[#011813] uno-font-['Outfit'] uno-text-center uno-leading-[1.2]">{{ q }}</p>
              <div class="uno-flex uno-flex-row uno-items-center uno-justify-between uno-gap-[20px] uno-mt-4 uno-px-[10%]">
                <svg v-if="qi === 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="40" height="40.000244140625" viewBox="0 0 40 40.000244140625" @click="answers[qi] = 1">
                  <g>
                    <rect x="0" y="0" width="40" height="40" rx="20" fill="#F6998D" fill-opacity="1" />
                    <g>
                      <path d="M28.437143,15.522389408125001Q28.58683,15.380761738125,28.668314,15.191486958125Q28.7498,15.002212208125,28.7498,14.796142578125Q28.749798,14.697670869125,28.730587,14.601091278125Q28.711376,14.504511688125,28.673691,14.413535718125Q28.636009,14.322559718125,28.581301,14.240683498125Q28.526594,14.158807278125,28.456964,14.089177248125Q28.387335,14.019547228124999,28.305458,13.964839338125Q28.223581,13.910131398125,28.132604999999998,13.872447908125Q28.041629999999998,13.834764358125,27.945051,13.815553488125Q27.848471,13.796342608125,27.75,13.796342548125Q27.558306,13.796342548125,27.380205,13.867244718125Q27.202105,13.938147008125,27.062858,14.069895268125L27.06272,14.069750188125L21.5627165,19.273608678125L16.7628493,23.815033878125L16.7665939,23.806237178125002L15.2071054,22.246748478125L12.95710665,19.996750378125L12.95696521,19.996891978125Q12.81634104,19.856267478124998,12.63260677,19.780161878125Q12.44887252,19.704057178124998,12.25,19.704057178124998Q12.151528291,19.704057178124998,12.0549487,19.723267578125Q11.95836911,19.742478378125,11.86739314,19.780161878125Q11.77641714,19.817845378125,11.69454092,19.872552878125Q11.6126647,19.927261378125,11.54303467,19.996891478125Q11.473404649999999,20.066521178125,11.41869676,20.148397478125Q11.36398882,20.230273678125002,11.32630533,20.321249978125Q11.28862178,20.412225678125,11.26941091,20.508805778125Q11.25020003,20.605385778125,11.25019997,20.703857378125Q11.25020003,20.902729978125002,11.32630527,21.086463978125Q11.40241051,21.270198378125002,11.54303455,21.410822878125L11.54289335,21.410963978125L13.7928916,23.660962078125L15.352382200000001,25.220453578125Q15.9239936,25.792063578125,16.728242899999998,25.810283578125002Q17.544528,25.828778578125,18.137410199999998,25.267817578124998L22.937278,20.726393178125L28.437281,15.522534968125L28.437143,15.522389408125001Z" fill-rule="evenodd" fill="#011813" fill-opacity="1" />
                    </g>
                  </g>
                </svg>
                <div v-else class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2" @click="answers[qi] = 1"></div>
                <svg v-if="qi === 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="40" height="40.000244140625" viewBox="0 0 40 40.000244140625" @click="answers[qi] = 2">
                  <g>
                    <rect x="0" y="0" width="40" height="40" rx="20" fill="#FFC8A7" fill-opacity="1" />
                    <g>
                      <path d="M28.437143,15.522389408125001Q28.58683,15.380761738125,28.668314,15.191486958125Q28.7498,15.002212208125,28.7498,14.796142578125Q28.749798,14.697670869125,28.730587,14.601091278125Q28.711376,14.504511688125,28.673691,14.413535718125Q28.636009,14.322559718125,28.581301,14.240683498125Q28.526594,14.158807278125,28.456964,14.089177248125Q28.387335,14.019547228124999,28.305458,13.964839338125Q28.223581,13.910131398125,28.132604999999998,13.872447908125Q28.041629999999998,13.834764358125,27.945051,13.815553488125Q27.848471,13.796342608125,27.75,13.796342548125Q27.558306,13.796342548125,27.380205,13.867244718125Q27.202105,13.938147008125,27.062858,14.069895268125L27.06272,14.069750188125L21.5627165,19.273608678125L16.7628493,23.815033878125L16.7665939,23.806237178125002L15.2071054,22.246748478125L12.95710665,19.996750378125L12.95696521,19.996891978125Q12.81634104,19.856267478124998,12.63260677,19.780161878125Q12.44887252,19.704057178124998,12.25,19.704057178124998Q12.151528291,19.704057178124998,12.0549487,19.723267578125Q11.95836911,19.742478378125,11.86739314,19.780161878125Q11.77641714,19.817845378125,11.69454092,19.872552878125Q11.6126647,19.927261378125,11.54303467,19.996891478125Q11.473404649999999,20.066521178125,11.41869676,20.148397478125Q11.36398882,20.230273678125002,11.32630533,20.321249978125Q11.28862178,20.412225678125,11.26941091,20.508805778125Q11.25020003,20.605385778125,11.25019997,20.703857378125Q11.25020003,20.902729978125002,11.32630527,21.086463978125Q11.40241051,21.270198378125002,11.54303455,21.410822878125L11.54289335,21.410963978125L13.7928916,23.660962078125L15.352382200000001,25.220453578125Q15.9239936,25.792063578125,16.728242899999998,25.810283578125002Q17.544528,25.828778578125,18.137410199999998,25.267817578124998L22.937278,20.726393178125L28.437281,15.522534968125L28.437143,15.522389408125001Z" fill-rule="evenodd" fill="#011813" fill-opacity="1" />
                    </g>
                  </g>
                </svg>
                <div v-else class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2" @click="answers[qi] = 2"></div>
                <svg v-if="qi === 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="40" height="40.000244140625" viewBox="0 0 40 40.000244140625" @click="answers[qi] = 3">
                  <g>
                    <rect x="0" y="0" width="40" height="40" rx="20" fill="#D8D8D8" fill-opacity="1" />
                    <g>
                      <path d="M28.437143,15.522389408125001Q28.58683,15.380761738125,28.668314,15.191486958125Q28.7498,15.002212208125,28.7498,14.796142578125Q28.749798,14.697670869125,28.730587,14.601091278125Q28.711376,14.504511688125,28.673691,14.413535718125Q28.636009,14.322559718125,28.581301,14.240683498125Q28.526594,14.158807278125,28.456964,14.089177248125Q28.387335,14.019547228124999,28.305458,13.964839338125Q28.223581,13.910131398125,28.132604999999998,13.872447908125Q28.041629999999998,13.834764358125,27.945051,13.815553488125Q27.848471,13.796342608125,27.75,13.796342548125Q27.558306,13.796342548125,27.380205,13.867244718125Q27.202105,13.938147008125,27.062858,14.069895268125L27.06272,14.069750188125L21.5627165,19.273608678125L16.7628493,23.815033878125L16.7665939,23.806237178125002L15.2071054,22.246748478125L12.95710665,19.996750378125L12.95696521,19.996891978125Q12.81634104,19.856267478124998,12.63260677,19.780161878125Q12.44887252,19.704057178124998,12.25,19.704057178124998Q12.151528291,19.704057178124998,12.0549487,19.723267578125Q11.95836911,19.742478378125,11.86739314,19.780161878125Q11.77641714,19.817845378125,11.69454092,19.872552878125Q11.6126647,19.927261378125,11.54303467,19.996891478125Q11.473404649999999,20.066521178125,11.41869676,20.148397478125Q11.36398882,20.230273678125002,11.32630533,20.321249978125Q11.28862178,20.412225678125,11.26941091,20.508805778125Q11.25020003,20.605385778125,11.25019997,20.703857378125Q11.25020003,20.902729978125002,11.32630527,21.086463978125Q11.40241051,21.270198378125002,11.54303455,21.410822878125L11.54289335,21.410963978125L13.7928916,23.660962078125L15.352382200000001,25.220453578125Q15.9239936,25.792063578125,16.728242899999998,25.810283578125002Q17.544528,25.828778578125,18.137410199999998,25.267817578124998L22.937278,20.726393178125L28.437281,15.522534968125L28.437143,15.522389408125001Z" fill-rule="evenodd" fill="#011813" fill-opacity="1" />
                    </g>
                  </g>
                </svg>
                <div v-else class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2" @click="answers[qi] = 3"></div>
                <svg v-if="qi === 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="40" height="40.000244140625" viewBox="0 0 40 40.000244140625" @click="answers[qi] = 4">
                  <g>
                    <rect x="0" y="0" width="40" height="40" rx="20" fill="#96E5A3" fill-opacity="1" />
                    <g>
                      <path d="M28.437143,15.522389408125001Q28.58683,15.380761738125,28.668314,15.191486958125Q28.7498,15.002212208125,28.7498,14.796142578125Q28.749798,14.697670869125,28.730587,14.601091278125Q28.711376,14.504511688125,28.673691,14.413535718125Q28.636009,14.322559718125,28.581301,14.240683498125Q28.526594,14.158807278125,28.456964,14.089177248125Q28.387335,14.019547228124999,28.305458,13.964839338125Q28.223581,13.910131398125,28.132604999999998,13.872447908125Q28.041629999999998,13.834764358125,27.945051,13.815553488125Q27.848471,13.796342608125,27.75,13.796342548125Q27.558306,13.796342548125,27.380205,13.867244718125Q27.202105,13.938147008125,27.062858,14.069895268125L27.06272,14.069750188125L21.5627165,19.273608678125L16.7628493,23.815033878125L16.7665939,23.806237178125002L15.2071054,22.246748478125L12.95710665,19.996750378125L12.95696521,19.996891978125Q12.81634104,19.856267478124998,12.63260677,19.780161878125Q12.44887252,19.704057178124998,12.25,19.704057178124998Q12.151528291,19.704057178124998,12.0549487,19.723267578125Q11.95836911,19.742478378125,11.86739314,19.780161878125Q11.77641714,19.817845378125,11.69454092,19.872552878125Q11.6126647,19.927261378125,11.54303467,19.996891478125Q11.473404649999999,20.066521178125,11.41869676,20.148397478125Q11.36398882,20.230273678125002,11.32630533,20.321249978125Q11.28862178,20.412225678125,11.26941091,20.508805778125Q11.25020003,20.605385778125,11.25019997,20.703857378125Q11.25020003,20.902729978125002,11.32630527,21.086463978125Q11.40241051,21.270198378125002,11.54303455,21.410822878125L11.54289335,21.410963978125L13.7928916,23.660962078125L15.352382200000001,25.220453578125Q15.9239936,25.792063578125,16.728242899999998,25.810283578125002Q17.544528,25.828778578125,18.137410199999998,25.267817578124998L22.937278,20.726393178125L28.437281,15.522534968125L28.437143,15.522389408125001Z" fill-rule="evenodd" fill="#011813" fill-opacity="1" />
                    </g>
                  </g>
                </svg>
                <div v-else class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2" @click="answers[qi] = 4"></div>
                <svg v-if="qi === 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="40" height="40.000244140625" viewBox="0 0 40 40.000244140625" @click="answers[qi] = 5">
                  <g>
                    <rect x="0" y="0" width="40" height="40" rx="20" fill="#5AD7A7" fill-opacity="1" />
                    <g>
                      <path d="M28.437143,15.522389408125001Q28.58683,15.380761738125,28.668314,15.191486958125Q28.7498,15.002212208125,28.7498,14.796142578125Q28.749798,14.697670869125,28.730587,14.601091278125Q28.711376,14.504511688125,28.673691,14.413535718125Q28.636009,14.322559718125,28.581301,14.240683498125Q28.526594,14.158807278125,28.456964,14.089177248125Q28.387335,14.019547228124999,28.305458,13.964839338125Q28.223581,13.910131398125,28.132604999999998,13.872447908125Q28.041629999999998,13.834764358125,27.945051,13.815553488125Q27.848471,13.796342608125,27.75,13.796342548125Q27.558306,13.796342548125,27.380205,13.867244718125Q27.202105,13.938147008125,27.062858,14.069895268125L27.06272,14.069750188125L21.5627165,19.273608678125L16.7628493,23.815033878125L16.7665939,23.806237178125002L15.2071054,22.246748478125L12.95710665,19.996750378125L12.95696521,19.996891978125Q12.81634104,19.856267478124998,12.63260677,19.780161878125Q12.44887252,19.704057178124998,12.25,19.704057178124998Q12.151528291,19.704057178124998,12.0549487,19.723267578125Q11.95836911,19.742478378125,11.86739314,19.780161878125Q11.77641714,19.817845378125,11.69454092,19.872552878125Q11.6126647,19.927261378125,11.54303467,19.996891478125Q11.473404649999999,20.066521178125,11.41869676,20.148397478125Q11.36398882,20.230273678125002,11.32630533,20.321249978125Q11.28862178,20.412225678125,11.26941091,20.508805778125Q11.25020003,20.605385778125,11.25019997,20.703857378125Q11.25020003,20.902729978125002,11.32630527,21.086463978125Q11.40241051,21.270198378125002,11.54303455,21.410822878125L11.54289335,21.410963978125L13.7928916,23.660962078125L15.352382200000001,25.220453578125Q15.9239936,25.792063578125,16.728242899999998,25.810283578125002Q17.544528,25.828778578125,18.137410199999998,25.267817578124998L22.937278,20.726393178125L28.437281,15.522534968125L28.437143,15.522389408125001Z" fill-rule="evenodd" fill="#011813" fill-opacity="1" />
                    </g>
                  </g>
                </svg>
                <div v-else class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2" @click="answers[qi] = 5"></div>
              </div>
              </div>
            </div>
        </div>

        <p class="uno-text-[#8D8E8F] uno-font-['Outfit'] uno-text-center uno-leading-[1.2] uno-mt-6">{{ $t('pages.testIntro.notice') }}</p>
      </div>

      <div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-6 uno-flex uno-justify-center">
        <UButton
          class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-flex uno-items-center uno-justify-center uno-text-center"
          :disabled="!canContinue"
        >{{ $t('pages.testIntro.cta') }}</UButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const { t } = useI18n()
const total = 20
const current = 1
const questions = [
  t('pages.testIntro.q.q1'),
  t('pages.testIntro.q.q2'),
  t('pages.testIntro.q.q3'),
  t('pages.testIntro.q.q4'),
  t('pages.testIntro.q.q5')
]
const answers = ref<(number | null)[]>(Array(questions.length).fill(null))
const answeredCount = computed(() => answers.value.filter(a => a !== null).length)
const progress = computed(() => Math.round((answeredCount.value / total) * 100))
const canContinue = computed(() => answeredCount.value === questions.length)
</script>

<style scoped></style>
