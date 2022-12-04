/** @jsxImportSource @emotion/react */

'use client'

import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '~/src/components/Link'
import ProTip from '~/src/components/ProTip'

import Button from '@mui/material/Button'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Button variant="contained">Hello World</Button>
        <ProTip />
      </Box>
    </Container>
  )
}
