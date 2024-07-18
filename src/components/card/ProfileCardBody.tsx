'use client'

import React, {useState} from "react";
import {Profile} from "@/lib/profiles";
import clsx from "clsx";

const tabs = ['About', 'Gallery', 'Favorites']
type Tab = typeof tabs[number]

export function ProfileCardBody({profile}: { profile: Profile }) {
  const [selected, setSelected] = useState<Tab>('About')

  return (
    // TODO: Remove h-96 (testing)
    <div className="px-3 py-4 sm:px-4 bg-slate-150 dark:bg-slate-850 ring-primary rounded-lg h-96">
      <nav className="flex justify-between sm:justify-normal sm:gap-x-8 pr-4 sm:pr-0 border-b border-slate-500">
        {tabs.map((tab, index) => (
          <div
            className={clsx(
              "pb-2 cursor-pointer text-slate-800 dark:text-slate-200",
              selected === tab && "border-b-2 border-slate-800 dark:border-slate-200"
            )}
            onClick={() => setSelected(tab)}
            key={index}
          >
            {tab}
          </div>
        ))}
      </nav>
    </div>
  )
}