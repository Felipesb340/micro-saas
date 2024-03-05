import { auth } from "@/services/auth"

export default async function Page() {
  const session = await auth()

  return (
    <>
      <h1>{session?.user?.email}</h1>
      <h2>{session?.user?.name}</h2>
      <img src={session?.user?.image}alt="" />
      <p>{session?.user?.id}</p>
    </>
  )
}