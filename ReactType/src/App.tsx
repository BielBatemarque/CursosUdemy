import { Layout } from './components/Layout/index';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
