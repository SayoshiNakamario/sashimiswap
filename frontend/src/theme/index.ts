import { black, green, grey, red, white } from './colors'

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: 400,
  },
  color: {
    black,
    grey,
    green,
    primary: {
      light: grey[100],
      main: grey[500],
    },
    secondary: {
      main: green[500],
    },
    white,
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
    8: 0,
    9: 100
  },
  topBarSize: 60
}

export default theme