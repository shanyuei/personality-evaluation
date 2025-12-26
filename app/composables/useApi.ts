import { useRuntimeConfig } from '#app'

// 统一的响应处理逻辑
const handleResponse = (response: any) => {
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  if (response._data?.code !== 0 && response._data?.message) {
    throw new Error(response._data.message)
  }
  if (response._data?.data) {
    response._data = response._data.data
  }
}

// 统一的 Strapi 响应处理逻辑
const handleStrapiResponse = (response: any) => {
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  if (response._data?.data) {
    response._data = response._data.data
  }
}

// 实现基础useFetch 
export const useBaseFetch = <T>(url: string, options: any = {}) => {
  const nuxtApp = useNuxtApp()
  const { public: { apiBaseUrl } } = useRuntimeConfig()
  const lang = nuxtApp.$i18n.locale.value
  const headers = { ...(options.headers || {}), 'Accept-Language': lang }
  const query = { ...(options.query as any || {}), locale: lang }
  return useFetch<T>(url, {
    ...options,
    baseURL: apiBaseUrl,
    headers,
    query,
    key: options.key ?? `api:${url}`,
    transform: (res: any) => {
      return res
    },
    onResponse({ response }) {
      handleResponse(response)
    },
  })
}

// 实现基础 $fetch (非响应式，返回 Promise)
export const $baseFetch = <T>(url: string, options: any = {}) => {
  const nuxtApp = useNuxtApp()
  const { public: { apiBaseUrl } } = useRuntimeConfig()
  const lang = nuxtApp.$i18n.locale.value
  const headers = { ...(options.headers || {}), 'Accept-Language': lang }
  const query = { ...(options.query as any || {}), locale: lang }
  return $fetch<T>(url, {
    ...options,
    baseURL: apiBaseUrl,
    headers,
    query,
    onResponse({ response }) {
      handleResponse(response)
    },
  })
}

// 实现Strapi useFetch
export const useStrapiFetch = <T>(url: string, options: any = {}) => {
  const nuxtApp = useNuxtApp()
  const { public: { strapiApiUrl } } = useRuntimeConfig()
  const lang = nuxtApp.$i18n.locale.value
  const headers = { ...(options?.headers || {}), 'Accept-Language': lang }
  const query = { ...(options?.query as any || {}), locale: lang }
  return useFetch<T>(url, {
    ...options,
    baseURL: strapiApiUrl,
    headers,
    query,
    key: options?.key ?? `strapi:${url}`,
    // 自动脱壳：只返回 data 本身
    transform: (res: any) => {
      return res
    },
    onResponse({ response }) {
      handleStrapiResponse(response)
    },
  })
}

// 实现Strapi $fetch (非响应式，返回 Promise)
export const $strapiFetch = <T>(url: string, options: any = {}) => {
  const nuxtApp = useNuxtApp()
  const { public: { strapiApiUrl } } = useRuntimeConfig()
  const lang = nuxtApp.$i18n.locale.value
  const headers = { ...(options?.headers || {}), 'Accept-Language': lang }
  const query = { ...(options?.query as any || {}), locale: lang }
  return $fetch<T>(url, {
    ...options,
    baseURL: strapiApiUrl,
    headers,
    query,
    onResponse({ response }) {
      handleStrapiResponse(response)
    },
  })
}

// 基础 UseFetch 组合式函数
export const useGetFetch = <T = any>(url: string, options?: any) => {
  return useBaseFetch<T>(url, options)
}

// Strapi GET UseFetch 组合式函数
export const useStrapiGetFetch = <T = any>(url: string, options?: any) => {
  return useStrapiFetch<T>(url, options)
}

// Strapi PUT UseFetch 组合式函数
export const useStrapiPutFetch = <T = any>(url: string, options?: any) => {
  return useStrapiFetch<T>(url, {
    ...options,
    method: 'PUT',
  })
}
