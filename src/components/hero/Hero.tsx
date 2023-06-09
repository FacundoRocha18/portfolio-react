import heroPhoto from '../../assets/img/WhatsApp Image 2021-12-30 at 22.54.31.png'
import name from '../../assets/img/Name-iso.png'

export const Hero = () => {
	return (
		<>
			<div className="website-first-content articles">
				<div className="main-content-image-wrapper">
					<img src={heroPhoto} alt="Facundo Rocha´s photo" />
				</div>
				<div className="main-content-text-wrapper">
					<div className="image"><img src={name} alt="Facundo Rocha" /></div>
					<hr />
					<div className="subtext">
						<h3>Fullstack web developer</h3>
					</div>
				</div>
			</div>
		</>
	)
}
