'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type QueryParamValue = string | undefined
type QueryStates<T extends string> = Record<T, QueryParamValue>

export const useQuery = <T extends string>(
  queryParamNames: T[]
): [QueryStates<T>, Dispatch<SetStateAction<QueryStates<T>>>] => {
  const initParams = useSearchParams()
  const [state, setState] = useState<QueryStates<T>>(
    queryParamNames
      .map((key) => (initParams?.get(key) ? { [key]: initParams.get(key) } : {}))
      .reduce((acc, cur) => ({ ...acc, ...cur }), {}) as QueryStates<T>
  )

  useEffect(() => {
    const params = new URLSearchParams()
    queryParamNames.forEach((key) => {
      const value = state[key]
      if (value) {
        params.set(key, value)
      }
    })
    const url = params.size ? `?${params.toString()}` : ''
    window.history.replaceState(window.history.state, '', url)
  }, [state, queryParamNames])

  // const updateState = (key: T, value: QueryParamValue) => {
  //   setState((prevState) => {
  //     const newState = { ...prevState }
  //     newState[key] = value
  //     return newState
  //   })
  // }

  return [state, setState]
}
