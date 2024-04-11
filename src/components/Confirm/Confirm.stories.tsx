import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from '@/utils'
import { Button } from '../Button'
import { confirm } from '../Modal/modal-store'
import { TextField } from '../TextField'
import { Typography } from '../Typography'

export default {
  title: 'Components/Confirm',
  component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Abrir confirm</Button>

export const Default = Template.bind({})
Default.args = {
  onClick: () => {
    confirm({ title: 'Confirm', confirm: () => {} })
  },
}

export const WithAsyncConfirm = Template.bind({})
WithAsyncConfirm.args = {
  onClick: () => {
    confirm({
      title: 'Confirm',
      confirm: async () => {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000)
        })
      },
    })
  },
}

const schema = z.object({
  email: z.string().email(),
})

const FormExample = () => {
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  })

  return (
    <form {...form} id="formId" onSubmit={form.handleSubmit((values) => console.log({ values }))}>
      <Typography variant="body2">
        Você está visualizando os dados cadastrados do usuário Deseja atualizar o email desse
        usuário?
      </Typography>
      <Stack gap={2}>
        <TextField
          disabled
          defaultValue="lindberg.pinheiro@gmail.com"
          size="small"
          label="Atual"
          fullWidth
        />
        <TextField
          size="small"
          label="Novo"
          fullWidth
          {...form.register('email')}
          error={!!form.getFieldState('email').error?.message}
          helperText={form.formState.errors.email?.message}
        />
      </Stack>
    </form>
  )
}

const Example: StoryFn<typeof Button> = () => {
  const modalRef = useRef('')
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  })
  const confirmProps: any = {
    title: 'Alterar email',
    modalProps: {
      maxWidth: 'xs',
      fullWidth: true,
    },
    children: <FormExample />,
    confirmButtonProps: {
      type: 'submit',
    },
    confirm: () => {},
  }

  // useWatch(() => {
  //   updateModal(modalRef.current, confirmProps)
  // }, [form.formState.errors])

  return (
    <>
      <TextField
        size="small"
        label="Novo"
        fullWidth
        {...form.register('email')}
        error={!!form.getFieldState('email').error?.message}
        helperText={form.formState.errors.email?.message}
      />
      <Button
        onClick={() => {
          const id = confirm({ ...confirmProps, confirmText: 'Concluído' })
          modalRef.current = id
        }}
      >
        Trocar email
      </Button>
    </>
  )
}

export const SwitchEmail = Example.bind({})
SwitchEmail.args = {
  onClick: () => {},
}
