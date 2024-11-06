import { NavLink } from "react-router-dom"

export const NavbarItem = ({ href, children }) => {
	return (
		<li className="ml-5 mr-5 hover:text-black p-2 hover:bg-amber-500 rounded-xl pl-3 pr-3">
			<NavLink to={href}>{children}</NavLink>
		</li>
	)
}