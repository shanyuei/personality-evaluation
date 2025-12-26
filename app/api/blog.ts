import { useStrapiGetFetch, useStrapiPutFetch } from '~/composables/useApi'
import { buildStrapiQuery } from '~/utils/queryBuilder'

// 获取所有分类
export const getCategories = async () => {
  return useStrapiGetFetch('/categories/with-count')
}
// 获取所有标签
export const getAllTags = async () => {
  const str = buildStrapiQuery({
    sort: ['name:asc'],
    populate: {
      // 可以根据需要添加关联字段
    }
  })
  return useStrapiGetFetch('/tags' + str)
}
// 获取推荐文章
export const getRecommendArticles = async (categorySlug?: string | string[] | undefined) => {
  const str = buildStrapiQuery({
    categorySlug: categorySlug,
  })
  return useStrapiGetFetch('/post/top-recommended' + str)
}

// 获取最新的五条文章
export const getLatestArticles = async (categorySlug?: string | string[] | undefined) => {
  const str = buildStrapiQuery({
    categorySlug: categorySlug,
  })
  return useStrapiGetFetch('/post/news-5' + str)
}

// 获取所有文章
export const getAllArticles = async (page: number = 1, tagSlug?: string, categorySlug?: string | string[] | undefined) => {
  const str = buildStrapiQuery({
    pagination: { page, pageSize: 3 },
    tagSlug,
    categorySlug,
  })
  return useStrapiGetFetch('/post/except-top-recommended-all' + str)
}

// 根据 slug 获取文章详情
export const getArticleBySlug = async (slug: string) => {
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
  })
  return useStrapiGetFetch(`/posts` + str)
}
// 根据 slug 更新预览
export const updatePreviewBySlug = async (slug: string,) => {
  const str = buildStrapiQuery({
    slug
  })
  return useStrapiPutFetch(`/post/increment-preview` + str)
}