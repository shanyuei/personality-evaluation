import { useRuntimeConfig } from '#app'

// 统一的响应处理逻辑
const handleResponse = (response: any, i18n: any) => {
  let toast = null;
  if (import.meta.client) {
    toast = useToast()
  }
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  const code = response._data.code;
  const message = response._data.message;
  const data = response._data.data;
  if (code !== 0 && toast) {
    toast?.add({
      title: i18n.t('common.api.error'),
      color: 'warning',
      description: message,
    })
    throw new Error(message)
  }
  response._data = {
    code: code,
    message: message,
    data: data,
  }
}

// 统一的 Strapi 响应处理逻辑
const handleStrapiResponse = (response: any) => {
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  // if (response._data?.data) {
  //   response._data = response._data.data
  // }
}

// 实现基础useFetch 
export const useBaseFetch = <T>(url: string, options: any = {}) => {
  const nuxtApp = useNuxtApp()
  const { public: { apiBaseUrl } } = useRuntimeConfig()
  const lang = nuxtApp.$i18n.locale.value
  const userStore = useUserStore()
  const userInfo = userStore.userInfo
  const token = useCookie('token')
  console.log(token.value, userInfo?.token)
  const headers = {
    ...(options.headers || {}),
    'Accept-Language': lang,
    'Lang': lang,
    ...((token.value || userInfo?.token) ? { 'token': `${token.value || userInfo?.token}` } : {})
  }
  console.log('headers',headers)
  const query = { ...(options.query as any || {}) }
  return useFetch<T>(url, {
    ...options,
    baseURL: apiBaseUrl,
    headers,
    query,
    key: options.key ?? `api:${url}`,
    // transform: (res: any) => {
    //   return res
    // },
    onResponse({ response }) {
      handleResponse(response, nuxtApp.$i18n)
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



// 基础 UseFetch 组合式函数
export const useGetFetch = <T = any>(url: string, data?: { query: { submissionId: string | number } } | undefined, options?: any) => {
  return useBaseFetch<T>(url, {
    ...options,
    method: 'GET',
    query: data,
  })
}
export const usePostFetch = <T = any>(url: string, data?: any, options?: any) => {
  return useBaseFetch<T>(url, {
    ...options,
    method: 'POST',
    body: data,
  })
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



