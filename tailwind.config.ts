import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          1: '#FFFFFF',
          2: '#94979A',
          3: '#393D41',
          4: '#2C2F33',
          5: '#222528',
        },
        primary: {
          1: '#F4CCC8',
          2: '#EBA59E',
          3: '#E27D73',
          4: '#DA584B',
        },
        secondary: {
          1: '#C8E1BC',
          2: '#AAD199',
          3: '#8DC275',
          4: '#70B252',
        },
        tertiary: {
          1: '#F9EED7',
          2: '#F2DAAB',
          3: '#EBC77F',
          4: '#E5B454',
        },
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '5.5rem', letterSpacing: '0.0625rem' }],
        'display-l': ['3.5rem', { lineHeight: '4.5rem', letterSpacing: '0.0625rem' }],
        'display-m': ['3rem', { lineHeight: '3.5rem', letterSpacing: '0.0625rem' }],
        'display-s': ['2rem', { lineHeight: '3rem', letterSpacing: '0.0625rem' }],
        'display-xs': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.0625rem' }],
        'body-xl': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0.04688rem' }],
        'body-l': ['1.125rem', { lineHeight: '2rem', letterSpacing: '0.04688rem' }],
        'body-m': ['0.9375rem', { lineHeight: '1.5rem', letterSpacing: '0.04688rem' }],
        'body-s': ['0.8125rem', { lineHeight: '1.25rem', letterSpacing: '0.04688rem' }],
      },
    },
  },
  plugins: [],
};
export default config;
