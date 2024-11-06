import { NavbarItem } from "./NavbarItem/NavbarItem"

export const Navbar = () => {
	return (
		<nav>
			<ul className="flex row">
				<NavbarItem href="/calculator">useState - Calculadora</NavbarItem>
				<NavbarItem href="/randomBG">useState - Background Aleatorio</NavbarItem>
				<NavbarItem href="/register">useState - Registro</NavbarItem>
				<NavbarItem href="/listAssigments">useState - Lista Tareas</NavbarItem>
			</ul>
		</nav>
	)
}