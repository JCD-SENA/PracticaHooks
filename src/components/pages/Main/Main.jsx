import { useState } from 'react'

export const Main = () => {
	const [name, setName] = useState()

	return (
		<>
			<h2>Hola {name}</h2>
			<input placeholder="Ingresar nombre" onChange={(e) => setName(e.target.value)}></input>
		</>
	)
}