import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom';
import AppContextProvider from '../src/contexts/appContext';

const theme = createMuiTheme({
    typography: {
        useNextVariants : true,
        fontSize: 18,
        
    },
    palette: {
        primary: {
            main: '#90CAF9',
        },
        secondary : {
            main :'#ff4569'
        },
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <AppContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
      </AppContextProvider>
    </MuiThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();