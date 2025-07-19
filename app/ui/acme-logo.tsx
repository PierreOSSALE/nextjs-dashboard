import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="https://res.cloudinary.com/db8hwgart/image/upload/v1750572635/logo_plnmj1.png"
        width={48}
        height={48}
        className="mr-2"
        alt="Ossale Logo"
      />
      <p className="text-[44px]">Ossale</p>
    </div>
  );
}
