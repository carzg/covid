import React, { useState } from 'react';
import styles from './CountryPicker.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CountryPicker = ({ countries, handleChange }) => {
    const [country, setCountry] = useState('');
    
    const handleChoose = (e) => {
        handleChange(e.target.value);
        setCountry(e.target.value)
    };

    return (
        <Box sx={{ minWidth: 200 }} className={styles.container}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose A Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              label="Country"  
              onChange={handleChoose}
            >
                { countries.map((item, index) => (<MenuItem value={item} key={index+item}>{item}</MenuItem>))}
            </Select>
          </FormControl>
        </Box>
    );
}
 
export default CountryPicker;