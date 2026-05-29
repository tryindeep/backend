"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

function RealHome() {
  const session = useSession();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {session.status == "authenticated" && <button onClick={() => signOut()}>logout</button>}
      {session.status == "unauthenticated" && <button onClick={() => signIn()}>Sign In</button>}
    </div>
  );
}
