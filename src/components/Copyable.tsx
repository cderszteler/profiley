'use client'

import React, {useEffect, useState} from "react";
import Tooltip from "./Tooltip";
import { CheckIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

const copiedContent = (
  <div className="flex justify-center items-center gap-x-0.5 font-medium text-light-primary">
    <CheckIcon className="w-4"/>
    Copied!
  </div>
)

export default function Copyable({toCopy, hoverContent, children}: {
  toCopy: string
  hoverContent?: string
  children: React.ReactNode
}) {
  const [clicked, setClicked] = useState<boolean>()

  useEffect(() => {
    if (clicked) {
      setTimeout(() => setClicked(false), 750)
    }
  }, [clicked]);

  return (
    <Tooltip
      content={clicked ? copiedContent : hoverContent}
      className={clsx(
        clicked ? "!bg-green-500 dark:!bg-green-600 !ring-0" : "",
        "transition duration-100 ease-linear"
      )}
      trigger={hoverContent ? 'hover' : 'click'}
      onClick={() => setClicked(true)}
      autoHide={true}
      autoHideInterval={750}
    >
      <div
        className="cursor-pointer"
        onClick={async () => {
          await navigator.clipboard.writeText(toCopy)
        }}
      >
        {children}
      </div>
    </Tooltip>
  )
}