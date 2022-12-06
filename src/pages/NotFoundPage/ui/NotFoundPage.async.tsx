import { lazy } from 'react'

export const NotFoundPageAsync = lazy(async () => await import('./NotFoundPage'))
