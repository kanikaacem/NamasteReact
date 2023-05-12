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
        width: "156px",
        height: "103px",
        background: "#FFFFFF",
        boxShadow: "0px 2px 14px rgba(191, 191, 191, 0.25)",
        borderRadius: "6px",
        boxSizing: "border-box"
      }}
        onTouchStart={ShowItemInfoContainer}
        onTouchEnd={ShowItemInfoContainer}

      >
        <Box className="JobCategoryImage">
          <img src={window.location.origin + categoryItem.categoryImage} alt={categoryItem.categoryName} />
        </Box>
        <Typography variant="h1" component="h2" sx={{
          fontSize: "0.75rem",
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
        width: "156px",
        height: "103px",
        background: "#FCFAFA",
        border: "1px solid #f6f1f1",
        borderRadius: "6px",
        boxSizing: "border-box"
      }}
        onTouchStart={ShowItemInfoContainer}
        onTouchEnd={ShowItemInfoContainer}
      >
        <Typography variant="h1" component="h2" sx={{
          fontSize: "0.75rem",
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
              fontSize: "1rem",
              fontFamily: "'Manrope',' sans- serif'",
              fontWeight: "700",
              color: "#FF671F",
              textAlign: "center"
            }}>
              50+
            </Typography >
            <Typography variant="h1" component="h2" sx={{
              fontSize: "0.6rem",
              fontFamily: "'Manrope',' sans- serif'",
              color: "#000000",
              textAlign: "center"
            }}>
              Active Jobs
            </Typography >
          </Box>
          <Box>
            <Typography variant="h1" component="h2" sx={{
              fontSize: "1rem",
              fontFamily: "'Manrope',' sans- serif'",
              fontWeight: "700",
              color: "#FF671F",
              textAlign: "center"
            }}>
              50+
            </Typography >
            <Typography variant="h1" component="h2" sx={{
              fontSize: "0.6rem",
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