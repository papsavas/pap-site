import { FC } from "react";
import { SocialMedia } from "../types/socialMedia";

const MediaRedirect: FC<SocialMedia> = ({ name, redirect, iconPath }) => {
  return (
    <a
      href={redirect}
      target="_blank"
      className={`
        flex flex-row items-center  w-56 px-5 rounded-2xl
        hover:shadow-md hover:cursor-pointer
        text-black hover:bg-gray-200
        dark:text-white dark:hover:bg-slate-600
       `}
    >
      <img src={iconPath} className="h-12 w-12" />
      <p className="pl-2 text-black dark:text-slate-300">{name}</p>
    </a>
  );
};

export default MediaRedirect;
