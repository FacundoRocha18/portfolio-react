import { MenuItem } from "./MenuItem"

export const Menu = () => {
	return (
		<div>
			<div className="bg-slate-800/90 w-fit h-fit rounded-3xl px-16 py-14 flex items-center justify-center">
				<nav id="menu">
					<ul className="flex flex-row h-fit">
						<MenuItem path="#home" text="Home" icon="home" />
						<MenuItem path="#about" text="About" icon="" />
						<MenuItem path="#services" text="Services" icon="" />
						<MenuItem path="#repositories" text="Repositories" icon="" />
						<MenuItem path="#references" text="References" icon="" />
						<li className="contact-btn ml-8 font-semibold">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
