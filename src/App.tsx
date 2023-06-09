import './App.css'
import { Header, Hero, About } from './components'

export const App = () => {
	return (
		<>
			<Header />
			<hr className="destination" id="first-article" />
			<Hero />
			<hr className="destination" id="about" />
			<About />
		</>
	)
}