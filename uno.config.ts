import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  // presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    [/^bg-size-([\.\d]+)$/, ([_, num]) => ({ 'background-size': `${num}% ${num}% !important` })],
    [/^slide-enter-(\d+)$/, ([_, n]) => ({ '--enter-stage': n })],
    ['bgi', {
      'background-size': '100% 100%',
      'background-repeat': 'no-repeat',
      'box-sizing': 'border-box',
    }],
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['text-before-breathe', 'before:content-empty before:absolute before:w-full before:left-0 before:h11 before:rd-10 before:bg-[rgba(239,15,15,0.4)] before:filter-blur-10 before:animate-name-[breathe] before:animate-duration-1500 before:animate-iteration-count-infinite before:animate-direction-alternate before:animate-ease-in-out'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
