/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler } from 'react-hook-form'

type LoginInput = {
  email: string
  password: string
}

export type LoginProps = {
  onSubmit: SubmitHandler<LoginInput>
  defaultValues?: LoginInput
}

export const LoginForm = (props: LoginProps) => <></>
