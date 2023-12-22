import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form({ labels }: any) {
  const [username, setUsername] = useState("");
  const route = useRouter();

  function watchValue(e: React.ChangeEvent<HTMLInputElement>) {}

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username.length >= 1) {
      console.log("Submitted username:", username);
      route.push(`/Rocketcard/${username}`);
    } else {
      alert("Please enter a username");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="username" className="text-start">
        {labels}
      </label>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value), watchValue(e);
        }}
        min={1}
        type="text"
        id="username"
        className=" bg-zinc-800 shadow-inherit rounded outline-0"
      />
      <button
        type="submit"
        className="mt-10 bg-blue-900 p-4 rounded-xl hover:bg-blue-950 ease-in-out transition"
      >
        enviar
      </button>
    </form>
  );
}
