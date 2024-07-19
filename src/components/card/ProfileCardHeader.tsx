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

export function ProfileCardHeader({profile}: { profile: Profile }) {
  return (
    <div className="flex flex-col gap-y-1.5 sm:gap-y-1">
      <h1 className="font-bold text-2xl">{profile.displayName}</h1>
      <div className="flex items-center gap-x-2">
        <Copyable toCopy={profile.handle}>
          <h2 className="font-medium">{profile.handle}</h2>
        </Copyable>
        <ProfileBadges badges={profile.badges}/>
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