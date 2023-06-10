import { IRepository } from "../../vite-env"
import { RepoCard } from "./RepoCard"

export const Repositories = (props: { repos: IRepository[] }) => {
	return (
		<div>
			<div className="recent-projects articles">
				<div className="center-title">
					<h2>Some of my recent projects</h2>
				</div>
				<div className="grid grid-cols-2 gap-6">
					{
						props.repos.map(repo => (
							<RepoCard key={repo.id} data={repo} /> 
						))
					}
				</div>
			</div>
		</div>
	)
}
