import React, {useMemo} from "react";
import {Badge, Profile, ProfileDecoration} from "@/lib/profiles";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline"
import clsx from "clsx";
import {
  ExperimentalBadge,
  FounderBadge,
  OfficialBadge,
  VerifiedBadge
} from "@/components/Badges";

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

ProfileCard.Header = function ProfileCardHeader({profile}: {
  profile: Profile
}) {
  return (
    <div className="flex flex-col gap-y-1.5 sm:gap-y-1 text-slate-900 dark:text-slate-100">
      <h1 className="font-bold text-2xl">{profile.displayName}</h1>
      <div className="flex items-center gap-x-2">
        <h2 className="font-medium">{profile.handle}</h2>
        <ProfileBadges badges={profile.badges}/>
      </div>
    </div>
  )
}

const badgeIcons: Record<Badge, React.ReactNode> = {
  'Founder': <FounderBadge className="w-[1.23rem]"/>,
  'Official': <OfficialBadge className="w-5"/>,
  'Verified': <VerifiedBadge className="w-5"/>,
  'Experimental': <ExperimentalBadge className="w-5"/>
}

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