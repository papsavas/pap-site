import { GithubRepo } from "../types/github";

const username = "papsavas"

// @ts-ignore
// TODO: type
const fetcher = (...args) => fetch(...args).then(res => res.json())

const fetchGithubUser = () => fetcher(`https://api.github.com/users/${username}`);

const fetchGithubRepos = () => fetcher(`https://api.github.com/users/${username}/repos`) as Promise<GithubRepo[]>

export { fetchGithubRepos };

