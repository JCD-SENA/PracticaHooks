import { useState } from 'react'

export const ListAssigment = () => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

	return (
		<>
            <h2 className="font-bold">{name}</h2>
            <p className="w-80">{desc}</p>
            <br/>
            <input placeholder="Ingrese el nombre de la tarea" className="w-64" onChange={(e) => setName(e.target.value)}/>
            <textarea placeholder="Ingrese la descripción de la tarea" className="w-64 h-32" onChange={(e) => setDesc(e.target.value)}></textarea>
        </>
	)
}