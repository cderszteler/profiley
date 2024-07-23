'use client'

import Link from "next/link"
import React from "react";
import { ErrorPage } from "../error";

export default function ProfileNotFound() {
  return (
    <ErrorPage code={404} title="Profile not found">
      This handle is not associated to any profile. Use it to create
      <Link href="/" className="text-slate-800 dark:text-slate-200 font-medium"> your profile</Link>
    </ErrorPage>
  )
}