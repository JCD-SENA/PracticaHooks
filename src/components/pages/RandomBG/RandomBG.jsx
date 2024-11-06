import { useState } from 'react'

export const RandomBG = () => {
	const [red, setRed] = useState(0)
	const [green, setGreen] = useState(0)
	const [blue, setBlue] = useState(0)

	const randValue = () => parseInt(Math.random() * 256)

	return (
		<div className="flex-col flex items-center justify-center h-full w-full" style={{
			backgroundColor: `rgb(${red}, ${green}, ${blue})`
		}}>
			<button className="bg-transparent" onClick={() => {
				setRed(randValue())
				setGreen(randValue())
				setBlue(randValue())
			}}>Color aleatorio</button>
		</div>
	)
}