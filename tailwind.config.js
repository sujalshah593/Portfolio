// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        'rotate-border': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'rotate-border': 'rotate-border 2s linear infinite',
      },
    },
  },
};
