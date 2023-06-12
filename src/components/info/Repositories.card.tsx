import { IRepository } from "../../vite-env"

export const RepoCard = (props: { data: IRepository }) => {
	const { data } = props;

	console.log(data.topics)

	return (
		<div className="grid-item border-[#ABEBC6] border-2 rounded-3xl flex flex-col gap-12">
			<a href={data.html_url} target="_blank">
				<h3>{data.name}</h3>
			</a>
			<p>{data.description}</p>
			<div className="flex flex-wrap items-center gap-4">
				<p>Tecnologías:</p>
				{
					data.topics.map((topic: string) => (
						<p className="bg-[#ABEBC6] text-slate-950 rounded-3xl px-4 py-2 text-center">{topic}</p>
					))
				}
			</div>
		</div>
	)
}
