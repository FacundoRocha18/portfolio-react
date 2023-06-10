import './App.css'
import { Header, Hero, About, Services, Repositories, References } from './components'
import { useFetchRepos } from './hooks/useFetchRepos'

export const App = () => {
	const repos = useFetchRepos()

	return (
		<>
			<Header />
			<hr className="anchor" id="home" />
			<Hero />
			<hr className="anchor" id="about" />
			<About />
			<hr className="anchor" id="services" />
			<Services />
			<hr className="anchor" id="repositories"></hr>
			<Repositories repos={repos} />
			<hr className="anchor" id="references"></hr>
			<References />
		</>
	)
}