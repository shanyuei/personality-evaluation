import { useRuntimeConfig } from '#app'

// 统一的响应处理逻辑
const handleResponse = (response: any, i18n: any) => {
  if (response.status !== 200) {
    const error = new Error(response.statusText)
    throw error
  }
  const code = response._data.code
  const message = response._data.message
  const data = response._data.data
  
  if (code !== 0) {
    if (import.meta.client) {
      const toast = useToast()
      toast?.add({
        title: i18n.t('common.api.error'),
        color: 'warning',
        description: message,
      })
    }
    const error = new Error(message)
    throw error
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
    const error = new Error(response.statusText)
    throw error
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
  const localToken = import.meta.client ? localStorage.getItem('userToken') : 'pm8hwiQSYKedAS1qCmWskEm9LRZJ1oFbUmzjZLcnuZXFSjF8MLFUVj9MrH8n'
  const tokenValue = token.value || userInfo?.token || localToken || 'pm8hwiQSYKedAS1qCmWskEm9LRZJ1oFbUmzjZLcnuZXFSjF8MLFUVj9MrH8n'
  const headers = {
    ...(options.headers || {}),
    'Accept-Language': lang,
    'Lang': lang,
    token: tokenValue,
  }
  console.log('headers', headers)
  const query = { ...(options.query as any || {}) }
  
  // 默认立即执行，保持向后兼容
  const immediate = options.immediate !== false
  
  const result = useFetch<T>(url, {
    ...options,
    baseURL: apiBaseUrl,
    headers,
    key: options.key ?? `api:${url}`,
    lazy: !immediate,
    immediate,
    // 使用 ofetch 的 throwHttpErrors 选项，确保 HTTP 错误时抛出
    $fetch: globalThis.$fetch.create({
      onResponseError({ response }) {
        const message = response?._data?.message || 'Request failed'
        if (import.meta.client) {
          const toast = useToast()
          toast?.add({
            title: nuxtApp.$i18n.t('common.api.error'),
            color: 'warning',
            description: message,
          })
        }
        
        // 抛出错误，阻止导航
        const error = new Error(message)
        throw error
      }
    }),
    onResponse({ response }) {
      handleResponse(response, nuxtApp.$i18n)
    },
    onResponseError({ response }) {
      const message = response?._data?.message || 'Request failed'
      if (import.meta.client) {
        const toast = useToast()
        toast?.add({
          title: nuxtApp.$i18n.t('common.api.error'),
          color: 'warning',
          description: message,
        })
      }
      
      // 抛出错误，阻止导航
      const error = new Error(message)
      throw error
    },
  })
  
  // 如果是立即执行，检查是否有错误并在服务端阻止导航
  if (immediate && process.server && result.error.value) {
    throw result.error.value
  }
  
  return result
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
    onResponseError({ response }) {
      const message = response?._data?.message || 'Request failed'
      const error = new Error(message)
      throw error
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
