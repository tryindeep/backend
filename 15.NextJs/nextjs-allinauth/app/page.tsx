
// app/page.tsx or any server component
import { auth } from "@/app/api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await auth()

  return <div>{JSON.stringify(session)}</div>
}

