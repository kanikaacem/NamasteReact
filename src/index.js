import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//redux 
import {createStore} from "redux";
import {Provider} from "react-redux";
const initialState = {
  auth : false,
};
const reducer = (state, action) =>{
  switch(action.type){
    case "LOGIN":
      return {...initialState, auth: true}
    case "LOGOUT":
      return {...initialState, auth: false}
    default:
      return state;
  }
}
//making the redux store
const store = createStore(reducer,initialState);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//links used
//https://www.makeuseof.com/create-protected-route-in-react/
//https://www.youtube.com/watch?v=Ul3y1LXxzdU
//https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
//https://dev.to/olumidesamuel_/implementing-protected-route-and-authentication-in-react-js-3cl4
//https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/
//https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
//https://www.naukri.com/nlogin/login

