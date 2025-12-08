import { mergeConfigs } from '@unocss/core'
import config from './.nuxt/uno.config.mjs'
import presetWind4 from '@unocss/preset-wind4'

import { presetAttributify, presetIcons } from 'unocss'

export default mergeConfigs([config, {
  /* 1. 四线前缀：所有工具类必须以 myPage- 开头 */
  presets: [
    presetWind4({
      prefix: 'uno-',
      preflights: {
        reset: true,
      }
    }),
    presetAttributify({ prefix: 'uno-', prefixedOnly: true }),
    presetIcons({
      scale: 1,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
  ],
}])