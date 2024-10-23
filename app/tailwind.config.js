module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'float': 'floatAnimation 4s ease-in-out infinite',
      },
      keyframes: {
        floatAnimation: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
        }
      }
    },
  },
  // ... other configurations
}
