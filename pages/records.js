import { useState } from "react";

// MUI
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { IconButton} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Records() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <Stack
            direction="row"
            alignItems="baseline"
            spacing={2}
        >
            <Typography variant="h4">{date}</Typography>
            <IconButton color="success" aria-label="select date">
                <CalendarMonthIcon />
            </IconButton>
        </Stack>
    )
}