import React, { useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

import SearchIcon from '@mui/icons-material/Search';

import {monthArr} from "../../helper"

function FilterForm(props) {

    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(1);

    const yearChangeHandler = ({ target }) => setYear(target.value)
    const monthChangeHandler = ({ target }) => setMonth(target.value)

    return (
        <Box sx={{ width: "85%", mx: "auto", mt: 2 }}>
            <Button onClick={() => props.searchNavigate(year, month)} endIcon={<SearchIcon />} variant="contained" color="secondary" sx={{mt:1.5}}>SEARCH</Button>
            <FormControl  sx={{mx:1}}>
                <Select
                    value={year}
                    label="year"
                    onChange={yearChangeHandler}
                >
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{mx:1}}>
                <Select
                    value={month}
                    label="month"
                    onChange={monthChangeHandler}
                >
                    {
                        monthArr.map((m, i) =>
                            <MenuItem key={i} value={i + 1}>{m}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

export default FilterForm