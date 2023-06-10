import { useState, useEffect } from "react"
import { fetchRepos } from "../api/fetchRepos"
import { IRepository } from "../vite-env"

export const useFetchRepos = () => {
	const [repos, setRepos] = useState<IRepository[]>([])

	useEffect(() => {
		fetchRepos()
			.then((repositories) => {
				console.log(repositories)
				setRepos(repositories)
			})
			.catch((err) => console.log(err))
	}, [])
	
	return repos;
}