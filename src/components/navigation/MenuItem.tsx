export const MenuItem = (props: { path: string, text: string, icon: string }) => {
	return (
		<>
			<li className="ml-8 font-semibold flex items-end justify-between">
				<a href={props.path}>{props.text} </a>
				<span className="material-symbols-rounded ml-2">
					{props.icon}
				</span>
			</li>
		</>
	)
}
