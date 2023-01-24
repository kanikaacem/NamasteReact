// import { Box, Stack, Typography, Button, Slider } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';

// import { cities } from "../../utils/Data";

// import { useState } from "react";
// const Filter = () => {

//   return (<>
//     <Box sx={{ width: "30%", padding: "50px" }}>
//       <Box sx={{
//         width: "534px",
//         height: "729px",
//         background: "#FFFFFF",
//         border: "1px solid #E1D4F2",
//         borderRadius: "19px",
//       }}>
//         <Box>
//           <Stack direction="row" gap={2} alignItems="center" sx={{
//             padding: " 20px",
//             borderBottom: "1px solid #E1D4F2 "
//           }}>
//             <Box>
//               <img src={window.location.origin + '/assets/JS3.png'} alt="JS3" />
//             </Box>

//             <Typography component="div"
//               sx={{
//                 fontSize: "24px",
//                 color: "#4E3A67",
//                 fontFamily: "Work Sans, sans-serif",
//                 fontWeight: "600"
//               }}>
//               Filters
//             </Typography>
//           </Stack>
//         </Box>
//         <Box sx={{ padding: "20px" }}>
//           <Stack direction="column" gap={2} alignItems="center" sx={{
//             padding: " 20px",
//           }}>
//             <ThemeFInputDiv sx={{ width: "100%" }}>
//               <ThemeLabel LableFor="job_type" LableText="Job Type" />
//               <input
//                 style={{
//                   background: "#FFFFFF",
//                   border: " 1px solid #E7D5FF",
//                   borderRadius: "11px",
//                   padding: "20px",
//                   fontSize: "16px"
//                 }} type="text" name="jobType" placeholder="Job Type" />
//             </ThemeFInputDiv>

//             <Stack direction="row" gap={1} sx={{ width: "100%" }}>
//               <ThemeFInputDiv sx={{ width: "40%" }}>
//                 <ThemeLabel LableFor="city" LableText="City" />
//                 <Select
//                   classNamePrefix="react-select"
//                   labelId="demo-simple-select-label"
//                   name="city"
//                   value={city}
//                   label="Age"
//                   onChange={(event) => {
//                     setCity(event.target.value);
//                   }}
//                   sx={{
//                     background: " #FFFFFF",
//                     border: "1px solid #EAEAEA",
//                     boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
//                     borderRadius: "7px",
//                     fontSize: "16px",
//                     fontamily: 'Montserrat',
//                     BorderBottom: 'none'
//                   }}
//                   disableUnderline
//                 >
//                   <MenuItem value=" ">Select City</MenuItem>
//                   {cities.map((item) =>
//                     <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
//                   )}
//                 </Select>
//               </ThemeFInputDiv>


//               <ThemeFInputDiv sx={{ width: "60%" }}>
//                 <ThemeLabel LableFor="area" LableText="Area" />
//                 <input
//                   style={{
//                     background: "#FFFFFF",
//                     border: " 1px solid #E7D5FF",
//                     borderRadius: "11px",
//                     padding: "20px",
//                     fontSize: "16px"
//                   }} type="text" name="area" placeholder="Area" />

//               </ThemeFInputDiv>
//             </Stack>

//             <ThemeFInputDiv sx={{ width: "100%" }} className="SalarySlider">
//               <ThemeLabel LableFor="desired_salary" LableText="Desired Salary" />
//               <Slider
//                 aria-label="Salary"
//                 defaultValue={500}
//                 valueLabelDisplay="auto"
//                 step={2000}
//                 marks
//                 min={0}
//                 max={10000}
//               />
//             </ThemeFInputDiv>

//             <Stack direction="row" gap={8}>
//               <Typography component="div"
//                 sx={{
//                   fontSize: "16px",
//                   color: "#4E3A67",
//                   fontFamily: "Montserrat",
//                   fontWeight: "500"
//                 }}>
//                 0
//               </Typography>
//               <Typography component="div"
//                 sx={{
//                   fontSize: "16px",
//                   color: "#4E3A67",
//                   fontFamily: "Montserrat",
//                   fontWeight: "500"
//                 }}>
//                 2K
//               </Typography>
//               <Typography component="div"
//                 sx={{
//                   fontSize: "16px",
//                   color: "#4E3A67",
//                   fontFamily: "Montserrat",
//                   fontWeight: "500"
//                 }}>
//                 4K
//               </Typography>
//               <Typography component="div"
//                 sx={{
//                   fontSize: "16px",
//                   color: "#4E3A67",
//                   fontFamily: "Montserrat",
//                   fontWeight: "500"
//                 }}>
//                 6K
//               </Typography>
//               <Typography component="div"
//                 sx={{
//                   fontSize: "16px",
//                   color: "#4E3A67",
//                   fontFamily: "Montserrat",
//                   fontWeight: "500"
//                 }}>
//                 8K
//               </Typography>
//               <Typography component="div"
//                 sx={{
//                   fontSize: "16px",
//                   color: "#4E3A67",
//                   fontFamily: "Montserrat",
//                   fontWeight: "500"
//                 }}>
//                 10K
//               </Typography>

//             </Stack>

//             <ThemeFInputDiv>
//               <Button
//                 sx={{
//                   width: "419px",
//                   height: "54px",
//                   background: "#4E3A67",
//                   border: "1px solid #E7D5FF",
//                   borderRadius: "7px",
//                   color: "#FFFFFF",
//                   "&:hover": {
//                     width: "419px",
//                     height: "54px",
//                     background: "#4E3A67",
//                     border: "1px solid #E7D5FF",
//                     borderRadius: "7px",
//                     color: "#FFFFFF",
//                   }
//                 }}> Jobs for Women</Button>
//               <Button
//                 sx={{
//                   width: "419px",
//                   height: "54px",
//                   background: " #FFFFFF",
//                   border: "1px solid #E7D5FF",
//                   borderRadius: "7px",
//                   color: '#3A2D49',
//                   "&:hover": {
//                     width: "419px",
//                     height: "54px",
//                     background: " #FFFFFF",
//                     border: "1px solid #E7D5FF",
//                     borderRadius: "7px",
//                     color: '#3A2D49'
//                   }
//                 }}> Jobs for Freshers</Button>
//             </ThemeFInputDiv>


//           </Stack>
//         </Box>
//       </Box>
//     </Box>
//   </>)
// }
// export default Filter;