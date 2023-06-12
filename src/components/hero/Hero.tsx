import heroPhoto from '../../assets/img/WhatsApp Image 2021-12-30 at 22.54.31.png'
import name from '../../assets/img/Name-iso.png'

export const Hero = () => {
	return (
		<>
			<div className="flex flex-col m-0 w-full">
				<div className="my-16 mx-auto">
					<img src={heroPhoto} height={270} width={270} alt="Facundo Rocha´s photo" />
				</div>
				<div className="h-fit w-96 my-0 mx-auto">
					<div className="my-0 mx-auto">
						<img src={name} alt="Facundo Rocha" />
					</div>
					<hr />
					<div className="subtext">
						<h3>Fullstack web developer</h3>
					</div>
				</div>
			</div>
		</>
	)
}
