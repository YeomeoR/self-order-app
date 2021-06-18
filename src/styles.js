import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    },
    navy: {
        background: '#003080',
    },
  red: {
    backgroundColor: '#ff2040',
    color: '#fff',
  },
  main: {
    flex: 1,
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    color: '#fff',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  green: {
    backgroundColor: 'green',
  },
  largeLogo: {
      height: 100,
      margin: '1rem',
      borderRadius: 20,
    },
  logo: {
      height: 50,
      margin: '1rem',
      borderRadius: 20,
    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: 10,
    },
    space: {
        padding: 10,
    },
    media: {
        width: 200,
    },
}));
