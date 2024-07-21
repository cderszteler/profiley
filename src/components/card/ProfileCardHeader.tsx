import {Badge, Profile} from "@/lib/profiles";
import React, {useMemo} from "react";
import {
  ExperimentalBadge,
  FounderBadge,
  OfficialBadge,
  VerifiedBadge
} from "@/components/Badges";
import Tooltip from "@/components/Tooltip";
import Copyable from "../Copyable";
import clsx from "clsx";

export function ProfileCardHeader({profile}: { profile?: Profile }) {
  return (
    <div className={clsx(
      "flex flex-col gap-y-1.5 sm:gap-y-1",
      !profile && "animate-pulse"
    )}>
      <h1 className={clsx(
        "font-bold text-2xl",
        !profile && "w-28 h-4 mb-3 bg-slate-250 dark:bg-slate-750 rounded-lg"
      )}>
        {profile?.displayName}
      </h1>
      <div className="flex items-center gap-x-2">
        {!profile && (
          <h2 className="font-medium w-16 h-3 mb-2 bg-slate-250 dark:bg-slate-750 rounded-lg"/>
        )}
        {profile && (
          <Copyable toCopy={profile?.handle || "test"}>
            <h2 className="font-medium">{profile?.handle}</h2>
          </Copyable>
        )}
        {profile && <ProfileBadges badges={profile.badges}/>}
      </div>
    </div>
  )
}

const badgeIcons: Record<Badge, (key: React.Key) => React.ReactNode> = {
  'Founder': (key: any) => (
    <Tooltip key={key} content="Founder">
      <FounderBadge className="w-[1.23rem] cursor-pointer"/>
    </Tooltip>
  ),
  'Official': (key: any) => (
    <Tooltip key={key} content="Official">
      <OfficialBadge className="w-5 cursor-pointer"/>
    </Tooltip>
  ),
  'Verified': (key: any) => (
    <Tooltip key={key} content="Verified">
      <VerifiedBadge className="w-5 cursor-pointer"/>
    </Tooltip>
  ),
  'Experimental': (key: any) => (
    <Tooltip key={key} content="Experimental Tester">
      <ExperimentalBadge className="w-5 cursor-pointer"/>
    </Tooltip>
  ),
}

function ProfileBadges({ badges }: { badges: Profile["badges"] }) {
  const icons = useMemo(
    () => Array.from(badges).map((badge, index) => badgeIcons[badge](index)),
    [badges]
  )

  if (badges.size === 0) {
    return <></>
  }

  return (
    <div className="flex items-center justify-center gap-x-1 px-1 rounded-md ring-primary">
      {icons}
    </div>
  )
}