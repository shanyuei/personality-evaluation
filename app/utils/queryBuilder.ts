/**
 * 将对象形式的参数转换为Strapi API的查询字符串格式
 * @param params 对象形式的参数
 * @returns 格式化后的查询字符串，包含开头的问号
 */
export const buildStrapiQuery = (params: Record<string, any>): string => {
  if (!params || typeof params !== 'object' || Array.isArray(params)) {
    return ''
  }

  const result: string[] = []

  /**
   * 递归处理参数并生成查询字符串部分
   * @param obj 参数对象
   * @param prefix 前缀
   */
  const processObject = (obj: Record<string, any>, prefix: string = ''): void => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key]
        const newPrefix = prefix ? `${prefix}[${key}]` : key

        if (value === null || value === undefined) {
          // 跳过null和undefined值
          continue
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          // 递归处理嵌套对象
          processObject(value, newPrefix)
        } else if (Array.isArray(value)) {
          // 处理数组
          value.forEach((item, index) => {
            if (typeof item === 'object' && item !== null) {
              processObject(item, `${newPrefix}[${index}]`)
            } else {
              result.push(`${encodeURIComponent(`${newPrefix}[${index}]`)}=${encodeURIComponent(String(item))}`)
            }
          })
        } else {
          // 处理基本类型
          result.push(`${encodeURIComponent(newPrefix)}=${encodeURIComponent(String(value))}`)
        }
      }
    }
  }

  processObject(params)
  return result.length ? `?${result.join('&')}` : ''
}

/**
 * 示例用法：
 * const params = {
 *   filters: {
 *     recommend: { $eq: true },
 *     publishedAt: { $notNull: true }
 *   },
 *   sort: ['publishedAt:desc'],
 *   pagination: { limit: 5 },
 *   populate: {
 *     cover: { fields: ['url'] },
 *     category: { fields: ['name'] },
 *     tags: { fields: ['name'] }
 *   },
 *   locale: 'en'
 * }
 * 
 * const queryString = buildStrapiQuery(params)
 * // 输出：?filters[recommend][$eq]=true&filters[publishedAt][$notNull]=true&sort[0]=publishedAt:desc&pagination[limit]=5&populate[cover][fields][0]=url&populate[category][fields][0]=name&populate[tags][fields][0]=name&locale=en
 */
