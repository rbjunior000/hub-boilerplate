'use client'

import { Container } from '@mui/material'
import { Button } from '@/components'

export default function HomePage() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Button>Concluido</Button>
      </Container>
    </>
  )
}
