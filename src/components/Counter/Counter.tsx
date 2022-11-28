import { useState } from 'react'
import cls from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<button className={cls.btn} onClick={increment}>
				+
			</button>
			<h1>{count}</h1>
		</div>
	)
}
