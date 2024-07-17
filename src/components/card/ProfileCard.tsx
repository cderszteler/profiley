import React, {useMemo} from "react";
import {Profile, ProfileDecoration} from "@/lib/profiles";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline"
import clsx from "clsx";
import {ProfileCardHeader} from "@/components/card/ProfileCardHeader";

export function ProfileCard({profile}: {
  profile: Profile
}) {
  return (
    <ProfileCard.Container decoration={profile.decoration}>
      <ProfileCard.Banner decoration={profile.decoration}/>
      <div className="relative h-12 sm:h-16">
        <ProfileCard.Avatar decoration={profile.decoration} className="absolute -top-12 sm:-top-16 left-2"/>
      </div>
      <div className="px-4 py-2 sm:py-4 h-[36rem] dark:text-white">
        <ProfileCard.Header profile={profile}/>
      </div>
    </ProfileCard.Container>
  )
}

ProfileCard.Container = function ProfileCard({children, decoration}: {
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
      <div className="rounded overflow-hidden">
        {children}
      </div>
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

ProfileCard.Avatar = function ProfileCardAvatar({className, decoration}: {
  className?: string
  decoration: ProfileDecoration
}) {
  const avatar = useMemo(() => {
    return decoration.avatar
      ? <div className="bg-cover w-full h-full" style={{backgroundImage: `url(${decoration.avatar?.url})`}}/>
      : <QuestionMarkCircleIcon className="w-full text-slate-900 dark:text-slate-100"/>
  }, [decoration.avatar])

  return (
    <div className={clsx(
      "relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-8 border-slate-100 dark:border-slate-900 bg-slate-100 dark:bg-slate-900 overflow-hidden",
      className
    )}>
      {avatar}
    </div>
  )
}

ProfileCard.Header = ProfileCardHeader

function ProfileBadges({ badges }: { badges: Profile["badges"] }) {
  const icons = useMemo(() => Array.from(badges).map(badge => badgeIcons[badge]), [badges])

  if (badges.size === 0) {
    return <></>
  }

  return (
    <div className="flex items-center justify-center gap-x-1 px-1 rounded-md ring-1 ring-slate-400 dark:ring-slate-600">
      {icons}
    </div>
  )
}