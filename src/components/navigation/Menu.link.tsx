import { Icon } from ".."

export const Link = (props: { path: string, text: string, icon: string }) => {
	return (
		<>
			<li className="ml-8">
				<a href={props.path} className="font-semibold flex items-center justify-between hover:text-[#ABEBC6]">
					{props.text}
					<Icon type={props.icon} />
				</a>
			</li>
		</>
	)
}
