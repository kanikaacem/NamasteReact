import CustomizeSelect from "../Component/CustomizeSelect";
import {City, Experience} from "../utils/Data";
import {useSelector } from "react-redux";

const Filter = () => {
  const categoryActive = useSelector(state => state.categoryActive);

    return (<>
        <div className="filter">
            {/* <h2 style={{ margin: "0px",
                        padding: "20px 50px",
                        color: "#2B1E44",
                        fontWeight: "500",
                        background: "#E7E7E7"
                        }}>
                {categoryActive.title}
            </h2> */}
            <div className="filterWrapper">
               Filter By:
              
               <span
               style={{textTransform:"capitalize",
               background:"#ffffff",
               borderRadius:"50px",
               padding:"5px 20px",
               color:"#2B1E44",
               cursor:"pointer"
               }}>
               <CustomizeSelect placeholder="Any Exp. level" data={Experience}/>
              </span>

              <span
               style={{textTransform:"capitalize",
               background:"#ffffff",
               borderRadius:"50px",
               padding:"5px 20px",
               color:"#2B1E44",
               cursor:"pointer"
               }}>
                <CustomizeSelect placeholder="Any Location" data={City}/>
              </span>

              <span
               style={{textTransform:"capitalize",
               background:"#ffffff",
               borderRadius:"50px",
               padding:"5px 20px",
               color:"#2B1E44",
               cursor:"pointer"
               }}>
                Refine
              </span>
            </div>
        </div>
    </>)
}
export default Filter;