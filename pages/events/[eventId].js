import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { getEventById } from '../../data/data';
import { red } from '@mui/material/colors';
import { Typography, Box, Button } from '@mui/material';
import eventAxios from "../../eventsAxios"

import EventDetail from '../../components/event-detail/event-detail';

function EventDetailPage(props) {
  const { post: event } = props
  
  return (
    <>
      {event ?
        <EventDetail eventDetail={event} /> :
        (
          <Box sx={{ display: "flex", height: "90vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography variant='h3' color={red[500]}>
              article did not found
            </Typography>
            <br />
            <Button size="large" variant="contained"><Link href="/">BACK</Link></Button>
          </Box>
        )
      }
    </>
  )
}

export async function getStaticProps(context) {
  const { eventId } = context.params
  const { data } = await eventAxios.get("/events")
  const postId = `${eventId[eventId.length - 2]}${eventId[eventId.length - 1]}`
  const post = data.find(article => article.id === postId)

  return {
    props: { post }
  }
}

export async function getStaticPaths() {
  const { data } = await eventAxios.get("/events")
  return {
    paths: data.map(({ title, id }) => ({ params: { eventId: `${title.replace(/\s/g, "-")}-${id}` } })),
    fallback: false
  }
}

export default EventDetailPage