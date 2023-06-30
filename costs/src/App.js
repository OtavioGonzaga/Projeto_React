import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/views/Home'
import Contact from './components/views/Contact.js'
import Projects from './components/views/Projects.js'
import NewProject from './components/views/NewProject.js'
import EditProject from './components/views/EditProject.js'
import Navbar from './components/static/Navbar'
import Footer from './components/static/Footer'
import Container from './components/layouts/Container'
export default function App() {
	return (
    	<>
		<Router>
			<Navbar />
			<Container customClass='min-height' >
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/contato' element={<Contact />} />
					<Route path='/projetos' element={<Projects />} />
					<Route path='/novoprojeto' element={<NewProject />} />
					<Route path='/projetos/:id' element={<EditProject />} />
				</Routes>
			</Container>
		</Router>
		<Footer />
		</>
  )
}