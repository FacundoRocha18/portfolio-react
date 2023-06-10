import { IRepository } from "../../vite-env"

export const RepoCard = (props: { data: IRepository }) => {
	const { data } = props;

	return (
		<div>
			<div className="grid-item bg-slate-800/90 rounded-3xl">
				<div className="text-bx">
					<a href={data.html_url} target="_blank">
						<h3 className="font-medium">{data.name}</h3>
					</a>
					<p>{data.description}</p>
					<p>{data.topics}</p>
				</div>
			</div>
		</div>
	)
}
