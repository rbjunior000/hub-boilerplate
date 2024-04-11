import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Button, Stack, TextField } from '@mui/material'
import { useForm } from '@/hooks'
import { loginSchema } from './schema'

type LoginInput = {
  email: string
  password: string
}

export type LoginProps = {
  onSubmit: SubmitHandler<LoginInput>
  defaultValues?: LoginInput
}

export const LoginForm = ({ onSubmit, defaultValues }: LoginProps) => {
  const form = useForm<LoginInput>({
    initialValues: defaultValues,
    schema: loginSchema,
  })
  return (
    <form {...form} onSubmit={form.onSubmit(onSubmit)} style={{ maxWidth: '400px' }}>
      <Stack gap={2}>
        <TextField
          size="small"
          label="Email"
          placeholder="Digite seu email"
          {...form.getInputProps('email')}
        />
        <TextField
          size="small"
          aria-label="Senha"
          label="Password"
          placeholder="Digite sua senha"
          {...form.getInputProps('password')}
        />
      </Stack>
      <Stack gap={2} mt={2}>
        <Button variant="contained" type="submit">
          Logar
        </Button>
        <Button variant="text">Recuperar senha?</Button>
      </Stack>
    </form>
  )
}
