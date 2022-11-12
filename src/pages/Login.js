import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import { jobInfo } from '../utils/Data';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Error from '../Component/Error';

import { useEffect } from 'react';
// import { Google } from '@mui/icons-material';
// import { googleLogout } from '@moeindana/google-oauth';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
//import { GoogleLogin } from 'react-google-login';
// import { GoogleAPI, GoogleLogin, GoogleLogout } from 'react-google-oauth'
// import { GoogleOAuthProvider } from '@moeindana/google-oauth';
// import { GoogleLogin } from '@moeindana/google-oauth';
//const CLIENT_ID = "938817844055-okvg6eisdle7d40pqo83i4rc3nk5angd.apps.googleusercontent.com";

const Login = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    //no need to use event for validation
    const Login = async (data) => {
        //event.preventDefault();
        //let email = event.target.email.value;
        //let password = event.target.password.value;
        let email = data.email;
        let password = data.password;
        let response = await fetch("http://192.168.1.6:8000/api/users/login", {
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
            dispatch({ type: 'LOGIN', payload: JSON.stringify(response) });
        }

    }

    // const responseGoogle = (response) => {
    //     console.log(response);
    // }
    // useEffect(() => {
    //     google.accounts.id.initialize({
    //         client_id: "938817844055-okvg6eisdle7d40pqo83i4rc3nk5angd.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     });

    //     google.accounts.id.renderButton(
    //         document.getElementById("signInDiv"),
    //         { theme: "outline", size: "large" }
    //     )
    // }, []);
    return (<>
        {isLoggedIn == 'true' && <Navigate to="/"></Navigate>}
        <div className="content">
            <div className="LoginWrapper">
                <div className="info-wrapper">
                    <div className="info-title"> New to JobYahan?</div>
                    <div className="info-list">
                        {jobInfo.map((item) => <div class="info-item" key={item.id} id={item.id}> <CheckIcon></CheckIcon>  {item.text} </div>)}
                    </div>
                    <Button variant="outlined">Register for Free</Button>
                </div>
                <div className="login-wrapper" >
                    <div className="info-title">Login</div>
                    <form className="loginForm" onSubmit={handleSubmit(Login)}>
                        <div className="input-item">
                            <span> Email ID/ Username</span>
                            <input placeholder="Enter Email ID/ Username" type="text" name="email"
                                {...register("email", { required: true })}></input>
                            {errors.email && errors.email.type === "required" && (
                                <Error text="Email is required" />
                            )}
                            {errors.email && errors.email.type === "pattern" && (
                                <Error text="Email is not valid" />
                            )}
                        </div>
                        <div className="input-item">
                            <span> Password</span>
                            <input placeholder="Enter Password" type="password" name="password"
                                {...register("password", { required: true })}></input>
                            {errors.password && errors.password.type === "required" && (
                                <Error text="Password is required" />
                            )}
                        </div>

                        <span className="forgotPassword"> Forgot Password ?</span>
                        <Button variant="contained" type="submit" >Login</Button>
                        {/* <span className="OTPLogin"> Use OTP to Login</span>
                <span className="OR"> Or</span> */}

                    </form>

                    <div id="signInDiv"></div>
                    <GoogleOAuthProvider clientId="739106075686-o3iq57fl19qmf50planckptdekklb1du.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);


                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>

                    {/* <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Sign in with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}

                    {/* <GoogleOAuthProvider clientId={CLIENT_ID}>
                        <GoogleLogin
                            onSuccess={response => {
                                console.log(response);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider> */}

                </div>
            </div>
        </div>
    </>)

}

export default Login;