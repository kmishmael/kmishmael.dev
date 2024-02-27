
module.exports = {
  content: [
    './content/**/*.md',
    './layouts/**/*.html',
    // wherever else you use tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#172A45',
        'neon': '#64FFDA',
        'darkish': '#333333'
      }

    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'),
  ]
}
