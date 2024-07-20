'use client'

import React, {useState} from "react";
import {Profile} from "@/lib/profiles";
import clsx from "clsx";
import {Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ProfileCardAbout from "@/components/card/ProfileCardAbout";

// TODO: Re-add/implement these tabs
const tabs = ['About'/*, 'Gallery', 'Favorites'*/]
type Tab = typeof tabs[number]

export function ProfileCardBody({profile}: { profile: Profile }) {
  const [selected, setSelected] = useState<Tab>('About')

  return (
    <div className="flex flex-col min-h-32 px-3 py-4 sm:px-4 bg-slate-150 dark:bg-slate-850 ring-primary rounded-lg">
      <TabGroup className="flex-1 flex flex-col gap-y-5">
        <TabList className="flex justify-between sm:justify-normal sm:gap-x-8 pr-4 sm:pr-0 border-b border-slate-500">
          {tabs.map(tab => (
            <Tab
              className={clsx(
                "pb-2 cursor-pointer text-slate-800 dark:text-slate-200 outline-0",
                selected === tab && "border-b-2 border-slate-800 dark:border-slate-200"
              )}
              onClick={() => setSelected(tab)}
              key={tab}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="flex flex-col flex-1">
          <TabPanel key='About' className="flex flex-col flex-1">
            <ProfileCardAbout profile={profile}/>
          </TabPanel>
        </TabPanels>
      </TabGroup>

    </div>
  )
}