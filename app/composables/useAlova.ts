import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import { useRuntimeConfig } from '#app'

// 单例实例缓存
let baseAlovaInstance: ReturnType<typeof createAlova> | null = null
let strapiAlovaInstance: ReturnType<typeof createAlova> | null = null

const createAlovaInstance = ({
  baseURL = '',
  alovaType = 'base',
}) => {
  const nuxtApp = useNuxtApp()
  return createAlova({
    statesHook: VueHook,
    baseURL,
    requestAdapter: axiosRequestAdapter(),
    beforeRequest(method) {
      // nuxtApp.$i18n
      const lang = nuxtApp.$i18n.locale.value
      method.config.headers['Accept-Language'] = lang
      // 根据URL是否已有查询参数决定使用 ? 还是 &
      const separator = method.url.includes('?') ? '&' : '?'
      method.url += `${separator}locale=${lang}`
      // 可以在这里添加请求前的配置
    },
    responded: {
      onSuccess: async (response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText)
        }
        if (alovaType === 'strapi') {
          return response.data
        }
        return response
      },
      onError: (error) => {
        console.error('Request error:', error)
        throw error
      }
    }
  })
}

// 获取基础 Alova 实例的组合式函数
export const useAlova = () => {
  if (!baseAlovaInstance) {
    const { apiBaseUrl } = useRuntimeConfig().public
    baseAlovaInstance = createAlovaInstance({
      baseURL: apiBaseUrl as string,
      alovaType: 'base',
    })
  }
  return baseAlovaInstance
}
// 获取 Strapi Alova 实例的组合式函数
export const useStrapiAlova = () => {
  if (!strapiAlovaInstance) {
    const { strapiApiUrl } = useRuntimeConfig().public
    strapiAlovaInstance = createAlovaInstance({
      baseURL: strapiApiUrl as string,
      alovaType: 'strapi',
    })
  }
  return strapiAlovaInstance
}
// 实现基础useFetch 
export const useBaseFetch = <T>(url: string, options: any) => {
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
  })
}
// 实现Strapi useFetch
export const useStrapiFetch = <T>(url: string, options: any) => {
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
    // ③ 自动脱壳：只返回 data 本身
    transform: (res: any) => {
      return res
    },
    onResponse({ response }) {
      // if (response.status !== 200) {
      //   throw new Error(response.statusText)
      // }
    },
  })
}

// 基础 GET 请求组合式函数
export const useGet = <T = any>(url: string) => {
  const alova = useAlova()
  return alova.Get<T>(url)
}

// Strapi GET 请求组合式函数
export const useStrapiGet = <T = any>(url: string) => {
  const alova = useStrapiAlova()
  return alova.Get<T>(url)
}
//  Strapi GET UseFetch 组合式函数
export const useStrapiGetFetch = <T = any>(url: string, options?: any) => {
  return useStrapiFetch<T>(url, options)
}

// 基础 POST 请求组合式函数
export const usePost = <T = any, D = any>(url: string, data?: D) => {
  const alova = useAlova()
  return alova.Post<T>(url, data)
}

// Strapi POST 请求组合式函数
export const useStrapiPost = <T = any, D = any>(url: string, data?: D) => {
  const alova = useStrapiAlova()
  return alova.Post<T>(url, data)
}

// 基础 PUT 请求组合式函数
export const usePut = <T = any, D = any>(url: string, data?: D) => {
  const alova = useAlova()
  return alova.Put<T>(url, data)
}

// Strapi PUT 请求组合式函数
export const useStrapiPut = <T = any, D = any>(url: string, data?: D) => {
  const alova = useStrapiAlova()
  return alova.Put<T>(url, data)
}
export const useStrapiPutFetch = <T = any>(url: string, options?: any) => {
  return useStrapiFetch<T>(url, {
    ...options,
    method: 'PUT',
  })
}
// 基础 DELETE 请求组合式函数
export const useDelete = <T = any>(url: string) => {
  const alova = useAlova()
  return alova.Delete<T>(url)
}

// Strapi DELETE 请求组合式函数
export const useStrapiDelete = <T = any>(url: string) => {
  const alova = useStrapiAlova()
  return alova.Delete<T>(url)
}
