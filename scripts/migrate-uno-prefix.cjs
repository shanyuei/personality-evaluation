const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const TARGET_DIR = path.join(ROOT, 'app')
const PREFIX = 'uno-'

function transformClassValue(classValue) {
  return classValue
    .split(/\s+/)
    .filter(Boolean)
    .map(token => {
      if (/(^|:)uno-/.test(token)) return token
      if (/(^|:)page-/.test(token)) return token.replace(/(^|:)page-/g, `$1${PREFIX}`)
      const parts = token.split(':')
      const base = parts.pop()
      if (!base) return token
      let lead = ''
      let tail = base
      while (tail && (tail[0] === '-' || tail[0] === '!')) {
        lead += tail[0]
        tail = tail.slice(1)
      }
      const prefixedBase = lead ? `${lead}${PREFIX}${tail}` : `${PREFIX}${tail}`
      return parts.length ? `${parts.join(':')}:${prefixedBase}` : prefixedBase
    })
    .join(' ')
}

function transformAttributifyAttributes(segment) {
  const isHtmlAttr = (attr) => /^(class|id|style|src|alt|width|height|to|href|object-fit|orientation|items|ui|label|viewBox|points|fill|stroke|d|stroke-linecap|stroke-linejoin|stroke-width|xmlns|role|data-[^\s>]+|aria-[^\s>]+|value-attribute|option-attribute)$/i.test(attr)
  const isVueDir = (attr) => /^(v-|:|@|#)/.test(attr)

  function transformTag(tag) {
    let out = ''
    let i = 0
    let inSingle = false
    let inDouble = false
    out += tag[i++]
    while (i < tag.length && /[a-zA-Z0-9_-]/.test(tag[i])) out += tag[i++]
    while (i < tag.length) {
      const ch = tag[i]
      out += ch
      if (ch === "'" && !inDouble) inSingle = !inSingle
      else if (ch === '"' && !inSingle) inDouble = !inDouble
      else if (!inSingle && !inDouble && ch === ' ') {
        let j = i + 1
        let name = ''
        while (j < tag.length) {
          const cj = tag[j]
          if (cj === ' ' || cj === '>' || cj === '=') break
          name += cj
          j++
        }
        if (name) {
          let nextName = name
          if (/^page-/.test(nextName)) nextName = nextName.replace(/^page-/, PREFIX)
          if (!isHtmlAttr(nextName) && !isVueDir(nextName) && !nextName.startsWith(PREFIX)) {
            out += PREFIX
          }
          out += nextName
          i = j - 1
        }
      }
      i++
    }
    return out
  }

  segment = segment.replace(/<([a-zA-Z][^\s>/]*)([^>]*)>/g, (m) => transformTag(m))
  segment = segment.replace(/\b(?:page|uno)-v-/g, 'v-')
  segment = segment.replace(/\s(?:page|uno)-(?![a-zA-Z0-9_-])/g, ' ')
  return segment
}

function transformUiPropStrings(segment) {
  segment = segment.replace(/(:ui\s*=\s*)(["'])([\s\S]*?)(\2)/g, (m, attr, quote, objStr, endQuote) => {
    const rewritten = objStr.replace(/(["'])([^"']+?)(\1)/g, (m2, q, inner, qEnd) => {
      const next = inner
        .split(/\s+/)
        .filter(Boolean)
        .map(tok => tok.replace(/(^|:|!|-)(uno-)/g, '$1'))
        .join(' ')
      return q + next + qEnd
    })
    return attr + quote + rewritten + endQuote
  })
  segment = segment.replace(/(:img-attrs\s*=\s*)(["'])([\s\S]*?)(\2)/g, (m, attr, quote, objStr, endQuote) => {
    const rewritten = objStr.replace(/(["'])([^"']+?)(\1)/g, (m2, q, inner, qEnd) => {
      const next = transformClassValue(inner)
      return q + next + qEnd
    })
    return attr + quote + rewritten + endQuote
  })
  return segment
}

function processVueFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  content = content.replace(/class="([^"]*?)"/g, (m, val) => `class="${transformClassValue(val)}"`)
  content = content.replace(/class='([^']*?)'/g, (m, val) => `class='${transformClassValue(val)}'`)

  content = content.replace(/<template>[\s\S]*?<\/template>/g, (tpl) => {
    let next = transformAttributifyAttributes(tpl)
    next = transformUiPropStrings(next)
    next = next.replace(/v-for=("|')(.*?)(\b(?:page|uno)-in\b)(.*?)(\1)/g, (m, q, pre, _in, post, q2) => `v-for=${q}${pre} in ${post}${q2}`)
    next = next.replace(/\b(?:page|uno)-(type|placeholder|href|src|alt|width|height|viewBox|stroke-linecap|stroke-linejoin|stroke-width|prefix|variant)\b/g, (m, name) => name)
    return next
  })

  fs.writeFileSync(filePath, content, 'utf8')
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.isFile() && p.endsWith('.vue')) {
      processVueFile(p)
      console.log('Migrated:', path.relative(ROOT, p))
    }
  }
}

console.log('Starting uno- prefix migration for .vue files under app/...')
walk(TARGET_DIR)
console.log('Migration completed.')
