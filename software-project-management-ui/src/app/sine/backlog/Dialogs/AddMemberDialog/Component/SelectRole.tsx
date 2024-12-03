"use client";

import React from "react";
import { Card, Typography, Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectAutoWidth: React.FC<{
    roles: any[];
    setRole: (role: any) => void;
    currentRole: any;
}> = ({ roles, setRole, currentRole }) => {
    const [age, setAge] = React.useState("1");

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    return (
        <>
            <Box>
                <FormControl sx={{ m: 1, minWidth: 140 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={currentRole}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                    >
                        {roles?.map((role: any) => (
                            <MenuItem value={role?.name}>{role.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

export default SelectAutoWidth;
