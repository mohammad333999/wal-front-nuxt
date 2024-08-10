/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.vue",
    "./components/*.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    // "./pages/index.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      kalameh: ['Inter2', 'sans-serif'],
    },
    colors: {
      'background': {
        light: '#0e1621', //'#f4f7fb',
        DEFAULT: '#0e1621',
        dark: '#0e1621',
      },
      'background2': {
        light: '#f4f7fb',
        DEFAULT: '#0e1621',
        dark: '#0e1621',
      },
      'onBackground': {
        light: '#ffffff', //#182633',
        DEFAULT: '#ffffff',
        dark: '#ffffff',
      },
      'typoPrimary': {
        light: '#182633',
        DEFAULT: '#ffffff',
        dark: '#ffffff',
      },
      'typoSecondary': {
        light: '#182633',
        DEFAULT: '#b2b5be',
        dark: '#b2b5be',
      },
      'typoTertiary': {
        light: '#182633',
        DEFAULT: '#ffffff',
        dark: '#ffffff',
      },
      'surface': {
        light: '#ccddeb',
        DEFAULT: '#182633',
        dark: '#182633',
      },
      'primary': {
        light: '#00d280',
        DEFAULT: '#00d280',
        dark: '#00d280',
      },
      'secondary': {
        light: '#1e53e5',
        DEFAULT: '#1e53e5',
        dark: '#1e53e5',
      },
      'success': {
        light: '#00d280',
        DEFAULT: '#00d280',
        dark: '#00d280',
      },
      'error': {
        light: '#f23645',
        DEFAULT: '#f23645',
        dark: '#f23645',
      },
      'warning': {
        light: '#ff5d0e',
        DEFAULT: '#ff5d0e',
        dark: '#ff5d0e',
      },
      'variant': {
        light: '#21394f',
        DEFAULT: '#21394f',
        dark: '#21394f',
      },
      'gold': {
        light: '#ff9900',
        DEFAULT: '#ff9900',
        dark: '#ff9900',
      },
      'green': {
        light: '#22ab944d',
        DEFAULT: '#22ab944d',
        dark: '#22ab944d',
      },
      'red': {
        light: '#f752604d',
        DEFAULT: '#f752604d',
        dark: '#f752604d',
      },
      'variantSecondary': {
        light: '#e8eff6',
        DEFAULT: '#2a4865',
        dark: '#2a4865',
      },
    },
  },
  plugins: [],
}


