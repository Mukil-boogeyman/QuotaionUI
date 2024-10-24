import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
 
      <FormControl sx={{ m: 1, minWidth: 130,backgroundColor:"#F5F7FA",borderRadius:"5px",height:"35px",display:"flex",justifyContent:"center",border:"2px white solid" }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          sx={{height:"35px",border:"2px solid white"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            Casagrand
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
