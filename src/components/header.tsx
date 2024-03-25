import { auth } from "@/services/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";


export default async function Header() {

  const session = await auth()

  return (
    <main>
      <header className="bg-orange-500 shadow-lg">
        <div className="container flex items-center justify-between h-14 px-4 sm:px-6">
          <Link
            className="flex items-center space-x-2 text-sm font-medium tracking-widest text-gray-50 hover:underline dark:text-gray-950"
            href="#"
          >
            <SewingPinFilledIcon className="w-5 h-5" />
            <span>Sprint3d</span>
          </Link>
          <nav className="hidden space-x-4 text-sm lg:flex">
            <Link className="font-medium text-gray-100 hover:underline dark:text-gray-950" href="#Orçamento">
              Orçamento
            </Link>
            <Link className="font-medium text-gray-100 hover:underline dark:text-gray-950" href="#Produto">
              Produto
            </Link>
            <Link className="font-medium text-gray-100 hover:underline dark:text-gray-950" href="#Contato">
              Contato
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <h1 className="text-gray-100 hover:underline dark:text-gray-950" href="#">
              {session?.user?.email}
            </h1>
            <Avatar className="h-8 w-8">
              <AvatarImage alt="User" src="/placeholder-user.jpg" />
              <AvatarFallback>{session?.user?.email[0]}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </main>
  )
}