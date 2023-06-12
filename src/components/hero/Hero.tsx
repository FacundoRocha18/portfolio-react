import heroPhoto from '../../assets/img/WhatsApp Image 2021-12-30 at 22.54.31.png'
import name from '../../assets/img/Name-iso.png'

export const Hero = () => {
	return (
		<>
			<div className="flex flex-col m-0 w-full">
				<div className="my-16 mx-auto">
					<img src={heroPhoto} height={400} width={400} alt="Facundo Rocha´s photo" />
				</div>
				<div className="h-fit w-fit my-0 mx-auto">
					<div className="my-0 mx-auto">
						<img src={name} height={200} width={400} alt="Facundo Rocha" />
					</div>
					<hr className='h-1 bg-[#ABEBC6] border-[#ABEBC6] rounded'/>
					<div className="subtext mt-4">
						<h3>Desarrollador web Fullstack</h3>
					</div>
				</div>
			</div>
		</>
	)
}
