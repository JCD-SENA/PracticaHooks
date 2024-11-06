import { Navbar } from "../../UI/Navbar/Navbar"

export const Header = () => {
	return (
		<header className="bg-black p-3 text-white flex justify-around items-center">
			<h1 className="text-3xl font-bold">Practica hooks</h1>
			<Navbar/>
		</header>
	)
}