'use client'

import Link from "next/link"
import React from "react";

export default function ErrorProfilePage({error, reset: rerender}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <ErrorPage code={500} title="Error">
      An unexpected error occurred. Please&nbsp;
      <button
        onClick={() => rerender()}
        className="text-slate-800 dark:text-slate-200 font-medium"
      >
        try it again&nbsp;
      </button>
      or&nbsp;
      <Link href="/" className="text-slate-800 dark:text-slate-200 font-medium">
        contact us.
      </Link>
    </ErrorPage>
  )
}

export function ErrorPage({ code, title, children: message }: {
  code: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-32 text-center text-dark-primary dark:text-light-primary sm:py-40 lg:px-8">
      <p className="text-base font-semibold leading-8">{code}</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:mt-6">
        {message}
      </p>
    </div>
  )
}