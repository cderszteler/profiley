import React from "react";
import {ProfileDecoration} from "@/lib/profiles";
import clsx from "clsx";

export function ProfileCard({children, borderColor}: {
  children: React.ReactNode
  borderColor: ProfileDecoration["borderColor"]
}) {
  return (
    <div
      className={clsx(
        "w-full max-w-lg bg-white",
        "relative border-4 border-transparent rounded-lg bg-clip-padding",
      )}
    >
      <div
        className="absolute inset-0 -z-10 -m-1 rounded-[inherit] bg-gradient-to-b"
        style={{
          // @ts-ignore
          "--tw-gradient-from": `${borderColor.from} var(--tw-gradient-from-position)`,
          "--tw-gradient-to": `${borderColor.to} var(--tw-gradient-to-position)`,
          "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)"
        }}
      />
      {children}
    </div>
  )
}