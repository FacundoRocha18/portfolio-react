export const Header = () => {
	return (
		<>
			<header className="bg-slate-900 sticky top-0 p-12 w-full flex flex-row items-center justify-center" id="header">
				
				<nav className="" id="menu">
					<ul className="flex flex-row ">
						<li className="ml-8"><a href="#first-article">Home</a></li>
						<li className="ml-8"><a href="#about">About</a></li>
						<li className="ml-8"><a href="#services">Services</a></li>
						<li className="ml-8"><a href="#projects">Projects</a></li>
						<li className="ml-8"><a href="#testimonials">Testimonials</a></li>
						<li className="contact-nav-btn ml-8"><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>
		</>
	)
}
