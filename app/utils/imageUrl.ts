/**
 * 获取图片URL的组合式函数
 * @returns 图片URL构建函数
 */
export const useImageUrl = () => {
  const { strapiUrl } = useRuntimeConfig().public
  const baseUrl = (strapiUrl as string || '').replace(/\/$/, '')

  /**
   * 将图片相对路径转换为完整的图片URL
   * @param path 图片相对路径
   * @returns 完整的图片URL
   */
  const getImageUrl = (path: string): string => {
    if (!path) return ''
    
    // 如果路径已经是完整的URL，直接返回
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path
    }
    
    // 确保路径以/开头
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    
    return `${baseUrl}${normalizedPath}`
  }

  return { getImageUrl }
}

// 为了向后兼容，导出一个默认的getImageUrl函数
// 注意：这个函数只能在组件或组合式函数中使用
export const getImageUrl = (path: string): string => {
  console.log('path', path)
  const { strapiUrl } = useRuntimeConfig().public
  const baseUrl = (strapiUrl as string || '').replace(/\/$/, '')
  
  if (!path) return ''
  
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  console.log('normalizedPath', `${baseUrl}${normalizedPath}`)
  return `${baseUrl}${normalizedPath}`
}

