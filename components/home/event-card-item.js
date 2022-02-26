import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardActions, Typography, Button, Chip } from '@mui/material'
import EventIcon from '@mui/icons-material/Event';
import { formatDate } from '../../helper';

const actionAreaStyle = { display: "flex", justifyContent: "space-between" }

const linkMaker = link => id => link.trim().replace(/\s/g, "-") + `-${id}`
const txtCutter = function (txt, char = 70) {
    const newTxt = txt;
    return newTxt.slice(0, char) + " ..."
}

function EventCard(props) {
    const { image, title, description, link, date, id } = props.cardData;

    return (
        <Card sx={{}} color="primary">
            <Image height={250} width={400} src={`/${image}`} alt={title} />
            <CardContent>
                <Typography variant="h5" gutterBottom component="h3">{title}</Typography>
                <Typography variant="body2">{txtCutter(description)}</Typography>
            </CardContent>
            <CardActions sx={actionAreaStyle}>
                <Button variant="contained" color="secondary">
                    <Link href={linkMaker(link)(id)}>MORE</Link>
                </Button>
                <Chip sx={{ p: 0.5 }} icon={<EventIcon />} size="small" color="secondary" variant="outlined" label={formatDate(date)} />
            </CardActions>
        </Card>
    )
}

export default EventCard