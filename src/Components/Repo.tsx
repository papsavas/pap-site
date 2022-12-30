import { FC } from "react";
import { GithubRepo } from "../types/github";

const Repo: FC<GithubRepo> = ({
  name,
  description,
  stargazers_count,
  html_url,
}) => {
  return (
    <a
      href={html_url}
      target="_blank"
      className="flex flex-col justify-start h-full p-3 text-text dark:text-text-dark 
      bg-grid dark:bg-grid-dark rounded-lg min-w-full group"
    >
      <div className="flex flex-row items-center justify-evenly  min-w-full">
        <h2 className="font-bold">{name}</h2>
        <div className="flex flex-row items-center">
          <h2 className="">{stargazers_count}</h2>
          <div className="group-hover:animate-bounce">⭐</div>
        </div>
      </div>
      <p className="mt-2">{description}</p>
    </a>
  );
};

export default Repo;
