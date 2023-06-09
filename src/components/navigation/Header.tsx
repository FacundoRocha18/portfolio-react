export const Header = () => {
	return (
		<>
			<header className="fixed left-0 top-0 w-full flex flex-row items-center justify-between" id="header">
				<div className="">
					<h1 className="text-[#ABEBC6]">Porfolio</h1>
				</div>
				<nav className="" id="menu">
					<ul className="flex flex-row">
						<li><a href="#first-article">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#services">Services</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#testimonials">Testimonials</a></li>
						<li className="contact-nav-btn"><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>
		</>
	)
}
