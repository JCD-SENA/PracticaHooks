import { useState } from 'react'

export const Calculator = () => {
	const [firstValue, setFirstValue] = useState(0)
	const [secondValue, setSecondValue] = useState(0)
	const [res, setRes] = useState(0)

	return (
		<>
			<h2>Resultado: <b>{res}</b></h2>
			<input placeholder="Ingresar el primer valor" onChange={(e) => setFirstValue(parseInt(e.target.value))}></input>
			<input placeholder="Ingresar el segundo valor" onChange={(e) => setSecondValue(parseInt(e.target.value))}></input>
			<button onClick={() => setRes(firstValue + secondValue)}>Sumar</button>
			<button onClick={() => setRes(firstValue - secondValue)}>Restar</button>
			<button onClick={() => setRes(firstValue / secondValue)}>Dividir</button>
			<button onClick={() => setRes(firstValue * secondValue)}>Multiplicar</button>
		</>
	)
}