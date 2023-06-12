import { Link } from "./Menu.link"

export const Menu = () => {
	return (
		<div>
			<div className="bg-slate-800/90 w-fit h-fit rounded-3xl p-16 flex items-center justify-center">
				<nav id="menu">
					<ul className="flex flex-row h-fit">
						<Link path="#home" text="Inicio" icon="home" />
						<Link path="#about" text="Sobre mi" icon="" />
						<Link path="#services" text="Conocimientos" icon="" />
						<Link path="#repositories" text="Proyectos" icon="" />
						<Link path="#references" text="Referencias" icon="" />
						<li className="contact-btn ml-8 font-semibold">
							<a href="#contact">Contacto</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
