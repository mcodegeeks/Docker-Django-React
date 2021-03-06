import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {    
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white,
      toolbar: '#03a9f4',      
      footer: '#e1f5fe',
    },
    card: {
      header: {
        background: '#b388ff',
        text: colors.common.white,
      },
    },
    // primary: {
    //    main: colors.indigo[500],
    // },
    // secondary: {
    //   main: colors.indigo[500],
    //   main: colors.blue[500],
    //   contrastText: '#fff',
    // },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      footer: colors.blueGrey[600],
    },
    list: {
      primary: '#337ab7',
      secondary: '#667b82',
    },
  },
  shadows,
  typography
});

export default theme;
