import { H as useCookie, I as useNuxtApp, D as useRuntimeConfig, E as fetchDefaults, F as useAsyncData, G as useRequestFetch } from './server.mjs';
import { ref, computed, toValue, reactive } from 'vue';
import { a1 as hash } from '../_/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { defineStore } from 'pinia';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const login = (data) => {
  return usePostFetch(`/user/signin`, data);
};
const getUserInfo = () => {
  return useGetFetch(`/user/info`);
};
const updateUserInfo = (data) => {
  return usePostFetch(`/user/info_update`, data);
};
const updatePassword = (data) => {
  return usePostFetch(`/user/pwd_update`, data);
};
const getUserTestInfo = () => {
  return useGetFetch(`/user/personal_info`);
};
const useUserStore = defineStore("user", () => {
  const userInfo = ref();
  const login2 = (data) => {
    return new Promise((resolve, reject) => {
      login(data).then(async (res) => {
        const token = useCookie("token");
        const loginRes = res.data.value;
        userInfo.value = loginRes.data;
        token.value = loginRes.data.token;
        console.log(userInfo.value, token.value);
        await fetchUserInfo();
        resolve(loginRes.data);
      }).catch((err) => {
        reject(err);
      });
    });
  };
  const fetchUserInfo = () => {
    return new Promise((resolve, reject) => {
      getUserInfo().then((res) => {
        userInfo.value = {
          ...res.data.value.data
        };
        resolve(userInfo.value);
      }).catch((err) => {
        reject(err);
      });
    });
  };
  const changePassword = (data) => {
    return updatePassword(data);
  };
  const getUserTestInfo$1 = () => {
    return getUserTestInfo();
  };
  const updateUserInfo$1 = (data) => {
    return updateUserInfo(data);
  };
  const updatePassword$1 = (data) => {
    return updatePassword(data);
  };
  const logout = () => {
    const token = useCookie("token");
    token.value = null;
    userInfo.value = void 0;
    console.log("退出登录");
  };
  return {
    userInfo,
    login: login2,
    logout,
    fetchUserInfo,
    changePassword,
    getUserTestInfo: getUserTestInfo$1,
    updateUserInfo: updateUserInfo$1,
    updatePassword: updatePassword$1
  };
}, {
  persist: {}
});
const handleResponse = (response, i18n) => {
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const code = response._data.code;
  const message = response._data.message;
  const data = response._data.data;
  response._data = {
    code,
    message,
    data
  };
};
const handleStrapiResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
};
const useBaseFetch = (url, options = {}) => {
  const nuxtApp = useNuxtApp();
  const { public: { apiBaseUrl } } = useRuntimeConfig();
  const lang = nuxtApp.$i18n.locale.value;
  const userStore = useUserStore();
  const userInfo = userStore.userInfo;
  const token = useCookie("token");
  console.log(token.value, userInfo?.token);
  const headers = {
    ...options.headers || {},
    "Accept-Language": lang,
    "Lang": lang,
    ...token.value || userInfo?.token ? { "token": `${token.value || userInfo?.token}` } : {}
  };
  console.log("headers", headers);
  const query = { ...options.query || {} };
  return useFetch(url, {
    ...options,
    baseURL: apiBaseUrl,
    headers,
    query,
    key: options.key ?? `api:${url}`,
    // transform: (res: any) => {
    //   return res
    // },
    onResponse({ response }) {
      handleResponse(response, nuxtApp.$i18n);
    }
  }, "$kxxmCqKqLN");
};
const useStrapiFetch = (url, options = {}) => {
  const nuxtApp = useNuxtApp();
  const { public: { strapiApiUrl } } = useRuntimeConfig();
  const lang = nuxtApp.$i18n.locale.value;
  const headers = { ...options?.headers || {}, "Accept-Language": lang };
  const query = { ...options?.query || {}, locale: lang };
  return useFetch(url, {
    ...options,
    baseURL: strapiApiUrl,
    headers,
    query,
    key: options?.key ?? `strapi:${url}`,
    // 自动脱壳：只返回 data 本身
    transform: (res) => {
      return res;
    },
    onResponse({ response }) {
      handleStrapiResponse(response);
    }
  }, "$EtQgCxCyvF");
};
const useGetFetch = (url, data, options) => {
  return useBaseFetch(url, {
    ...options,
    method: "GET",
    query: data
  });
};
const usePostFetch = (url, data, options) => {
  return useBaseFetch(url, {
    ...options,
    method: "POST",
    body: data
  });
};
const useStrapiGetFetch = (url, options) => {
  return useStrapiFetch(url, options);
};
const useStrapiPutFetch = (url, options) => {
  return useStrapiFetch(url, {
    ...options,
    method: "PUT"
  });
};

export { useUserStore as a, useStrapiGetFetch as b, useStrapiPutFetch as c, getUserTestInfo as g, useGetFetch as u };
//# sourceMappingURL=useApi-BWDHtmzl.mjs.map
