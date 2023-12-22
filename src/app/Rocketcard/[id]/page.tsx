"use client";

import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { useRouter } from "next/navigation";
import { User } from "../../../../interface/interfaces";
import Form from "@/components/Form";

interface IdProps {
  params: {
    id: string;
  };
}

type ColorTypes = string;

export default function Rocketcard(id: IdProps) {
  const [borderColor, setBorderColor] = useState("border-[black]");
  const [user, setUser] = useState<User>();
  const route = useRouter();
  const username = id.params.id;

  const colors = [
    "border-borderPurple",
    "border-[red]",
    "border-[blue]",
    "border-[black]",
    "border-[yellow]",
  ];

  function getNextColor(currentColor: ColorTypes) {
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;

    return colors[nextIndex];
  }

  useEffect(() => {
    console.log("teste");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error(`Usuário: ${username} não encontrado!`);
        }
        const data = await response.json();
        setUser(data);
      } catch (err: any) {
        console.error(err);
        alert(err.message);
        route.push("/");
      }
    };
    fetchData();
  }, [username, route]);

  return (
    <main className="bg-backgroundCard flex justify-around h-screen p-16 gap-36">
      <div className="flex flex-col items-center gap-2">
        <h1>Compartilhe seu #Rocketcard</h1>
        <Card
          borderColor={borderColor}
          user={user}
          image={"component-to-image"}
        />
      </div>
      <aside className="flex flex-col text-center items-center justify-center gap-20">
        <Form labels="Procurar outro perfil github!" />
        <div className="flex flex-col gap-4">
          <h1>Customizar Rocketcard</h1>
          <button
            onClick={() => setBorderColor(getNextColor(borderColor))}
            className="py-6 px-8 bg-background rounded-xl"
          >
            Gerar background
          </button>
        </div>
      </aside>
    </main>
  );
}
