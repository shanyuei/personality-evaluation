/**
 * 日期格式化工具函数
 */

/**
 * 将ISO日期字符串格式化为友好的日期显示
 * @param dateString ISO日期字符串（如：2023-12-22T16:00:02.823Z）
 * @param format 格式化类型：'date'（仅日期）、'datetime'（日期时间）、'relative'（相对时间）
 * @returns 格式化后的日期字符串
 */
export const formatDate = (dateString: string | Date, format: 'date' | 'datetime' | 'relative' = 'date'): string => {
  if (!dateString) return ''

  const date = typeof dateString === 'string' ? new Date(dateString) : dateString

  // 检查日期是否有效
  if (isNaN(date.getTime())) return ''

  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  // 相对时间格式化
  if (format === 'relative') {
    if (diffInSeconds < 60) {
      return '刚刚'
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}分钟前`
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}小时前`
    } else if (diffInSeconds < 604800) {
      return `${Math.floor(diffInSeconds / 86400)}天前`
    } else if (diffInSeconds < 2592000) {
      return `${Math.floor(diffInSeconds / 604800)}周前`
    } else if (diffInSeconds < 31536000) {
      return `${Math.floor(diffInSeconds / 2592000)}个月前`
    } else {
      return `${Math.floor(diffInSeconds / 31536000)}年前`
    }
  }

  // 数字补零函数
  const padZero = (num: number): string => num.toString().padStart(2, '0')

  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  const hours = padZero(date.getHours())
  const minutes = padZero(date.getMinutes())

  if (format === 'date') {
    return `${year}-${month}-${day}`
  } else { // datetime
    return `${year}-${month}-${day} ${hours}:${minutes}`
  }
}



/**
 * 获取文章发布时间的相对显示（如：3天前）
 * @param dateString ISO日期字符串
 * @returns 相对时间字符串
 */
export const getRelativeTime = (dateString: string | Date): string => {
  return formatDate(dateString, 'relative')
}
