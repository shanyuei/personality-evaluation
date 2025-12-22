import { useStrapiGet } from '~/composables/useAlova'
import { buildStrapiQuery } from '~/utils/queryBuilder'

// 获取所有分类
export const getCategories = async () => {
  return useStrapiGet('/categories/with-count')
}
// 获取 top5 标签
export const getTop5Tags = async () => {
  return useStrapiGet('/tags/top-5')
}
// 获取推荐文章
export const getRecommendArticles = async () => {
  const str = buildStrapiQuery({
    filters: {
      recommend: { $eq: true },
      publishedAt: { $notNull: true }
    },
    sort: ['publishedAt:desc'],
    pagination: { limit: 5 },
    populate: {
      cover: true,
      category: true,
      tags: {
        fields: ['name', 'documentId', 'slug'],

      }
    }
  })
  return useStrapiGet('/posts' + str)
}
// 获取所有文章
export const getAllArticles = async (page: number = 1) => {
  const str = buildStrapiQuery({
    pagination: { page, pageSize: 20 },

  })
  return useStrapiGet('/post/except-top-recommended-all' + str)
}
// 预览前五
export const getPreviewArticles = async () => {

  return useStrapiGet('/post/top-preview-count')
}
