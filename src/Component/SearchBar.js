import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CustomizeSelect from "../Component/CustomizeSelect";
import { cities, Experience } from "../utils/Data";
const SearchBar = () => {
    return (<>
        <div className="SearchBarDiv">
            <div className="SearchBar">
                <SearchIcon></SearchIcon>
                <input type="text" placeholder="Search" className='Search' style={{ background: '#E2E2E2' }} />
                <span>|</span>
                <CustomizeSelect placeholder="City" data={cities} />
                <span>|</span>
                <CustomizeSelect placeholder="Experience" data={Experience} />
                <span>|</span>
                <CustomizeSelect placeholder="CTC" data={Experience} />
            </div>
            <Button variant="contained"
                className="SearchButton"
                style={{
                    textTransform: "capitalize",
                    background: "#2B1E44",
                    borderRadius: "50px",
                    padding: "10px 50px"
                }}> Search</Button>
        </div>
    </>)
}
export default SearchBar;