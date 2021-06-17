import {
  ThemeProvider,
  CssBaseline,
  Container,
  Paper,
  createMuiTheme,
} from '@material-ui/core';
import HomeScreen from './screen/HomeScreen';

const theme = createMuiTheme({
  typography: {
    h1: { fontWeight: 'bold' },
    h2: { fontSize: '2rem', color: 'black' },
    h3: { fontSize: '1.8rem', fontWeight: 'bold', color: 'white' },
  },
  palette: {
    primary: { main: '#ff1744' },
    secondary: { main: '#118e16', contrastText: '#fff' },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper>
          <HomeScreen />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
