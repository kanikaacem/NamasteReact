import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import { jobInfo } from '../utils/Data';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Error from '../Component/Error';

import { useEffect } from 'react';
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
                            {/* <span> Email ID/ Username</span> */}
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
                            {/* <span> Password</span> */}
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

                </div>
            </div>
        </div>
    </>)

}

export default Login;