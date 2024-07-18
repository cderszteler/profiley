import clsx from "clsx";
import React from "react";

export default function Tooltip({ content, children, triangle }: {
  content: React.ReactNode
  children: React.ReactNode
  triangle?: boolean
}) {
  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <div className={clsx(
        "absolute left-1/2 ml-auto mr-auto min-w-max px-3 py-2 -translate-x-1/2 scale-0 rounded-lg transition-all delay-75 duration-300 group-hover:scale-100",
        triangle ? "bottom-4" : "bottom-5"
      )}>
        <div className="flex max-w-xs flex-col items-center">
          <div className="px-2 py-1.5 bg-slate-200 dark:bg-slate-800 ring-primary text-center text-xs text-dark-primary dark:text-light-primary rounded">
            {content}
          </div>
          {triangle && (<div className="clip-bottom h-2 w-4 bg-slate-200 dark:bg-slate-800"/>)}
        </div>
      </div>
    </div>
  )
}