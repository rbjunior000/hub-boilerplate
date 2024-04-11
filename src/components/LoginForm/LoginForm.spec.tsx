import React from 'react'
import { LoginForm } from './LoginForm'
import { render, screen, userEvent } from '@/test-utils'

describe('LoginForm', () => {
  it('renders without crashing', () => {
    const onSubmit = jest.fn()

    render(<LoginForm onSubmit={onSubmit} />)

    expect(screen.getByText('Logar')).toBeInTheDocument()
  })

  it('handles form submission messages errors', async () => {
    const submit = jest.fn()

    render(<LoginForm onSubmit={submit} />)

    await userEvent.click(screen.getByRole('button', { name: 'Logar' }))

    expect(submit).not.toHaveBeenCalled()

    expect(screen.getAllByText('Obrigatório')).toHaveLength(2)
  })
  it('handles input changes', async () => {
    const submit = jest.fn()
    render(<LoginForm onSubmit={submit} />)

    const email = screen.getByPlaceholderText('Digite seu email')
    const password = screen.getByPlaceholderText('Digite sua senha')

    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()

    expect(email).toHaveValue('')
    expect(password).toHaveValue('')

    await userEvent.type(email, 'email@gmail.com')
    await userEvent.type(password, '123456')

    expect(email).toHaveValue('email@gmail.com')
    expect(password).toHaveValue('123456')

    await userEvent.click(screen.getByRole('button', { name: 'Logar' }))

    expect(submit).toHaveBeenCalled()
  })
})
