'use client'

import {useState} from 'react'
import {CloseButton, Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
// TODO: Replace image*
import logo from '@/images/logo.svg'
import Image from "next/image";
import Link from 'next/link'
import {useSession} from "next-auth/react";
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', loggedIn: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { status } = useSession()
  const loggedIn = status === "authenticated"

  return (
    <header className="bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5 flex-shrink-0">
            <span className="sr-only">Profiley</span>
            <Image alt="Logo" src={logo} className="h-8 w-auto"/>
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation
              .filter(item => !item.loggedIn || loggedIn)
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
        {/*TODO: Implement login and signup*/}
        <div className={clsx(
          "flex flex-1 items-center justify-end gap-x-6",
          loggedIn ? "hidden" : "visible"
        )}>
          <Link
            href="#"
            className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-dark-primary lg:dark:text-light-primary"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Create your profile
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10"/>
        <DialogPanel
          className={clsx(
            "fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto",
            "bg-slate-50 dark:bg-slate-950 text-dark-primary dark:text-light-primary",
            "transition duration-200 ease-in-out data-[closed]:opacity-0",
            "sm:max-w-xs sm:ring-1 sm:ring-slate-900/10 dark:sm:ring-slate-900"
          )}
          transition
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Profiley</span>
              <Image
                alt="Logo"
                src={logo}
                className="h-8 w-auto"
              />
            </Link>
            {/*TODO: Add hamburger animation*/}
            <CloseButton
              type="button"
              className={clsx("-m-2.5 rounded-md p-2.5")}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
            </CloseButton>
          </div>
          <div className="mt-6 flow-root">
            <div className={clsx("-my-6")}>
              <div className="space-y-2 pt-5 pb-3">
                {navigation
                  .filter(item => !item.loggedIn || loggedIn)
                  .map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-light-primary dark:hover:bg-dark-primary"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <div className={clsx("py-3", loggedIn ? "hidden" : "-my-6")}>
                {/*TODO: Implement login*/}
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-light-primary dark:hover:bg-dark-primary"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}