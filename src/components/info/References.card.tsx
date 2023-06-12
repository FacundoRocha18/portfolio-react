import image from '../../assets/img/person 1.png'

export const ReferenceCard = () => {
	return (
		<>
			<div className="testiminals-item">
				<div className="testimonials-content">
					<div className="testimonials-item-img">
						<img src={image} alt="" />
					</div>
					<div className="testimonials-item-name">
						<h3>Person 1</h3>
						<p>Customer</p>
					</div>
				</div>
				<div className="testimonials-text">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo hic fuga facere fugit
						ullam vitae impedit, accusantium quae.</p>
				</div>
			</div>
		</>
	)
}
