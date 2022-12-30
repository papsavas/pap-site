import useSWR from "swr";
import { fetchGithubRepos } from "../api/fetcher";
import Repo from "../Components/Repo";
import SectionHeader from "../Components/SectionHeader";

const Code = () => {
  const { data, error, isLoading } = useSWR("gh-repos", fetchGithubRepos);
  if (isLoading) return <>Loading...</>;
  return (
    <div>
      <SectionHeader name="Code" />
      <div className="flex flex-col gap-3 mt-10 mx-5">
        <p className="text-2xl text-center text-text dark:text-text-dark">
          Repositories:
        </p>
        <div className="grid grid-flow-cols grid-cols-2 lg:grid-cols-4 place-items-center gap-3">
          {data
            ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map((d) => (
              <Repo {...d} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Code;
