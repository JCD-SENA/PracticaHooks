import { useState } from 'react'

export const Registry = () => {
	let users = [];

	const [name, setName] = useState("")
	const [user, setUser] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [id, setId] = useState("")

	return (
		<form className="w-1/6">
			<h2>Registrar</h2>
			<input type="text" className="w-full" placeholder="Ingrese el nombre" onChange={(e) => setName(e.target.value)} required/>
			<input type="text" className="w-full" placeholder="Ingrese el usuario" onChange={(e) => setUser(e.target.value)} required/>
			<input type="email" className="w-full" placeholder="Ingrese el correo" onChange={(e) => setEmail(e.target.value)} required/>
			<input type="phone" className="w-full" placeholder="Ingrese el teléfono" onChange={(e) => setPhone(e.target.value)} required/>
			<input type="text" className="w-full" placeholder="Ingrese el id" onChange={(e) => setId(e.target.value)} required/>
			<input type="submit" className="w-full" value="Registrarse" onClick={(e) => {
				e.preventDefault()
				if (name.length < 1 || user.length < 1 || email.length < 1 || phone.length < 1 || id.length < 1) {
					alert("Se deben ingresar todos los valores del formulario")
				} else {
					let userData = {
						"name": name,
						"user": user,
						"email": email,
						"phone": phone,
						"id": id
					}
					const check = () => {
						let res = false
						users.forEach((v) => {
							if (v.name == name &&
								v.user == user &&
								v.email == email &&
								v.phone == phone &&
								v.id == id && !res) {
								res = true
							}
						})
						return res
					}
					if (check()) {
						alert("El usuario ya está registrado")
					} else {
						users.push(userData)
						alert("Usuario registrado")
					}
				}
			}}/>
		</form>
	)
}