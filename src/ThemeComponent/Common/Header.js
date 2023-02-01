import { Box, Stack, Button, AppBar, Toolbar, Menu, MenuItem, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const user = localStorage.user && JSON.parse(localStorage.user);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const showProfile = useSelector(state => state.showProfile);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>
        <Box>
            <AppBar position="static"
                sx={{
                    backgroundColor: "#E4E4E4",
                    padding: { md: "10px 70px", xs: "10px" },
                    boxShadow: "none"

                }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box sx={{
                        width: "60px",
                        height: "60px"
                    }}>
                        <a href={window.location.origin}>
                            <img src={window.location.origin + '/assets/companyLogo.png'} alt="LOGO" width="100%"></img>
                        </a>
                    </Box>
                    <Stack direction="row"
                        gap={2}
                        className="header_menus">
                        {!isLoggedIn != 'true' &&
                            <Stack direction="row" gap={2}>
                                <Button variant="outlined"
                                    style={{ textTransform: "capitalize", color: "#2B1E44", border: "2px solid #2B1E44" }}
                                    onClick={handleClick}
                                    onMouseOver={handleClick}>For Employer</Button>
                                <Menu
                                    disableScrollLock={true}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}>
                                    <MenuItem component={Link} href="/employer-login">Employer Login</MenuItem>
                                    <MenuItem component={Link} href="/employer-register">Employer Register</MenuItem>
                                </Menu>

                                <Button variant="outlined" href="/candidate-login"
                                    style={{ textTransform: "capitalize", background: "#2B1E44", color: "#FFFFFF", border: "2px solid #2B1E44" }}>
                                    Candidate Login
                                </Button>

                                <Button variant="outlined" href="/candidate-register"
                                    style={{ textTransform: "capitalize", background: "#2B1E44", color: "#FFFFFF", border: "2px solid #2B1E44" }}>
                                    Candidate Signup
                                </Button>

                            </Stack>
                        }

                    </Stack>
                </Toolbar>
            </AppBar>

        </Box>

    </>)
}

export default Header;