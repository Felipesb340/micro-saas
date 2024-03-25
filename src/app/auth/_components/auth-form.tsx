'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {

  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email , redirect: false})

      toast({
        title: 'Link de acesso enviado!',
        description: 'Check seu email para o link de acesso!'
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'ocorreu um erro. Tente novamente.'
      })}
  })

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-3xl">Login</CardTitle>
        <CardDescription>Digite seu email para receber o link de acesso</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="space-y-4 p-7">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="usuario@exemplo.com" type="email" {...form.register('email')} />
        </div>
        <Button className="w-full" type="submit" >Enviar link</Button>
      </form>
    </Card>
  )
}

