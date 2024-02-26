/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem'
      }
    },
    extend: {
      size: {
        18: '4.5rem'
      },
      width: {
        54: '13.5rem'
      },
      colors: {
        gray: {
          lightest: '#f5f5f5',
          lighter: '#e0e0e0',
          light: '#bdbdbd',
          DEFAULT: '#757575',
          dark: '#424242',
          darker: '#212121'
        },
        primary: {
          lighter: '#f1f3f7',
          light: '#e6f0f8',
          DEFAULT: '#3892d3',
          dark: '#013c85',
          darker: '#00132b'
        },
        secondary: {
          light: '#9fa8da',
          DEFAULT: '#3f51b5',
          dark: '#283593'
        }
      }
    }
  },
  plugins: []
}
