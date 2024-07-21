import {Profile} from "@/lib/profiles";
import {ProfileCard} from "@/components/card/ProfileCard";
import React from "react";

export default async function ProfilePage({ params }: { params: { profileId: string }}) {
  const profile: Promise<Profile> = new Promise(() => {})

  // TODO: Fetch profile

  return (
    <ProfileCard profile={await profile}/>
  )
}