//import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
//import { jobInfo } from '../utils/Data';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Error from '../Component/Error';
import { useState } from "react";
import Loader from "react-js-loader";

const CLIENT_ID = '346122009616-bbip3t7tcb1kf75u6q1k8k9pkj6nn1fs.apps.googleusercontent.com';

const Login = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [requestProgress, setrequestProgress] = useState(false);
    //no need to use event for validation
    const GoogleSignInResolve = async ({ provider, data }) => {
        let email = data.email;
        // let response = await fetch("http://192.168.1.6:8000/api/employer/checkemail", {
        //     // Adding method type
        //     method: "POST",
        //     // Adding body or contents to send
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify({
        //         email: email
        //     }),
        // })
    }
    const loginApi = async (email, password) => {
        setrequestProgress(true);
        // setTimeout(() => {
        //     setrequestProgress(false);
        //     dispatch({ type: 'LOGIN', payload: "dkfjldk" });
        // }, 5000);
        let response = await fetch("http://192.168.1.6:8000/api/employer/loginemployer", {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                email: email,
                password: password,

            }),
        })
        if (response.ok) {
            response = await response.json();
            if (response.status == '1') {
                setrequestProgress(false);
                dispatch({ type: 'LOGIN', payload: JSON.stringify(response.user) });
            }
            if (response.status == '0') {
                setrequestProgress(false);
                setemailError("");
                setpasswordError("Invalid Credentials");
            }

        }
    }
    const Login = async (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;

        if (email == '') {
            setemailError("Email is required");
        }
        if (password == '') {
            setpasswordError("Password is required");
        }

        if (email != '' && password != '') {
            loginApi(email, password);
        }


    }

    return (<>
        {isLoggedIn == 'true' && <Navigate to="/"></Navigate>}
        {requestProgress &&
            <div className="loader">
                <Loader type="spinner-cub" bgColor={"#2B1E44"} color={'#FFFFFF'} size={100} />
            </div>}
        <div className="LoginPage">
            <div className="content">

                {/* <div className="LoginWrapper"> */}
                {/* <div className="info-wrapper">
        <div className="info-title"> New to JobYahan?</div>
        <div className="info-list">
            {jobInfo.map((item) => <div class="info-item" key={item.id} id={item.id}> <CheckIcon></CheckIcon>  {item.text} </div>)}
        </div>
        <Button variant="outlined" href="/sign-up">Sign up for Free</Button>
    </div> */}
                <div className="login-wrapper" >
                    <div className="info-title">Login</div>
                    <form className="loginForm" onSubmit={Login}>
                        <div className="input-item">
                            <input placeholder="Enter Email ID/ Username" type="text" name="email"></input>
                            {emailError && <Error text={emailError} />}
                        </div>
                        <div className="input-item">
                            <input placeholder="Enter Password" type="password" name="password"></input>
                            {passwordError && <Error text={passwordError} />}
                        </div>

                        <span className="forgotPassword"> Forgot Password ?</span>
                        <Button variant="contained" type="submit" style={{ borderRadius: '10px', background: '#2B1E44' }}>Sign In</Button>
                        {/* <div className="signin-with-google">
            <div>OR </div>

            <LoginSocialGoogle
                client_id={CLIENT_ID}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={GoogleSignInResolve}
                onReject={err => {
                    console.log(err);
                }}
            >
                <button type="button" class="signin-with-google-btn" >
                    Sign In with Google
                </button>

            </LoginSocialGoogle>

        </div> */}

                    </form>

                </div>
            </div>
        </div>

        {/* </div> */}
    </>)

}

export default Login;