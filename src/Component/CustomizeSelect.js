import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CustomizeSelect = ({ placeholder, data, id_data }) => {
  const [option, setOption] = React.useState(" ");

  const handleChange = (event) => {
    setOption(event.target.value);
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select
        labelId="demo-simple-select-label"
        name={id_data ? id_data : "demo-simple-select"}
        value={option}
        label="Age"
        onChange={handleChange}
        sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        disableUnderline
      >
        <MenuItem value=" ">{placeholder}</MenuItem>
        {data.map((item) =>
          <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}

export default CustomizeSelect;