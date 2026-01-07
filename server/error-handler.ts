export default defineNitroErrorHandler((error, event) => {
  console.error('[Server Error]', error)
  setResponseStatus(event, 500)
  return {
    statusCode: 500,
    stack: error.stack   // 生产也返回堆栈，方便调试
  }
})