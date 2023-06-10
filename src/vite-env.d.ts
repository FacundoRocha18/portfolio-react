/// <reference types="vite/client" />

export interface IRepository {
	id: number;
	name: string;
	description: string;
	html_url: string;
	stargazers_count?: number;
	watchers_count?: number;
	topics: string[];
}