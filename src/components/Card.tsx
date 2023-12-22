import Image from "next/image";
import logo from "../../public/logo.svg";
import Infos from "./Infos";
import location from "../../public/location.svg";
import followers from "../../public/followers.svg";
import following from "../../public/following.svg";
import generic from "../../public/genericpng.png";
import repository from "../../public/repository.svg";
import { InfoItem } from "../../interface/interfaces";
import { FaGithubAlt } from "react-icons/fa";
import Link from "next/link";

const infoItems: InfoItem[] = [
  {
    key: "followers",
    label: "Seguidores",
    icon: followers,
  },
  {
    key: "following",
    label: "Seguindo",
    icon: following,
  },
  {
    key: "public_repos",
    label: "Repositórios",
    icon: repository,
  },
  { key: "location", label: "", icon: location },
];

export default function Card({ borderColor, user }: any) {
  return (
    <main
      className={`flex flex-col p-8 sm:h-max sm:w-[42.5rem] sm:gap-10 rounded-lg border-[black] bg-woodsmoke-700 border-4 shadow-background shadow-2xl backdrop-blur-xl bg-opacity-10 ${borderColor}`}
    >
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-xl font-semibold">
          {user ? (user.name == null ? "Nome" : user.name) : "carregando..."}
        </h1>
        <p className="text-lg sm:text-sm font-light text-woodsmoke-200">
          {user ? (user.bio == null ? "Bio" : user.bio) : "carregando"}
        </p>
      </header>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-3 ">
          <Image
            alt={`${user?.login} profile picture`}
            className=" border-solid border-woodsmoke-800 border-2 rounded-full z-0"
            height={369}
            src={user?.avatar_url || generic}
            title={`${user?.login} profile picture`}
            width={369}
          />
          <Link
            href={`${user ? user.html_url : null}`}
            target="_blank"
            className="flex items-center gap-3 opacity-30"
          >
            <FaGithubAlt size={20} />
            <p>{user ? user.login : "carregando..."}</p>
          </Link>
        </div>
        <div className={`flex flex-col items-start mt-4 gap-[2px] `}>
          {infoItems.map((item) => (
            <Infos
              key={item.key}
              label={item.label}
              value={user ? user[item.key] : "carregando..."}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="flex justify-end gap-2 uppercase">
          <Image src={logo} height={32} alt="aa" className="  " />
          <h1>Rocketcard</h1>
        </div>
      </div>
    </main>
  );
}
