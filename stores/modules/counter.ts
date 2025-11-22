import { defineStore } from 'pinia'

// Define a store using the composition API approach
export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const title = ref('Pinia Counter Example')

  // Getters
  const doubleCount = computed(() => count.value * 2)
  const titleWithCount = computed(() => `${title.value}: ${count.value}`)

  // Actions
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  function setTitle(newTitle: string) {
    title.value = newTitle
  }

  return {
    // State
    count,
    title,
    // Getters
    doubleCount,
    titleWithCount,
    // Actions
    increment,
    decrement,
    reset,
    setTitle
  }
})

// Optional: If you prefer the Options API approach, here's an alternative example
// export const useCounterOptionsStore = defineStore('counterOptions', {
//   state: () => ({
//     count: 0,
//     title: 'Pinia Counter Options API'
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//     titleWithCount: (state) => `${state.title}: ${state.count}`
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     },
//     reset() {
//       this.count = 0
//     },
//     setTitle(newTitle) {
//       this.title = newTitle
//     }
//   }
// })