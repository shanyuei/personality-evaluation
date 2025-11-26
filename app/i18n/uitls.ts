
// 动态采集 modules 下文件 配置 messages
export function collectMessages() {
    const messages = {}
    const files = import.meta.globEager('./modules/*.ts')
    for (const path in files) {
        const module = files[path]
        const locale = path.split('/').pop().replace('.ts', '')
        messages[locale] = module.default
    }
    return messages
}
