'use client'

import React from "react";
import Tooltip from "./Tooltip";
import { CheckIcon } from "@heroicons/react/16/solid";

export default function Copyable({ content, children }: {
  content: string
  children: React.ReactNode
}) {
  return (
    <Tooltip
      content={(
        <div className="flex justify-center items-center gap-x-0.5 font-medium text-light-primary">
          <CheckIcon className="w-4"/>
          Copied!
        </div>
      )}
      className="bg-green-500 dark:bg-green-600 !ring-0"
      trigger={'click'}
      autoHide={true}
      autoHideInterval={750}
    >
      <div
        className="cursor-pointer"
        onClick={async () => {
          await navigator.clipboard.writeText(content)
        }}
      >
        {children}
      </div>
    </Tooltip>
  )
}