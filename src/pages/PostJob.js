import Button from '@mui/material/Button';
import CustomizeSelect from "../Component/CustomizeSelect";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useForm } from 'react-hook-form';
import {Role} from "../utils/Data";
import {City ,Experience} from "../utils/Data";

const PostJob = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const animatedComponents = makeAnimated();
    const Countries = [
        { label: "Albania", value: 355 },
        { label: "Argentina", value: 54 },
        { label: "Austria", value: 43 },
        { label: "Cocos Islands", value: 61 },
        { label: "Kuwait", value: 965 },
        { label: "Sweden", value: 46 },
        { label: "Venezuela", value: 58 }
    ]
    const postjob = () => {
        console.log("hello");
    };
    return (<>
      <div className="postjob-wrapper" style={{width:'50%',margin:'0 auto'}}>
            <div className="info-title">Post Job</div>
              <form className="postjobForm" onSubmit={handleSubmit(postjob)} >
                <div className="input-item">
                    <span> Title</span>
                    <input placeholder="Enter Title" type="text" name="title"
                     {...register("title", {required: true }) }
                     ></input>
                     {/* {errors.email && errors.email.type === "required" && (
                           <Error text="Email is required"/>
                     )}
                     {errors.email && errors.email.type === "pattern" && (
                          <Error text="Email is not valid" />
                    )} */}
                </div>
                <div className="input-item">
                    <span> Role </span>
                    <div className="select">
                    <CustomizeSelect 
                    style={{width:'100%'}}
                    placeholder="Select Role" data={Role}
                    name="role"
                    {...register("role", {required: true }) }
                    />
                    </div>
                    {/* <input placeholder="Enter Password" type="password" name="password" 
                    {...register("password", {required: true})}
                    ></input> */}
                    {/* {errors.password && errors.password.type === "required" && (
                        <Error text="Password is required" />
                    )} */}
                </div>
                <div className="input-item">
                    <span> Experience </span>
                    <div className="select">
                    <CustomizeSelect 
                    placeholder="Select Experience" data={Experience}/>
                    </div>
                    {/* <input placeholder="Enter Password" type="password" name="password" 
                    {...register("password", {required: true})}
                    ></input> */}
                    {/* {errors.password && errors.password.type === "required" && (
                        <Error text="Password is required" />
                    )} */}
                </div>
                
                <div className="input-item">
                    <span> Opening </span>
                    <input placeholder="Enter opening" type="text" name="text"
                    //  {...register("email", {required: true }) }
                     ></input>

                    {/* <input placeholder="Enter Password" type="password" name="password" 
                    {...register("password", {required: true})}
                    ></input> */}
                    {/* {errors.password && errors.password.type === "required" && (
                        <Error text="Password is required" />
                    )} */}
                </div>

                <div className="input-item">
                    <span> Salary </span>
                    <input placeholder="Enter salary" type="text" name="text"
                    //  {...register("email", {required: true }) }
                     ></input>

                    {/* <input placeholder="Enter Password" type="password" name="password" 
                    {...register("password", {required: true})}
                    ></input> */}
                    {/* {errors.password && errors.password.type === "required" && (
                        <Error text="Password is required" />
                    )} */}
                </div>

                <div className="input-item">
                    <span> Skills </span>
                    <Select options={Countries} components={animatedComponents} isMulti />
                    {/* <input placeholder="Enter Password" type="password" name="password" 
                    {...register("password", {required: true})}
                    ></input> */}
                    {/* {errors.password && errors.password.type === "required" && (
                        <Error text="Password is required" />
                    )} */}
                </div>

                <div className="input-item">
                    <span> Description </span>
                    <input placeholder="Enter description" type="text" name="text"
                    //  {...register("email", {required: true }) }
                     ></input>

                    {/* <input placeholder="Enter Password" type="password" name="password" 
                    {...register("password", {required: true})}
                    ></input> */}
                    {/* {errors.password && errors.password.type === "required" && (
                        <Error text="Password is required" />
                    )} */}
                </div>

                <div className="input-item">
                    <span> City </span>
                    <div className="select">
                    <CustomizeSelect 
                    placeholder="Select City" data={City}/>
                    </div>
                    {/* <input placeholder="Enter Password" type="password" name="password" 
                    {...register("password", {required: true})}
                    ></input> */}
                    {/* {errors.password && errors.password.type === "required" && (
                        <Error text="Password is required" />
                    )} */}
                </div>

                
                <Button variant="contained" type="submit" >Submit</Button>
                {/* <span className="OTPLogin"> Use OTP to Login</span>
                <span className="OR"> Or</span> */}

              </form>
      </div>
    </>)
}
export default PostJob;