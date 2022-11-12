import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { JobCategories } from "../../../utils/Data";
import {useState} from "react";
import AllCategories from "./AllCategories";
//import {useSelector , useDispatch } from "react-redux";
// import { Navigate } from 'react-router-dom';
const JobCategory = () =>{
   //const categoryActive = useSelector(state => state.categoryActive);
   //const dispatch = useDispatch();

   //const ActiveCategory = (id,title) => {
     //dispatch({type:'ACTIVE_CATEGORY',payload:{'id':id,'title':title}});
   //}
   const [showCategory,setshowCategory] = useState(false);
   const navigate = (route) =>{
      window.location.href = route;
   }
   const showMoreCategory = () => {
    showCategory ? setshowCategory(false) : setshowCategory(true);
   }
   return(<>
    <div className="JobCategories">
        <div className="JobCategoriesWrapper" >
          <div className='JobCategoriesItems'>
          {JobCategories.map((item) => {
                return (
                <>
                {/* <div className={categoryActive.id == item.id ? "CategoryItem active" : "CategoryItem"} key={item.id} id={item.id} onClick={() => ActiveCategory(item.id,item.title)}>
                    <div className="CategoryLogo" >
                        <img src={item.logo} alt={item.title} width="100%"/>
                    </div>
                    <div className="CategoryTitle" >
                        <span>{item.title}</span> 
                    </div>
                </div> */}
                  <div className="CategoryItem" key={item.id} id={item.id} onClick ={ () => navigate('/post-job')}>
                    <div className="CategoryLogo" >
                        <img src={item.logo} alt={item.title} width="100%"/>
                    </div>
                    <div className="CategoryTitle" >
                        <span>{item.title}</span> 
                    </div>
                </div>
                
               </>)
            })}
          </div>
          <div className="ShowMoreButton">
           <Button variant="contained" 
            className="ShowMoreButton"
            style={{textTransform:"capitalize",
            background: "#ffffff",
            color:" #94865A",
            borderRadius: "10px",
            border:"2px solid #E2E2E2",
            boxShadow:"none"
            }}
            onClick={showMoreCategory}> {showCategory ? "Show Less Categories " : "More Categories"} <ArrowDropDownIcon/></Button>
          </div>
          { showCategory && 
           <AllCategories></AllCategories>
          }
          </div>
      
       
    </div>
    </>)
}
export default JobCategory;