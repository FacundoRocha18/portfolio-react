export const Icon = (props: { type: string }) => {
	return (
		<>
			<span className="material-symbols-rounded ml-2">
				{props.type}
			</span>
		</>
	)
}
