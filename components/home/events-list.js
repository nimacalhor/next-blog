import React from 'react'
import EventCard from './event-card-item'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

function EventList(props) {
    const {events} = props

    const containerStyle = {
        width: "85%",
        mx: "auto",
        mt:3
    }

    return (
        <Box sx={containerStyle}>
            <Grid container spacing={2}>
                {
                    events.map(event => (
                        <Grid key={event.id} item xs={6} md={4}>
                            <EventCard cardData={{ ...event, link: `/events/${event.title}` }} />
                        </Grid>
                    )
                    )
                }
            </Grid>
        </Box>
    )
}
// image, title, description, link

export default React.memo(EventList)