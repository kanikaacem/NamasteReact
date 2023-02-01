import { Box, Button, Stack, styled } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { JobCategories } from "../../../utils/Data";

import { useState } from "react";

import AllJobCategories from "./AllJobCategories";

const JobCategory = () => {

  const ShowLessCategoryButton = styled(Button)({
    textTransform: "capitalize",
    color: "#FFFFFF",
    background: " #2B1E44",
    borderRadius: "10px",
    border: "2px solid #2B1E44",
    margin: "0 auto",
    "&:hover": {
      background: "#2B1E44",
      color: "#FFFFFF"
    }
  })
  const [showCategory, setshowCategory] = useState(false);

  return (<>
    <Box className="hs_job_categories">
      <Stack
        className="hs_job_categroies_wrapper"
        sx={{
          display: "flex",
          flexDirextion: "column",
          alignItem: "center",
          padding: "50px 30px",
          backgroundColor: "#FFFFFF",
          columnGap: "20px",
          rowGap: "20px",
          borderRadius: "10px",

        }}>
        <Box
          className="JobCategoriesItems" sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            backgroundColor: "#FFFFFF",
            columnGap: "20px",
            rowGap: "20px",
          }}>
          {JobCategories.map((item) => {
            return (
              <>
                <div className="CategoryItem" key={item.id} id={item.id} >
                  {/* <div className="CategoryLogo" >
                    <img src={item.logo} alt={item.title} width="100%" />
                  </div> */}
                  <div className="CategoryTitle" >
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Montserrat",
                        fontWeight: "600",
                        color: "#5A5A5A"
                      }}>{item.title}</span>
                  </div>
                </div>

              </>)
          })}
        </Box>

        <ShowLessCategoryButton sx={{
          fontWeight: "700",
          background: "none",
          border: "none",
          fontSize: "24px",
          color: "#FC9A7E",
          "&:hover": {
            fontWeight: "700",
            background: "none",
            border: "none",
            fontSize: "24px",
            color: "#FC9A7E"
          }
        }}
          className="ShowMoreButton" onClick={() => setshowCategory(!showCategory)} >
          {showCategory ? "Show Less Categories " : "More Categories"}
          {showCategory ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ShowLessCategoryButton>

        {showCategory &&
          <AllJobCategories></AllJobCategories>
        }

      </Stack>

    </Box >
  </>)
}
export default JobCategory;