"use client";

import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col bg-backgroundCard h-screen items-center p-16 gap-40 ">
      <p>Insira seu nome de usuario github!</p>
      <Form labels="Nome de usuário:" />
    </main>
  );
}
