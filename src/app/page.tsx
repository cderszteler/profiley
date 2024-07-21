import React from "react";
import {ProfileCard} from "@/components/card/ProfileCard";
import {Profile} from "@/lib/profiles";

export default async function Home() {
  const profile: Promise<Profile> = new Promise(() => {})

  return (
    <ProfileCard profile={await profile}/>
  )
}