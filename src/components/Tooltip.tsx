'use client'

import clsx from "clsx";
import React, {useEffect, useRef, useState} from "react";

export default function Tooltip({ trigger = 'hover', autoHideInterval = 1500, ...props }: {
  content: React.ReactNode
  children: React.ReactNode
  trigger?: 'click' | 'hover'
  autoHideInterval?: number
  autoHide?: boolean
  triangle?: boolean
}) {
  const [opened, setOpened] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trigger !== 'click') {
      return;
    }
    if (divRef.current) {
      const scale = opened ? 1 : 0
      divRef.current.style.transform = `translateX(-50%) scale(${scale})`;
    }
    if (props.autoHide && opened) {
      setTimeout(() => setOpened(false), autoHideInterval)
    }
  }, [trigger, opened, props.autoHide, autoHideInterval]);

  return (
    <div
      className="group relative flex max-w-max flex-col items-center justify-center"
      onClick={() => {
        if (trigger === 'click') {
          setOpened(props.autoHide ? true : !opened)
        }
      }}
    >
      {props.children}
      <div
        ref={divRef}
        className={clsx(
          "absolute left-1/2 ml-auto mr-auto min-w-max px-3 py-2 rounded-lg transition-all delay-75 duration-300",
          trigger === 'hover' && "-translate-x-1/2 scale-0 group-hover:scale-100",
          props.triangle ? "bottom-4" : "bottom-5"
        )}
        style={trigger === 'click' ? { transform: "scale(0)" } : {}}
      >
        <div className="flex max-w-xs flex-col items-center">
          <div className="px-2 py-1.5 bg-slate-200 dark:bg-slate-800 ring-primary text-center text-xs text-dark-primary dark:text-light-primary rounded">
            {props.content}
          </div>
          {props.triangle && (<div className="clip-bottom h-2 w-4 bg-slate-200 dark:bg-slate-800"/>)}
        </div>
      </div>
    </div>
  )
}