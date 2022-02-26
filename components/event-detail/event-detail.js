import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from "@mui/material/Box"
import st from "./event-detail.module.css"
import { Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {formatDate} from "../../helper"

function EventDetail(props) {
    const { title, image, description, location, date } = props.eventDetail

    return (
        <main className={st.main}>
            <Box sx={{ width: "75%", mx: "auto", p: 2, pt: 4 }}>
                <Typography gutterBottom variant="h3" component="h1">{title}</Typography>
                <Image src={`/${image}`} alt={title} width={600} height={300} layout="responsive"/>
                <Typography sx={{mt:4, mb:2}} variant="h5" component="p">{description}</Typography>
                <Typography variant="h4" component="p" color="primary">{formatDate(date)}</Typography>
                <Typography variant="body1" component="p">{location}</Typography>
                <Button size='large' sx={{mt:2}} startIcon={<ArrowBackIcon />} variant="outlined">
                    <Link href="/">BACK</Link>
                </Button>
            </Box>
        </main>
    )
}

export default EventDetail