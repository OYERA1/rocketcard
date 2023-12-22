"use client";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [user, setUser] = useState({});

  function handleUserSubmit(e: any) {
    setUser(e);
  }

  console.log(user);

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <main className="flex h-screen flex-col items-center justify-center sm:justify-center flex-wrap px-10 pt-5 sm:pt-16 gap-8 bg-gradient-to-br from-gray-700 via-gray-900 to-black">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <Card user={user} />
            <Form
              labels="Procurar outro perfil github!"
              onSubmit={handleUserSubmit}
            />
            <button
              className=" border-woodsmoke-600 px-2 py-1 rounded-lg hover:bg-woodsmoke-800 ease-in-out transition "
              onClick={() => setUser({})}
            >
              limpar
            </button>
          </div>
          <Footer />
        </main>
      ) : (
        <main className="flex flex-col flex-wrap h-screen items-center sm:pt-16 pt-16 gap-8 bg-gradient-to-br from-gray-700 via-gray-900 to-black ">
          <p className="text-xl font-bold">Insira seu nome de usuário github</p>
          <div className="flex flex-col items-center  py-24 px-16  sm:px-16 sm:py-6 gap-16 border-2 rounded-xl border-[black] bg-woodsmoke-700 shadow-background shadow-2xl backdrop-blur-xl bg-opacity-10">
            <FaGithub size={250} className="text-zinc-200" />
            <Form labels="Nome de usuário:" onSubmit={handleUserSubmit} />
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}
