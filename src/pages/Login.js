import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';

const Login = () => {
    const jobInfo = [
        {id:1,text:"One Click apply using JobYahan profile"}, 
        {id:2,text:"Get relevant job recommendations" }, 
        {id:3,text:"Showcase Profile to top companies"},
        {id:4,text:"Know application status on applied jobs."}
    ]
    return (<>
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
              <form className="loginForm">
                <div className="input-item">
                    <span> Email ID/ Username</span>
                    <input placeholder="Enter Email ID/ Username" type="text" name="email"></input>
                </div>

                <div className="input-item">
                    <span> Password</span>
                    <input placeholder="Enter Password" type="password" name="email"></input>
                </div>

                <span className="forgotPassword"> Forgot Password ?</span>
                <Button variant="contained" >Login</Button>
                <span className="OTPLogin"> Use OTP to Login</span>
                <span className="OR"> Or</span>

              </form>
            </div>
        </div>
    </div>
    </>)
   
}

export default Login;