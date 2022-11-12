import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//redux 
import {createStore} from "redux";
import {Provider} from "react-redux";
const initialState = {
  isLoggedIn : localStorage.getItem("isLoggedIn") == null ? false : localStorage.getItem("isLoggedIn"),
  categoryActive : {
    "id" : 1,
    "title" : "Mobile Applications"
  },
  showProfile : false,
};
const reducer = (state, action) =>{
  switch(action.type){
    case "LOGIN":
      let user = action.payload;
      localStorage.setItem('isLoggedIn',true);
      localStorage.setItem('user',user);
      return {...initialState, isLoggedIn: localStorage.getItem("isLoggedIn")};

    case "LOGOUT":
      localStorage.setItem("user","")
      localStorage.setItem("isLoggedIn", false);
      return {...initialState, isLoggedIn: localStorage.getItem("isLoggedIn")};

    case "SHOW_HIDE_PROFILE":
       return {...initialState,isLoggedIn: localStorage.getItem("isLoggedIn"),showProfile: ! state.showProfile}

    case "ACTIVE_CATEGORY":
      let {id ,title} = action.payload;
      return {...initialState,isLoggedIn: localStorage.getItem("isLoggedIn"),categoryActive:{'id': id, 'title' : title}}

    
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
//https://www.tutsmake.com/react-multi-select-dropdown-using-react-select-example/
//https://www.tutsmake.com/react-multi-select-dropdown-using-react-select-example/
//https://www.bezkoder.com/react-hook-form-material-ui-validation/
//https://www.codespeedy.com/link-in-react-js/#:~:text=Normally%2C%20the%20anchor%20tag%20or%20%3Ca%3E%3C%2Fa%3E%20performs%20the,will%20only%20update%20the%20components%20that%20need%20re-rendering.
//https://dev.to/muratcanyuksel/code-list-items-with-show-moreless-functionality-in-react-22k0#:~:text=%3Cbutton%20className%3D%22btn%22%20onClick%3D%7B%28%29%20%3D%3E%20setReadMore%28%21readMore%29%7D%3E%20%7BreadMore%20%3F%20%22show,is%20true%2C%20and%20%22read%20more%22%20if%20it%27s%20false.
//https://dzone.com/articles/login-with-google-using-reactjs
//https://www.freakyjolly.com/google-signin-login-button-in-react-js-example-using-react-google_login-package/
//npm install react-google-login --force
//https://www.npmjs.com/package/@react-oauth/google


// let fetchRes = fetch(
      //   "https://jsonplaceholder.typicode.com/todos/1");
      //           // fetchRes is the promise to resolve
      //           // it by using.then() method
      //           fetchRes.then(res =>
      //               res.json()).then(d => {
      //                   console.log(d)
      //               })
      // localStorage.setItem("authenticated", true);
    
      //   fetch("http://192.168.1.9:8000/api/users/login", {
      //       // Adding method type
      //       method: "POST",
      //       // Adding body or contents to send
      //       headers: {
      //         'Access-Control-Allow-Origin': '*',
      //         'Content-Type': 'application/json; charset=UTF-8'
      //       },
      //       body: JSON.stringify({
      //         email:"vikalbaisoya43@gmail.com",
      //         password:"ndjfsdjfs"
      //     }) 
      //       // body: JSON.stringify({
      //       //   email:email,
      //       //   password:password,
          
      //       // }),       
      //   })
      // // Converting to JSON
      // .then(response => response.json())
      // // Displaying results to console
      // .then(json => {
      //   return JSON.stringify(json);
      //  }).then(user => {
      //   localStorage.setItem('auth',true);
      //   localStorage.setItem('user',user);
      //   console.log(localStorage.getItem("auth"));
      //   return {...initialState, auth: localStorage.getItem("auth")};

      //  })
      //console.log(action.payload);
      
      //console.log(localStorage.getItem("authenticated"));
      //window.location.href="/";
      //localStorage.setItem("user",JSON.stringify(json));