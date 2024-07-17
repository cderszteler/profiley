import {Badge, Profile} from "@/lib/profiles";
import React, {useMemo} from "react";
import {
  ExperimentalBadge,
  FounderBadge,
  OfficialBadge,
  VerifiedBadge
} from "@/components/Badges";

export function ProfileCardHeader({profile}: { profile: Profile }) {
  return (
    <div className="flex flex-col gap-y-1.5 sm:gap-y-1">
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
    <div className="flex items-center justify-center gap-x-1 px-1 rounded-md ring-1 ring-slate-300 dark:ring-slate-700">
      {icons}
    </div>
  )
}