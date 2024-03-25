import Link from "next/link";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="border-t">
    <div className="container flex flex-col gap-4 items-center py-8 md:flex-row md:gap-8 md:py-12 lg:gap-12 lg:py-16 xl:gap-16 xl:py-20">
      <Link
        className="flex items-center space-x-2 text-sm font-medium tracking-widest text-gray-900 hover:underline dark:text-gray-50"
        href="#"
      >
        <SewingPinFilledIcon className="w-5 h-5" />
        <span>Sprint3d</span>
      </Link>
      <p className="text-center text-sm text-gray-500 md:text-base dark:text-gray-400">
        {`
                        © 2023 Sprint3d Inc. All rights reserved. | Feito com o <3 by the
                        Sprint3d team
                      `}
      </p>
      <nav className="flex items-center space-x-4 text-sm lg:justify-end lg:ml-auto lg:space-x-2">
        <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
          Home
        </Link>
        <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
          Produto
        </Link>
        <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
          Orçamento
        </Link>
        <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
          Contato
        </Link>
      </nav>
    </div>
  </footer>
  )
}