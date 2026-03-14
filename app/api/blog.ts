import { useStrapiGetFetch, useStrapiPutFetch } from '~/composables/useApi'
import { buildStrapiQuery } from '~/utils/queryBuilder'

/**
 * 获取所有分类（Strapi）
 * - Method: GET
 * - Path: /categories/with-count
 */
export const getCategories = async () => {
  return useStrapiGetFetch('/categories/with-count')
}
/**
 * 获取所有标签（Strapi）
 * - Method: GET
 * - Path: /tags
 * - Query: sort/populate 等由 buildStrapiQuery 生成
 */
export const getAllTags = async () => {
  const str = buildStrapiQuery({
    sort: ['name:asc'],
    populate: {
      // 可以根据需要添加关联字段
    }
  })
  return useStrapiGetFetch('/tags' + str)
}
/**
 * 获取推荐文章（Strapi）
 * - Method: GET
 * - Path: /post/top-recommended
 * - Query: categorySlug?
 */
export const getRecommendArticles = async (categorySlug?: string | string[] | undefined) => {
  const str = buildStrapiQuery({
    categorySlug: categorySlug,
  })
  return useStrapiGetFetch('/post/top-recommended' + str)
}

/**
 * 获取最新的五条文章（Strapi）
 * - Method: GET
 * - Path: /post/news-5
 * - Query: categorySlug?
 */
export const getLatestArticles = async (categorySlug?: string | string[] | undefined) => {
  const str = buildStrapiQuery({
    categorySlug: categorySlug,
  })
  return useStrapiGetFetch('/post/news-5' + str)
}

/**
 * 获取文章列表（Strapi）
 * - Method: GET
 * - Path: /post/except-top-recommended-all
 * - Query: pagination/tagSlug/categorySlug
 */
export const getAllArticles = async (page: number = 1, tagSlug?: string, categorySlug?: string | string[] | undefined) => {
  const str = buildStrapiQuery({
    pagination: { page, pageSize: 9 },
    tagSlug,
    categorySlug,
  })
  return useStrapiGetFetch('/post/except-top-recommended-all' + str)
}

/**
 * 根据 slug 获取文章详情（Strapi）
 * - Method: GET
 * - Path: /posts
 * - Query: filters/populate 由 buildStrapiQuery 生成
 */
export const getArticleBySlug = async (slug?: string) => {
  const str = buildStrapiQuery({
    filters: {
      slug: { $eq: slug },
      publishedAt: { $notNull: true }
    },
    populate: {
      cover: true,
      category: true,
      tags: true,
      updatedBy: true
    }
  })
  return useStrapiGetFetch(`/posts` + str)
}
/**
 * 根据 slug 更新预览量（Strapi）
 * - Method: PUT
 * - Path: /post/increment-preview
 * - Query: slug
 */
export const updatePreviewBySlug = async (slug: string,) => {
  const str = buildStrapiQuery({
    slug
  })
  return useStrapiPutFetch(`/post/increment-preview` + str)
}
