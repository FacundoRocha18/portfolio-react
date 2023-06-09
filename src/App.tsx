import './App.css'
import { Header, Hero, About, Services, Repositories, References, Contact } from './components'
import { useFetchRepos } from './hooks/useFetchRepos'

export const App = () => {
	const repos = useFetchRepos()

	return (
		<>
			<hr className="anchor" id="home" />
			<Header />
			<Hero />
			<hr className="anchor" id="about" />
			<About />
			<hr className="anchor" id="services" />
			<Services />
			<hr className="anchor" id="repositories"></hr>
			<Repositories repos={repos} />
			<hr className="anchor" id="references"></hr>
			<References />
			<hr className="anchor" id="contact"></hr>
			<Contact />
		</>
	)
}