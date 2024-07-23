'use client'

import React, {useContext, useEffect, useMemo} from "react";
import {Profile, ProfileDecoration} from "@/lib/profiles";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline"
import clsx from "clsx";
import {ProfileCardHeader} from "@/components/card/ProfileCardHeader";
import {ProfileCardBody} from "@/components/card/ProfileCardBody";
import {ProfileCardSocials} from "@/components/card/ProfileCardSocials";
import {ProfileContext} from "@/app/[handle]/layout";

export function ProfileCard({profile}: {
  profile: Profile
}) {
  const context = useContext(ProfileContext)

  useEffect(() => {
    context.setBackgroundUrl?.(profile.decoration.background.url)
  }, [context, profile.decoration.background.url]);

  return (
    <ProfileCard.Container decoration={profile.decoration}>
      <ProfileCard.Banner decoration={profile.decoration}/>
      <div className="relative h-12 sm:h-16">
        <ProfileCard.Avatar decoration={profile.decoration} className="absolute -top-12 sm:-top-16 left-2"/>
      </div>
      <div className={clsx(
        "flex flex-col gap-y-4 sm:gap-y-5 px-4 pt-2 sm:pt-4",
        Object.entries(profile.socials).length === 0 ? "pb-3" : "pb-2"
      )}>
        <ProfileCard.Header profile={profile}/>
        <ProfileCard.Body profile={profile}/>
        <ProfileCardSocials className="-mt-2 sm:-mt-3" profile={profile}/>
      </div>
    </ProfileCard.Container>
  )
}

export function LoadingProfileCard() {
  return (
    <ProfileCard.Container>
      <ProfileCard.Banner/>
      <div className="relative h-12 sm:h-16">
        <ProfileCard.Avatar className="absolute -top-12 sm:-top-16 left-2"/>
      </div>
      <div className="flex flex-col gap-y-4 sm:gap-y-5 px-4 pt-2 pb-6 sm:pt-4 sm:pb-8">
        <ProfileCard.Header/>
        <ProfileCard.Body/>
      </div>
    </ProfileCard.Container>
  )
}

ProfileCard.Container = function ProfileCard({children, decoration}: {
  children: React.ReactNode
  decoration?: ProfileDecoration
}) {
  const borderColor = decoration?.borderColor

  return (
    <div
      className={clsx(
        "w-full max-w-lg h-max bg-light-primary dark:bg-dark-primary",
        "relative border-4 border-transparent rounded-lg bg-clip-padding",
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 -z-10 -m-1 rounded-[inherit] bg-gradient-to-b",
          !borderColor && "bg-light-primary dark:bg-dark-primary"
        )}
        style={borderColor && {
          // @ts-ignore
          "--tw-gradient-from": `${borderColor.from} var(--tw-gradient-from-position)`,
          "--tw-gradient-to": `${borderColor.to} var(--tw-gradient-to-position)`,
          "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)"
        }}
      />
      <div className="text-dark-primary dark:text-light-primary">
        {children}
      </div>
    </div>
  )
}

ProfileCard.Banner = function ProfileCardBanner({decoration}: {
  decoration?: ProfileDecoration
}) {
  const style = useMemo(() => {
    if (!decoration) {
      return {}
    } else if (decoration.banner?.color) {
      return { backgroundColor: decoration.banner.color }
    }
    return { backgroundImage: `url(${decoration.banner.url})` }
  }, [decoration])

  return (
    <div
      className={clsx(
        "w-full h-36 sm:h-48 bg-cover rounded-t",
        !decoration && "p-3 animate-pulse"
      )}
      style={style}
    >
      {!decoration && <div className="w-full h-full bg-slate-250 dark:bg-slate-750 rounded-lg"/>}
    </div>
  )
}

ProfileCard.Avatar = function ProfileCardAvatar({className, decoration}: {
  className?: string
  decoration?: ProfileDecoration
}) {
  const avatar = useMemo(() => {
    return decoration?.avatar?.url
      ? <div className="bg-cover w-full h-full" style={{backgroundImage: `url(${decoration.avatar.url})`}}/>
      : <QuestionMarkCircleIcon className={clsx(
          "w-full",
          !decoration && "animate-pulse text-slate-250 dark:text-slate-750"
        )}/>
  }, [decoration])

  return (
    <div className={clsx(
      "relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-6 sm:border-8 border-light-primary dark:border-dark-primary bg-light-primary dark:bg-dark-primary overflow-hidden",
      className
    )}>
      {avatar}
    </div>
  )
}

ProfileCard.Header = ProfileCardHeader
ProfileCard.Body = ProfileCardBody
ProfileCard.Socials = ProfileCardSocials