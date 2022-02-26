import React, { useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { monthArr } from "../../helper"
import { getFilteredEvents } from "../../data/data"
import EventsList from '../../components/home/events-list'
import { red } from '@mui/material/colors'
import Button from '@mui/material/Button'
import eventAxios from "../../eventsAxios"

function SlugPage(props) {

  const { events, searchedDate: [year, month] } = props

  return (
    <>
      <Box sx={{ width: "85%", mx: "auto", mt: 2 }}>
        <Typography variant="h4">searched values for {monthArr[month - 1]} {year}</Typography>
        {
          !events.length && (
            <>
              <Typography variant="h5" color={red[500]}>no events where found</Typography>
              <Button variant="contained">
                <Link href="/events">BACK</Link>
              </Button>
            </>
          )
        }
      </Box>
      <EventsList events={events} /> :
    </>
  )
}

export async function getServerSideProps(context) {
  const searchValue = context.params.slug;
  const [year, month] = searchValue.map(n => Number(n));
  const { data: events } = await eventAxios.get("events")
  const foundedEvents = events.filter(event => {
    const [eventYear, eventMonth] = event.date.split("-").map(n => Number(n))
    console.log(eventYear, eventMonth, "--", year, month)
    return (eventYear === year) && (eventMonth === month)
  })

  return { props: { events: foundedEvents, searchedDate: [year, month] } }
}

export default SlugPage