import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form({ labels, onSubmit }: any) {
  const [username, setUsername] = useState("");
  const route = useRouter();

  function watchValue(e: React.ChangeEvent<HTMLInputElement>) {}

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error(`Usuário: ${username} não encontrado!`);
      }

      const data = await response.json();
      onSubmit(data);
    } catch (err: any) {
      console.error(err);
      alert(err.message);
      route.push("/");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex 
      flex-col items-center gap-5 sm:gap-20"
    >
      <label htmlFor="username" className="sm:text-base text-2xl">
        {labels}
      </label>
      <div className="flex flex-col p-4 sm:p-0 gap-4 sm:gap-0">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value), watchValue(e);
          }}
          min={1}
          type="text"
          id="username"
          autoComplete="off"
          className="text-xl sm:text-base bg-zinc-300 shadow-inherit rounded outline-0 py-1 pl-2 font-bold text-woodsmoke-800"
        />
        <button
          type="submit"
          className="mt-4 sm:mt-10 border-woodsmoke-600 border-2 p-4 rounded-xl hover:bg-woodsmoke-800 ease-in-out transition"
        >
          enviar
        </button>
      </div>
    </form>
  );
}
