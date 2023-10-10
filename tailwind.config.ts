import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens : {
        'xs': '400px',
        'mid': '660px',
        'clg': '1203px',
        'spc': '930px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'red': {
        100: '#FDECE3',
        200: '#FCD6C8',
        300: '#F8B8AB',
        400: '#F19C94',
        500: '#E97171',
        600: '#C8525C',
        700: '#A7384C',
        800: '#87243D',
        900: '#6F1534',
      },
      'green-dark': {
        100: '#FBF4D6',
        200: '#F7E8AE',
        300: '#E9D081',
        400: '#D4B35D',
        500: '#B88E2F',
        600: '#9E7422',
        700: '#845C17',
        800: '#6A450E',
        900: '#583609',
      },
      'green-light': {
        100: '#D5FBE8',
        200: '#ACF8D8',
        300: '#80ECC8',
        400: '#5DD9BC',
        500: '#2EC1AC',
        600: '#21A59F',
        700: '#17858A',
        800: '#0E626F',
        900: '#08495C',
      },
      'black': {
        100: '#F5F5F5',
        200: '#EBEBEB',
        300: '#C3C3C3',
        400: '#888888',
        500: '#3A3A3A',
        600: '#312A2B',
        700: '#291D1F',
        800: '#211216',
        900: '#1B0B10',
      },
      'gray-dark': {
        100: '#F9F9F9',
        200: '#F3F3F3',
        300: '#DBDBDB',
        400: '#B8B8B8',
        500: '#898989',
        600: '#756465',
        700: '#62454A',
        800: '#4F2B34',
        900: '#411A27',
      },
      'gray-light': {
        100: '#FBFBFB',
        200: '#F7F7F7',
        300: '#E7E7E7',
        400: '#CFCFCF',
        500: '#B0B0B0',
        600: '#978082',
        700: '#7E585F',
        800: '#663844',
        900: '#542133',
      },
      'gray-lighter': {
        100: '#FDFEFE',
        200: '#FCFDFE',
        300: '#FAFBFC',
        400: '#F7F8FA',
        500: '#F4F5F7',
        600: '#B2BCD4',
        700: '#7A89B1',
        800: '#4D5C8F',
        900: '#2E3C76',
      },
      'yellow-light': {
        100: '#FEFEFD',
        200: '#FEFDFB',
        300: '#FEFCF8',
        400: '#FDFAF6',
        500: '#FCF8F3',
        600: '#D8C5B1',
        700: '#B5957A',
        800: '#926A4D',
        900: '#784A2E',
      },
      'yellow-dark': {
        100: '#FEFDFB',
        200: '#FEFCF7',
        300: '#FDFAF3',
        400: '#FBF7EF',
        500: '#FAF3EA',
        600: '#D7C1AB',
        700: '#B39375',
        800: '#90684A',
        900: '#77492C',
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  }
}
export default config
