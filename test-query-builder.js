// 简单的测试文件，用于验证queryBuilder函数
import { buildStrapiQuery } from './app/utils/queryBuilder.ts'

// 测试用例1：基本用法
const params1 = {
  filters: {
    recommend: { $eq: true },
    publishedAt: { $notNull: true }
  },
  sort: ['publishedAt:desc'],
  pagination: { limit: 5 },
  populate: {
    cover: { fields: ['url'] },
    category: { fields: ['name'] },
    tags: { fields: ['name'] }
  },
  locale: 'en'
}

const result1 = buildStrapiQuery(params1)
console.log('Test 1 Result:', result1)
console.log('Expected:', '?filters[recommend][$eq]=true&filters[publishedAt][$notNull]=true&sort[0]=publishedAt:desc&pagination[limit]=5&populate[cover][fields][0]=url&populate[category][fields][0]=name&populate[tags][fields][0]=name&locale=en')
console.log('Match:', result1 === '?filters[recommend][$eq]=true&filters[publishedAt][$notNull]=true&sort[0]=publishedAt:desc&pagination[limit]=5&populate[cover][fields][0]=url&populate[category][fields][0]=name&populate[tags][fields][0]=name&locale=en')
console.log()

// 测试用例2：基本类型参数
const params2 = { limit: 10, page: 2, search: 'test' }
const result2 = buildStrapiQuery(params2)
console.log('Test 2 Result:', result2)
console.log('Expected:', '?limit=10&page=2&search=test')
console.log('Match:', result2 === '?limit=10&page=2&search=test')
console.log()

// 测试用例3：空对象
const params3 = {}
const result3 = buildStrapiQuery(params3)
console.log('Test 3 Result:', result3)
console.log('Expected:', '')
console.log('Match:', result3 === '')
console.log()

// 测试用例4：嵌套数组
const params4 = {
  sort: ['field1:asc', 'field2:desc'],
  populate: {
    images: { fields: ['url', 'alt'] }
  }
}
const result4 = buildStrapiQuery(params4)
console.log('Test 4 Result:', result4)
console.log('Expected:', '?sort[0]=field1:asc&sort[1]=field2:desc&populate[images][fields][0]=url&populate[images][fields][1]=alt')
console.log('Match:', result4 === '?sort[0]=field1:asc&sort[1]=field2:desc&populate[images][fields][0]=url&populate[images][fields][1]=alt')
