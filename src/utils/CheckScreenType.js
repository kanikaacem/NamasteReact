import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const CheckScreenType = () => {
  const [userScreenType, setUserScreenType] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600; // Adjust this value based on your desired breakpoint
      setUserScreenType(isMobile ? 'mobile' : 'tabAndDesktop');
      dispatch({ type: 'CHANGE_SCREEN_TYPE', payload: userScreenType });

    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, userScreenType]);

  // return userScreenType;
};

export default CheckScreenType;