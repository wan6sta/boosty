import { lazy } from 'react'

export const AboutPageAsync = lazy(
	() =>
		new Promise(res => {
			setTimeout(() => {
				//@ts-ignore
				res(import('./AboutPage'))
			}, 1000)
		})
)
