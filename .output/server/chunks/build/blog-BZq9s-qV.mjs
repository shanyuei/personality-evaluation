import { D as useRuntimeConfig } from './server.mjs';
import { b as useStrapiGetFetch, c as useStrapiPutFetch } from './useApi-BWDHtmzl.mjs';

const getImageUrl = (path) => {
  const { strapiUrl } = useRuntimeConfig().public;
  const baseUrl = (strapiUrl || "").replace(/\/$/, "");
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
};
const formatDate = (dateString, format = "date") => {
  if (!dateString) return "";
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;
  if (isNaN(date.getTime())) return "";
  const now = /* @__PURE__ */ new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1e3);
  if (format === "relative") {
    if (diffInSeconds < 60) {
      return "刚刚";
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}分钟前`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}小时前`;
    } else if (diffInSeconds < 604800) {
      return `${Math.floor(diffInSeconds / 86400)}天前`;
    } else if (diffInSeconds < 2592e3) {
      return `${Math.floor(diffInSeconds / 604800)}周前`;
    } else if (diffInSeconds < 31536e3) {
      return `${Math.floor(diffInSeconds / 2592e3)}个月前`;
    } else {
      return `${Math.floor(diffInSeconds / 31536e3)}年前`;
    }
  }
  const padZero = (num) => num.toString().padStart(2, "0");
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  if (format === "date") {
    return `${year}-${month}-${day}`;
  } else {
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
};
const buildStrapiQuery = (params) => {
  if (!params || typeof params !== "object" || Array.isArray(params)) {
    return "";
  }
  const result = [];
  const processObject = (obj, prefix = "") => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const newPrefix = prefix ? `${prefix}[${key}]` : key;
        if (value === null || value === void 0) {
          continue;
        } else if (typeof value === "object" && !Array.isArray(value)) {
          processObject(value, newPrefix);
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (typeof item === "object" && item !== null) {
              processObject(item, `${newPrefix}[${index}]`);
            } else {
              result.push(`${encodeURIComponent(`${newPrefix}[${index}]`)}=${encodeURIComponent(String(item))}`);
            }
          });
        } else {
          result.push(`${encodeURIComponent(newPrefix)}=${encodeURIComponent(String(value))}`);
        }
      }
    }
  };
  processObject(params);
  return result.length ? `?${result.join("&")}` : "";
};
const getCategories = async () => {
  return useStrapiGetFetch("/categories/with-count");
};
const getAllTags = async () => {
  const str = buildStrapiQuery({
    sort: ["name:asc"],
    populate: {
      // 可以根据需要添加关联字段
    }
  });
  return useStrapiGetFetch("/tags" + str);
};
const getRecommendArticles = async (categorySlug) => {
  const str = buildStrapiQuery({
    categorySlug
  });
  return useStrapiGetFetch("/post/top-recommended" + str);
};
const getLatestArticles = async (categorySlug) => {
  const str = buildStrapiQuery({
    categorySlug
  });
  return useStrapiGetFetch("/post/news-5" + str);
};
const getAllArticles = async (page = 1, tagSlug, categorySlug) => {
  const str = buildStrapiQuery({
    pagination: { page, pageSize: 9 },
    tagSlug,
    categorySlug
  });
  return useStrapiGetFetch("/post/except-top-recommended-all" + str);
};
const getArticleBySlug = async (slug) => {
  const str = buildStrapiQuery({
    filters: {
      slug: { $eq: slug },
      publishedAt: { $notNull: true }
    },
    populate: {
      cover: true,
      category: true,
      tags: true
    }
  });
  return useStrapiGetFetch(`/posts` + str);
};
const updatePreviewBySlug = async (slug) => {
  const str = buildStrapiQuery({
    slug
  });
  return useStrapiPutFetch(`/post/increment-preview` + str);
};

export { getAllTags as a, getRecommendArticles as b, getLatestArticles as c, getImageUrl as d, getAllArticles as e, formatDate as f, getCategories as g, getArticleBySlug as h, updatePreviewBySlug as u };
//# sourceMappingURL=blog-BZq9s-qV.mjs.map
