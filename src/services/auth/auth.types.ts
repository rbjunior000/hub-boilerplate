export type SignInInput = {
  email: string
  password: string
}

type UserData = {
  name: string
  id: string
}

export type IAuthRoutes = {
  me: (token: string) => Promise<UserData>
  signIn: (data: Partial<SignInInput>) => Promise<UserData>
  signOut: () => void
}
