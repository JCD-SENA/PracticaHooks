import { Routes, Route } from "react-router-dom"

import { Header } from './components/containers/Header/Header'
import { Main } from './components/pages/Main/Main'
import { Calculator } from "./components/pages/Calculator/Calculator"
import { RandomBG } from "./components/pages/randomBG/RandomBG"
import { Registry } from "./components/pages/Registry/Registry"
import { ListAssigment } from "./components/pages/ListAssigment/ListAssigment"

function App() {
	return (
		<>
			<Header/>
			<main className="flex-col flex items-center justify-center">
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/calculator" element={<Calculator/>}/>
					<Route path="/randomBG" element={<RandomBG/>}/>
					<Route path="/register" element={<Registry/>}/>
					<Route path="/listAssigments" element={<ListAssigment/>}/>
				</Routes>
			</main>
		</>
	)
}

export default App