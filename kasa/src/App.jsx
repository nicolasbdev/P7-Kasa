import Header from "./Components/Header"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Logement from "./Pages/Logement"
import Error from "./Pages/Error"
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () =>{
	return (
		<BrowserRouter>
		<Header/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="logements/:id" element={<Logement/>}/>
			<Route path="*" element={<Error/>}/>


		
		</Routes>
		<Footer/>
		</BrowserRouter>
	);
}

export default App