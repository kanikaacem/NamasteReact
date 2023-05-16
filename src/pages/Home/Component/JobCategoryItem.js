import { Box, Stack, Typography } from '@mui/material';

import { useState } from 'react';

const JobCategoryItem = ({ categoryItem }) => {
  const [showItemInfo, setShowItemInfo] = useState(false);
  const ShowItemInfoContainer = () => {
    setShowItemInfo(!showItemInfo);
  }
  return (<>
    {!showItemInfo &&
      <Stack direction="column" gap={3} alignItems="center" justifyContent="center" sx={{
        padding: "28px",
        width: { "xs": "156px", "sm": "156px", "md": "230px", "xl": "230px", "lg": "230px" },
        height: { "xs": "103px", "sm": "103px", "md": "150px", "xl": "150px", "lg": "150px" },
        background: "#FFFFFF",
        boxShadow: "0px 2px 14px rgba(191, 191, 191, 0.25)",
        borderRadius: "6px",
        boxSizing: "border-box"
      }}
        onClick={ShowItemInfoContainer}
      >
        <Box className="JobCategoryImage">
          <img src={window.location.origin + categoryItem.categoryImage} alt={categoryItem.categoryName} />
        </Box>
        <Typography variant="h1" component="h2" sx={{
          fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
          fontFamily: "'Manrope',' sans- serif'",
          fontWeight: "700",
          color: "#000000",
          textAlign: "center"
        }}>
          {categoryItem.categoryName}
        </Typography >
      </Stack >}
    {
      showItemInfo &&
      <Stack direction="column" gap={3} alignItems="center" justifyContent="center" sx={{
        width: { "xs": "156px", "sm": "156px", "md": "230px", "xl": "230px", "lg": "230px" },
        height: { "xs": "103px", "sm": "103px", "md": "150px", "xl": "150px", "lg": "150px" },
        background: "#FCFAFA",
        border: "1px solid #f6f1f1",
        borderRadius: "6px",
        boxSizing: "border-box"
      }}
        onClick={ShowItemInfoContainer}

      >
        <Typography variant="h1" component="h2" sx={{
          fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
          fontFamily: "'Manrope',' sans- serif'",
          fontWeight: "700",
          color: "#000000",
          textAlign: "center"
        }}>
          {categoryItem.categoryName}
        </Typography >

        <Stack direction="row" gap={2}>
          <Box>
            <Typography variant="h1" component="h2" sx={{
              fontSize: { "xs": "1rem", "sm": "1rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
              fontFamily: "'Manrope',' sans- serif'",
              fontWeight: "700",
              color: "#FF671F",
              textAlign: "center"
            }}>
              50+
            </Typography >
            <Typography variant="h1" component="h2" sx={{
              fontSize: { "xs": "0.6rem", "sm": "0.6rem", "md": "0.8rem", "xl": "0.8rem", "lg": "0.8rem" },
              fontFamily: "'Manrope',' sans- serif'",
              color: "#000000",
              textAlign: "center"
            }}>
              Active Jobs
            </Typography >
          </Box>
          <Box>
            <Typography variant="h1" component="h2" sx={{
              fontSize: { "xs": "1rem", "sm": "1rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
              fontFamily: "'Manrope',' sans- serif'",
              fontWeight: "700",
              color: "#FF671F",
              textAlign: "center"
            }}>
              50+
            </Typography >
            <Typography variant="h1" component="h2" sx={{
              fontSize: { "xs": "0.6rem", "sm": "0.6rem", "md": "0.8rem", "xl": "0.8rem", "lg": "0.8rem" },
              fontFamily: "'Manrope',' sans- serif'",
              color: "#000000",
              textAlign: "center"
            }}>
              Active Candidates
            </Typography >
          </Box>
        </Stack>

      </Stack >
    }


  </>)
}
export default JobCategoryItem;