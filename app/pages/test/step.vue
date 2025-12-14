<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-flex uno-flex-col uno-items-center uno-gap-4">
        <div class="uno-w-14 uno-h-14 uno-bg-gradient-to-br uno-from-[var(--color-green-2)] uno-to-[var(--color-green-1)] uno-rounded-full uno-flex uno-items-center uno-justify-center">
          <span class="uno-text-white uno-font-bold uno-text-2xl">P</span>
        </div>
        <h1 class="uno-w-[909.71px] uno-text-[#011813] uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">{{ $t('pages.testIntro.title') }}</h1>
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
