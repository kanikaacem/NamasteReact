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
    <Box className="hs_job_categories"
      sx={{
        padding: { md: "20px 100px", xs: "20px" }
      }}
    >

      <Stack
        className="hs_job_categroies_wrapper"
        sx={{
          display: "flex",
          flexDirextion: "column",
          alignItem: "center",
          padding: "15px",
          backgroundColor: "#FFFFFF",
          columnGap: "20px",
          rowGap: "20px",
          boxShadow: "2px 2px 8px 0px rgb(148 134 90)",
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
                  <div className="CategoryLogo" >
                    <img src={item.logo} alt={item.title} width="100%" />
                  </div>
                  <div className="CategoryTitle" >
                    <span>{item.title}</span>
                  </div>
                </div>

              </>)
          })}
        </Box>

        <ShowLessCategoryButton className="ShowMoreButton" onClick={() => setshowCategory(!showCategory)} >
          {showCategory ? "Show Less Categories " : "More Categories"}
          {showCategory ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ShowLessCategoryButton>

        {showCategory &&
          <AllJobCategories></AllJobCategories>
        }

      </Stack>

    </Box>
  </>)
}
export default JobCategory;