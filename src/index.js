import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import App from './App';
//Redux Store
import { createStore } from "redux";
import { Provider } from "react-redux";
//Generating Custom Theme 
import { theme } from "./utils/ThemeBreakpoints";
import { ThemeProvider } from '@mui/material/styles';
//Redux inital State
import { initialState } from "./Redux/initialState";
import { reducer } from "./Redux/reducers";
//checking the Device size 
import CheckScreenType from './utils/CheckScreenType';
//Intialization the i18n library
import i18nIntialization from "./i18n";
//making the redux store
const store = createStore(reducer, initialState);
//Checking the mobile Screen
/*Intialialization the value of language*/
i18nIntialization(store.getState());
// Create a variable to store the previous state
let prevState = store.getState();
// Reinitialize i18n whenever the language changes
store.subscribe(() => {
  const state = store.getState();
  const previousLanguage = prevState.currentLanguage;
  prevState = state;
  previousLanguage !== state.currentLanguage && i18nIntialization(state);

});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CheckScreenType />
      <App />
    </ThemeProvider>
  </Provider>

);
