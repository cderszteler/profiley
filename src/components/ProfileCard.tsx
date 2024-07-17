import React, {useMemo} from "react";
import {ProfileDecoration} from "@/lib/profiles";
import clsx from "clsx";

export function ProfileCard({children, decoration}: {
  children: React.ReactNode
  decoration: ProfileDecoration
}) {
  const borderColor = decoration.borderColor

  return (
    <div
      className={clsx(
        "w-full max-w-lg h-max bg-slate-100 dark:bg-slate-900",
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

ProfileCard.Banner = function ProfileCardBanner({decoration}: {
  decoration: ProfileDecoration
}) {
  const style = useMemo(() => {
    // @ts-ignore
    if (decoration.banner?.color) {
      // @ts-ignore
      return { backgroundColor: decoration.banner.color }
    }
    // @ts-ignore
    return { backgroundImage: `url(${decoration.banner.url})` }
  }, [decoration.banner])

  return (
    <div
      className="w-full h-48 bg-cover"
      style={style}
    />
  )
}