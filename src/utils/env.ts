type Envs = 'NEXT_PUBLIC_API_SAAS_URL'

export const env = (value: Envs) => {
  const prop = process.env[value]

  if (prop === undefined) {
    throw Error(`Missng env ${value}`)
  }

  return prop
}
