import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { auth } from "@/services/auth"
import { UserInfo } from "../_components/user-info"
import Header from "@/components/header"


export default async function OrderPage() {

  const session = await auth()

  return (
    <main>
      <UserInfo user={session?.user} />
      <div className="space-y-6 m-16">
        <div className="space-y-2 ">
          <h1 className="text-3xl font-bold">Escolha o momento que deseja imortalizar.</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="moment-link">Link do Momento</Label>
            <Input id="moment-link" placeholder="Cole o link aqui" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">Descreva os detalhes que deseja personalizar aqui</Label>
            <Textarea className="min-h-[100px]" id="details" placeholder="Digite os detalhes aqui..." />
          </div>
          <div className="flex items-center space-x-4">
            <Button size="lg">Enviar</Button>
            <Button  size="lg" variant="outline">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

