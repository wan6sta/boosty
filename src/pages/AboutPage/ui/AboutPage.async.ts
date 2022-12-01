import { lazy } from 'react'

export const AboutPageAsync = lazy(
  async () =>
    await new Promise(resolve => {
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./AboutPage'))
      }, 1000)
    })
)
