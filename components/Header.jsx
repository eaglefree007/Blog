import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 sm:py-0">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex ">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>design</Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={"/"}>
              <ImFacebook />
            </Link>
            <Link href={"/"}>
              <ImTwitter />
            </Link>
            <Link href={"/"}>
              <ImYoutube />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
