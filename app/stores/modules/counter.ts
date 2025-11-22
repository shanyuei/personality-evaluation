import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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
