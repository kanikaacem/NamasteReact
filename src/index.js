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
  api_url: 'http://192.168.1.6:8000',
  // api_url : 'http://192.168.1.32:8000',
  // api_url: 'http://192.168.1.16:8000',
  showProfile : false,
  EmployeeMenuSelected : "dashboard",
  CandidateMenuSelected : "dashboard",
  activeJob : ''
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

    // case "ACTIVE_CATEGORY":
    //   let {id ,title} = action.payload;
    //   return {...initialState,isLoggedIn: localStorage.getItem("isLoggedIn"),categoryActive:{'id': id, 'title' : title}}

    case "CHANGE_EMPLOYEE_MENU" :
      let selected_menu= action.payload;
      return {...initialState,isLoggedIn: localStorage.getItem("isLoggedIn"),EmployeeMenuSelected:selected_menu}
    
    case "CHANGE_CANDIDATE_MENU":
      let candidate_selected_menu = action.payload;
      return {...initialState , isLoggedIn: localStorage.getItem("isLoggedIn"),CandidateMenuSelected:candidate_selected_menu}
    
    case "JOB_DESCRIPTION":
      let job_id = action.payload;
      return {...initialState, isLoggedIn:localStorage.getItem("isLoggedIn"),activeJob:job_id}
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

//https://www.npmjs.com/package/react-select
//https://www.albertgao.xyz/2018/12/15/how-to-add-official-google-sign-in-to-your-react-application/
//https://www.npmjs.com/package/reactjs-social-login
//https://www.npmjs.com/package/react-social-login-buttons
//https://stackoverflow.com/questions/53191753/get-react-select-selected-option-when-using-multi-dropdown
//https://www.folkstalk.com/2022/09/how-to-show-base64-image-in-react-with-code-examples-2.html
//https://www.npmjs.com/package/react-file-base64

//https://medium.com/nerd-for-tech/how-to-store-an-image-to-a-database-with-react-using-base-64-9d53147f6c4f
//https://formik.org/docs/overview

//https://www.npmjs.com/package/react-js-loader
//https://stackoverflow.com/questions/67514276/react-formik-with-react-select-convert-multiple-select-array-to-string
//https://www.npmjs.com/package/use-state-validate
//https://stackoverflow.com/questions/73201840/react-material-ui-open-datepicker-on-button-click

//https://www.npmjs.com/package/react-datepicker
//https://www.npmjs.com/package/reactjs-file-uploader
//https://www.npmjs.com/package/react-modal
//https://www.npmjs.com/package/react-rte
//https://www.npmjs.com/package/react-simple-wysiwyg
//https://www.npmjs.com/package/html-react-parser
//https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js
//https://blog.logrocket.com/react-form-validation-sollutions-ultimate-roundup/
//https://www.npmjs.com/package/react-form-input-validation
//https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
//reference and object lookup (job -> user table )
//https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/
//https://www.geeksforgeeks.org/react-mui-accordionsummary-api/
//https://v4.mui.com/components/accordion/
//https://webdevassist.com/reactjs-materialui/material-ui-accordion
//https://www.geeksforgeeks.org/how-to-use-alert-component-in-reactjs/
//we are going to discuss the React MUI Avatar API. Avatars are profile pictures that are usually used for logged-in users.
//Backdrop is used to show a dimmed layout over the current window. We can use this to show a loader, dialog etc.
//Badge generates a small badge to the top-right of its child(ren).

//Box behave like div, stack behave like flex (one-dimensional element layout) , Grid - (2 dimensional layout ) 
//like grid : auto auto/ auto auto auot auto will divide the dive in into the 2 row and every two rows has 4 columns.

//----------------------------------------------------------------------
//Breadcrumbs consist of a list of links that help a user visualize a page's location 
//within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".

//Buttons allow users to take actions, and make choices, with a single tap.

//A tree view widget presents a hierarchical list.

//The timeline displays a list of events in chronological order.
//https://codesandbox.io/s/useforminputvalidation-kn0xe3
//https://www.npmjs.com/package/react-form-input-validation
//https://stackoverflow.com/questions/45664114/getting-temporary-file-path-using-javascript
//https://betterprogramming.pub/a-complete-guide-of-file-uploading-in-javascript-2c29c61336f5
//https://attacomsian.com/blog/javascript-formdata

//https://codesandbox.io/s/915qlr56rp
//https://dev.to/finallynero/react-form-using-formik-material-ui-and-yup-2e8h
//https://formik.org/docs/examples/with-material-ui
//https://www.youtube.com/watch?v=MV9NC3FoCmM
//Sorted by:material-ui version 1-4 are available on NPM under @material/core and 
//versions >4 are available under @mui/material. Same library, but they changed the name in version 5.
//https://www.youtube.com/watch?v=aeU2nU45sw4
//https://stackoverflow.com/questions/69065717/material-ui-menu-component-locks-body-scrollbar
//https://stackoverflow.com/questions/57113561/how-do-i-style-the-borders-of-a-formik-error-field

//https://stackoverflow.com/questions/64624087/how-to-upload-pdf-file-from-filereader-to-node-js-express-app
//https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
//https://www.geeksforgeeks.org/implement-nested-routes-in-react-js-react-router-dom-v6/
//https://stackoverflow.com/questions/43136721/want-to-route-one-component-to-another-component
//https://medium.com/swlh/how-to-make-a-side-navigation-bar-in-reactjs-c90747f3410c
//https://medium.com/bb-tutorials-and-thoughts/react-how-to-proxy-to-backend-server-5588a9e0347
//https://blog.logrocket.com/why-you-should-use-proxy-server-create-react-app/

//https://stackoverflow.com/questions/69222920/module-not-found-cant-resolve-mui-x-data-grid-in-c-users-syndicate-docume
//https://stackoverflow.com/questions/70360351/how-to-convert-timestamp-in-react-js
//https://www.npmjs.com/package/react-moment

//https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
//0


//Don't pass null to the function. It will delete the prototype of the current object. Instead do this

//const imageRef = useRef();

//https://stackoverflow.com/questions/61700261/upload-image-request-from-react

//https://stackoverflow.com/questions/70027979/passing-props-to-outlet-when-nestining-routes-in-react-router-v6
//https://www.npmjs.com/package/math-ceil (No Need to use it)
//https://www.geeksforgeeks.org/javascript-math-ceil-function/

//https://www.npmjs.com/package/react-time-ago
//https://www.npmjs.com/package/@ramonak/react-progress-bar
//https://www.npmjs.com/package/react-translate
