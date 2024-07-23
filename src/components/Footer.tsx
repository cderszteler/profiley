import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx("bg-light-primary dark:bg-dark-primary", className)}>
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-5 text-slate-500 md:flex md:items-center md:justify-between md:py-4 lg:px-8">
        <div className="leading-5 md:order-1 md:mt-0">
          <ul className="text-sm text-center text-slate-700 dark:text-slate-400 md:text-left">
            <li><Link href="https://derszteler.de/imprint">Imprint</Link></li>
          </ul>
        </div>
        <div className="flex justify-center mt-2 space-x-6 md:order-2">
          <p className="text-center text-xs">
            &copy; {new Date().getFullYear()} Profiley,&nbsp;
            <Link href="https://derszteler.de" className="text-slate-700 dark:text-slate-400">
              Christoph Derszteler
            </Link>
            .&nbsp; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}