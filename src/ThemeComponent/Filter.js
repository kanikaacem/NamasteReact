import { Box, Stack, Container } from "@mui/material";
import CustomizeSelect from "../ThemeComponent/CustomizeSelect";
import { cities, Experience } from "../utils/Data";
import { useSelector } from "react-redux";

const Filter = () => {
  const categoryActive = useSelector(state => state.categoryActive);

  return (<>
    <Box className="filter">
      <Stack direction="row"
        flexWrap="wrap"
        gap={1} className="filterWrapper"
      >
        Filter By:

        <span
          style={{
            textTransform: "capitalize",
            background: "#ffffff",
            borderRadius: "50px",
            padding: "5px 20px",
            color: "#2B1E44",
            cursor: "pointer"
          }}>
          <CustomizeSelect placeholder="Any Exp. level" data={Experience} />
        </span>

        <span
          style={{
            textTransform: "capitalize",
            background: "#ffffff",
            borderRadius: "50px",
            padding: "5px 20px",
            color: "#2B1E44",
            cursor: "pointer"
          }}>
          <CustomizeSelect placeholder="Any Location" data={cities} />
        </span>

        <span
          style={{
            textTransform: "capitalize",
            background: "#ffffff",
            borderRadius: "50px",
            padding: "5px 20px",
            color: "#2B1E44",
            cursor: "pointer"
          }}>
          Refine
        </span>
      </Stack>
    </Box>
  </>)
}
export default Filter;