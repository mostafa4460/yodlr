// App component: defines color theme and routes

import {Switch, Route, Redirect} from 'react-router-dom';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Error from './pages/Error';
import './App.css';

// material ui color theme to be used in rest of the app

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#73e8ff',
      main: '#29b6f6',
      dark: '#0086c3',
      contrastText: '#eceff1',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#ffebee',
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/:id">
            <Edit />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
