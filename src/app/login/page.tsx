'use client'

import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { LoginForm } from '@/components'
import { useRequest, useRouter } from '@/hooks'
import { authService } from '@/services'

const LoginPage: React.FC = () => {
  const router = useRouter()
  const [fetch, { data }] = useRequest(authService.signIn)

  return (
    <Container>
      <Typography>HubLocal</Typography>
      {JSON.stringify(data)}

      <Paper>
        <LoginForm
          onSubmit={({ email, password }) => {
            fetch(
              {
                email,
                password,
              },
              {
                onSuccess: () => {
                  router.push('/')
                },
              }
            )
          }}
        />
      </Paper>
    </Container>
  )
}
export default LoginPage
