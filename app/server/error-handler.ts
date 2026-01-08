import type { H3Event, EventHandlerRequest } from 'h3'
import type { NitroErrorHandler } from 'nitropack'

export default <NitroErrorHandler><unknown>function (error: { statusCode: number; statusMessage: string; message: any; stack: any }, event: H3Event<EventHandlerRequest>) {
  // 1. 记录详细日志（保留原有功能）
  console.error('[Server Error]', error)

  // 2. 获取真实状态码，默认为 500
  // H3Error 通常包含 statusCode，普通 Error 默认 500
  const statusCode = error.statusCode || 500
  const statusMessage = error.statusMessage || 'Server Error'

  // 设置响应状态码
  setResponseStatus(event, statusCode)

  // 3. 判断请求类型
  // 如果是 API 请求或明确请求 JSON，返回 JSON 格式
  const isApi = event.path.startsWith('/api') || event.node.req.headers.accept?.includes('application/json')

  if (isApi) {
    return event.node.res.end(JSON.stringify({
      statusCode,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }))
  }

  // 4. 对于页面请求 (HTML)
  // 由于覆盖了 errorHandler，Nuxt 默认的 error.vue 渲染逻辑失效
  // 我们返回一个自定义的 HTML 页面
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${statusCode} - ${statusMessage}</title>
      <style>
        body { font-family: 'Outfit', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f9fafb; color: #1f2937; }
        .container { text-align: center; padding: 2rem; }
        h1 { font-size: 3rem; margin-bottom: 1rem; color: #009D77; }
        p { font-size: 1.25rem; margin-bottom: 2rem; color: #4b5563; }
        .btn { display: inline-block; padding: 0.75rem 1.5rem; background-color: #009D77; color: white; text-decoration: none; border-radius: 9999px; transition: background-color 0.2s; }
        .btn:hover { background-color: #0AA17F; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${statusCode}</h1>
        <p>${statusCode === 404 ? "Oops! That page doesn't exist." : error.message || "Something went wrong."}</p>
        <a href="/" class="btn">Back to Home</a>
      </div>
    </body>
    </html>
  `

  event.node.res.setHeader('Content-Type', 'text/html;charset=UTF-8')
  return event.node.res.end(html)
}
