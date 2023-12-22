import Image from "next/image";
import logo from "../../public/logo.svg";
import Infos from "./Infos";
import location from "../../public/location.svg";
import followers from "../../public/followers.svg";
import following from "../../public/following.svg";
import generic from "../../public/genericpng.png";
import repository from "../../public/repository.svg";
import { InfoItem } from "../../interface/interfaces";

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

export default function Card({ borderColor, user, image }: any) {
  return (
    <main
      id={image}
      className={`flex flex-col p-8 w-[25.43rem] h-max overflow-hidden gap-16 rounded-lg border-[black] border-[1rem] shadow-background shadow-2xl ${borderColor}`}
    >
      <header className="flex items-center gap-4">
        <div className="flex justify-center border-solid border-[1px] w-12 h-12 border-textWhite rounded-full">
          <Image src={logo} height={32} alt="Logo" />
        </div>
        <h1> {user ? user.login : "carregando..."}</h1>
      </header>
      <div className="flex flex-col">
        <Image
          alt={`${user?.login} profile picture`}
          className=" ml-16 border-solid border-borderPurple border-[10px] rounded-full z-0"
          height={369}
          src={user?.avatar_url || generic}
          title={`${user?.login} profile picture`}
          width={369}
        />
        <div
          className={`bg-background w-max rounded-xl p-2 -mt-10 z-0 backdrop-blur-sm bg-opacity-50`}
        >
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
