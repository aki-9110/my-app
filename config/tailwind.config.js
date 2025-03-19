const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif JP', 'sans-serif'],
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
      },
      color: {
        dullGold: '#D4B886', //見出し(くすみゴールド)
        goldBeige: '#EED9B6', //ボタン・リンクのホバー(ゴールドベージュ)
        grayBlue: '#3A4155', //カード背景(グレーブルー)
        darkSlateBlue: '#1E2A38', //ヘッダー(ダークスレートブルー)
        darkNavy: '#1B1F3B', //背景(ダークネイビー)
        lightGray: '#E0E0E0', //文字(ライトグレー)
        darkBlue: '#252A3A', //本詳細のカード背景(ダークブルー)
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
