module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      fill: {
        current: 'currentColor',
      },
      backgroundColor: {},
      textColor: {
        primary: 'var(--text-primary)',
        primaryHover: 'var(--text-primary-hover)',
        secondary: 'var(--text-secondary)',
        secondaryHover: 'var(--text-secondary-hover)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    variants: {
      extend: {
        borderWidth: ['last'],
        margin: ['first', 'last', 'odd'],
        padding: ['first', 'last', 'odd'],
        opacity: ['disabled'],
        cursor: ['disabled'],
      },
      animation: ['motion-safe'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
