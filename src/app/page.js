'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Typography } from '@mui/material';
import { CRAVEKAVA, FUELMEMORIESWEBSITESS, HANDCARVEDTURTLESWEBSITESS, LUXEINTERIORSWEBSITESS, MENTALWELLNESSWEBSITESS, ORIONPERFORMANCEWEBSITESS, SECUREBOTWEBSITESS, TALLKWEBSITESS } from '@/values/Constants/ImageConstants';

const images = [
  {
    ss: SECUREBOTWEBSITESS,
    title: 'SecureBot Website',
    url: '/secure-bot-ai'
  },
  {
    ss: TALLKWEBSITESS,
    title: 'Tallk Website',
    url: '/tallk'
  },
  {
    ss: FUELMEMORIESWEBSITESS,
    title: 'Fuel Memories Website',
    url: '/fuel-memories'
  },
  {
    ss: ORIONPERFORMANCEWEBSITESS,
    title: 'Orion Performance Website',
    url: '/orion-performance'
  },
  {
    ss: LUXEINTERIORSWEBSITESS,
    title: 'Luxe Interiors Website',
    url: '/luxe-interiors'
  },
  {
    ss: MENTALWELLNESSWEBSITESS,
    title: 'Mental Wellness Website',
    url: '/mental-wellness'
  },
  {
    ss:CRAVEKAVA,
     title: 'Crave Kava Website',
    url: '/crave-kava'
  },
  {
    ss: HANDCARVEDTURTLESWEBSITESS,
    title: 'Hand Carved Turtles Website',
    url: '/hand-carved-turtles'
  }
];

export default function Home() {

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" align="center" color={'#0A4E91'}>
        Landing Pages
      </Typography>
      <Grid container spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
        }}
      >
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onClick={() => {
                window.open(image.url, '_blank');
              }}
              sx={{
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <CardMedia
                component="img"
                height={300}
                image={image.ss}
                alt={image.title}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <Typography variant="h6" align="center" color={'#0A4E91'}>
                {image.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}