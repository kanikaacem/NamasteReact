import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import NotesIcon from '@mui/icons-material/Notes';

import { useState } from "react";
import { useDispatch } from 'react-redux';
const Logout = () => {
  const [showUserProfile, setshowUserProfile] = useState(false);
  const dispatch = useDispatch();
  // const openCloseMenu = () => {
  //     showMenu ? setshowMenu(false) : setshowMenu(true);
  // }
  const showProfile = () => {
    dispatch({ type: 'SHOW_HIDE_PROFILE' });
  }

  return (<>
    <div className="logoutWrapper">
      <div className="Icondiv">
        <NotesIcon style={{ color: '#ffffff' }}></NotesIcon>
      </div>
      {/* <div className="logoutMenu">
           {showMenu && 
           <Paper>
                <ClickAwayListener onClickAway={openCloseMenu}>

                  <MenuList
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>}  
        </div> */}
      <div className="userProfile" onClick={showProfile}>
        <img src="./assets/companyLogo.png" alt="LOGO" style={{ width: "30px", borderRadius: '10px', border: '2px solid #2B1E44' }}></img>
      </div>
    </div>
  </>)
}
export default Logout;