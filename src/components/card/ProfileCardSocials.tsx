import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {Profile} from "@/lib/profiles";
import {providers, SocialProvider, SocialProviderType} from "@/lib/socials";
import Copyable from "../Copyable";

export function ProfileCardSocials({profile, className}: {
  profile: Profile
  className?: string
}) {
  const socials = Object.entries(profile.socials)
  if (socials.length === 0) {
    return <></>
  }

  return (
    <div className={clsx(
      "grid grid-cols-[repeat(auto-fill,_minmax(20px,_1fr))]",
      socials.length <= 5 ? "gap-4" : "gap-x-3 gap-y-2",
      className
    )}>
      {socials.map((social, index) => (
        <Social
          key={index}
          provider={providers[social[0] as SocialProviderType]}
          handle={social[1]}
        />
      ))}
    </div>
  )
}

function Social({ provider, handle }: {
  provider: SocialProvider
  handle: string
}) {
  if (provider?.copy) {
    return (
      <Copyable toCopy={handle} hoverContent={handle}>
        <provider.icon className="w-5 [&:not(:hover)]:fill-slate-500 transition duration-100"/>
      </Copyable>
    )
  } else {
    return (
      <Link href={provider.url + handle} target="_blank">
        <provider.icon className="w-5 [&:not(:hover)]:fill-slate-500 transition duration-100"/>
      </Link>
    )
  }
}