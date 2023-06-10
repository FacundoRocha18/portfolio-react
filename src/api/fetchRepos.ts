import { IRepository } from "../vite-env";

export const fetchRepos = async (): Promise<IRepository[]> => {
	const response = await fetch('https://api.github.com/users/facundorocha18/repos');
	const data = await response.json();

	const repositories = data.map((repo: IRepository) => {
		return {
			id: repo.id,
			name: repo.name,
			description: repo.description,
			html_url: repo.html_url,
			topics: repo.topics
		}
	})

	return repositories;
}