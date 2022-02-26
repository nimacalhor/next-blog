import React from 'react'
import EventList from '../components/home/events-list'
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import eventAxios from "../eventsAxios"



function HomePage(props) {

  return (
    <>
      <Box sx={{ width: "85%", mx: "auto", mt: 2 }}>
        <Typography variant="h3" >NIm events</Typography>
        <Typography color="primary" variant="body1">featured events</Typography>
      </Box>
      <EventList events={props.events.filter(el => el.isFeatured)} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await eventAxios.get("events")

  return {
    props: {
      events: data
    },
  }
}

export default HomePage