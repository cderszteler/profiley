'use client'

import {SessionProvider} from "next-auth/react"
import React from "react";
import {Session} from "next-auth";

export default function ServerSessionProvider({children, session}: {
  children: React.ReactNode
  session: Session | null
}): React.ReactNode {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
