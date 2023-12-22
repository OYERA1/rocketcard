import Image from "next/image";
import { InfoItem } from "../../interface/interfaces";

export default function Infos({ label, value, icon }: InfoItem) {
  return (
    <ul className="flex gap-4">
      <Image src={icon} alt={label} width={20} height={20} />

      {value == null
        ? "Sem informação"
        : value == "carregando..."
        ? value
        : `${value} ${label}`}
    </ul>
  );
}
