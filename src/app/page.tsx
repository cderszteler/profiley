import React from "react";
import getSession from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession()

  if (session) {
    redirect(`/${session.user.username}`)
  }

  return (
    <span className="text-dark-primary dark:text-light-primary">TODO: Create landing page</span>
  )
}