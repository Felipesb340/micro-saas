import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from 'next/image';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-12 lg:py-24 xl:py-32" id='Orçamento'>
          <div className="container grid items-center gap-6 px-4 text-center lg:grid-cols-2 lg:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl/line-tight/none">
                Imortalize momentos especiais
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">

              </p>
              <form className="mx-auto max-w-sm space-y-2 sm:max-w-md">
                <Button>
                  <Link href="/auth" type="submit">Solicite seu orçamento</Link>
                </Button>
              </form>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="500"
              src="/images/pessoa1.jpg"
              width="600"
            />
          </div>
        </section>
        <section className="py-12 lg:py-24 xl:py-32" id='Produto'>
          <div className="container grid items-center gap-6 px-4 text-center lg:grid-cols-3 lg:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Uma memória eternizada em 3D</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Faça eterna uma corrida especial, materialize um momento de superação ou diversão.
              </p>
            </div>
            <div className="grid gap-6 lg:col-span-2 lg:grid grid-cols-2">
              <div className="flex items-center space-x-4">
                <Image
                  alt="Image"
                  className="aspect-[16/9] overflow-hidden rounded-lg object-cover object-center"
                  height="112"
                  src="/images/prototipo1.jpg"
                  width="200"
                />
                <div className="grid gap-1.5">
                  <h3 className="text-xl font-semibold">Impressão 3D</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Detalhes fabricados com impressão 3D, belos, leves e práticos.                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  alt="Image"
                  className="aspect-[16/9] overflow-hidden rounded-lg object-cover object-center"
                  height="112"
                  src="/images/prototipo2.jpg"
                  width="200"
                />
                <div className="grid gap-1.5">
                  <h3 className="text-xl font-semibold">Processo automatizado</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Apenas nos envie o link da corrida ou exercício que você deseja no seu fitness tracker favorito. Nós cuidaremos do resto!                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  alt="Image"
                  className="aspect-[16/9] overflow-hidden rounded-lg object-cover object-center"
                  height="112"
                  src="/images/prototipo3.jpg"
                  width="200"
                />
                <div className="grid gap-1.5">
                  <h3 className="text-xl font-semibold">Personalização</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Personalize o seu produto escolhendo as cores e a disposição do quadro!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 lg:py-24 xl:py-32" id='Contato'>
          <div className="container grid items-center gap-6 px-4 text-center lg:grid-cols-2 lg:px-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="338"
              src="/images/pessoa2.jpg"
              width="600"
            />
            <div className="space-y-4"  >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" >
                Um presente único e significativo
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                surpreenda um corredor especial na sua vida com um presente que vai além do comum. Um mapa 3D da sua corrida favorita é uma lembrança única e pessoal que eles vão apreciar para sempre.
              </p>
              <div className="flex flex-row items-center justify-center space-x-6" >
                <Link href='https://github.com/' ><GitHubLogoIcon className="h-9 w-9 text-orange-500" /></Link>
                <Link href='https://www.instagram.com/' ><InstagramLogoIcon className="h-9 w-9 text-orange-500" /></Link>
                <Link href='https://www.linkedin.com/' ><LinkedInLogoIcon className="h-9 w-9 text-orange-500" /></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
