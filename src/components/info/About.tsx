import curriculum from '../../assets/files/Facundo Rocha CV.pdf'

export const About = () => {
	return (
		<div>
			<div className="website-about-content articles">
				<div className="text-center">
					<h2>Let me introduce myself</h2>
				</div>
				<div className="presentation-wrapper">
					<div className="name-wrapper">
						<h3>About me</h3>
					</div>
					<div className="text-wrapper">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut arcu consequat
							libero
							accumsan placerat a sit amet lacus. Phasellus fringilla, erat eget elementum
							rhoncus,
							tortor eros lobortis augue, ut dignissim lacus neque sit amet odio. Duis quis orci
							odio.
							Quisque accumsan lacus nisi, eu condimentum ligula varius sit amet. Cras accumsan
							urna
							sit amet risus pretium, ac dignissim lacus convallis. Suspendisse quis semper justo.
						</p>
					</div>
					<a href={curriculum} target="_blank" className="link-cv-btn">My
						resumee</a>
				</div>
			</div>
		</div>
	)
}
