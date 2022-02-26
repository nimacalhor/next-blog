import React from 'react'
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EventsList from '../../components/home/events-list';
import FilterForm from '../../components/all-events/filter-form';
import eventAxios from "../../eventsAxios"
import CircularProgress from '@mui/material/CircularProgress'

function EventsPage(props) {
  const router = useRouter()
  const { events } = props;
  const searchNavigate = (year, month) => router.push(`/events/${year}/${month}`)

  return (
    <>
      <Box sx={{ width: "85%", mx: "auto", mt: 2 }}>
        <Typography gutterBottom color="primary" variant="body1">all events</Typography>
      </Box>
      <FilterForm searchNavigate={searchNavigate} />
      {
        events ? <EventsList events={events} /> :
          (
            <Box sx={{ width: "85%", mx: "auto", mt: 2, height: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CircularProgress />
            </Box>
          )
      }
    </>
  )
}

export async function getStaticProps() {
  const { data } = await eventAxios.get("/events");
  return { props: { events: data } }
}

export default EventsPage