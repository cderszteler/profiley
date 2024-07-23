'use client'

import {ContainerOuter} from "@/components/Container";
import React, {createContext, SetStateAction, useState} from "react";

export const ProfileContext = createContext<{
  setBackgroundUrl?: React.Dispatch<SetStateAction<string | undefined>>
}>({})

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [backgroundUrl, setBackgroundUrl] = useState<string>()

  return (
    <ProfileContext.Provider value={{ setBackgroundUrl: setBackgroundUrl }}>
      <ContainerOuter className="flex justify-center sm:mt-32">
        {children}
      </ContainerOuter>
      {backgroundUrl && (
        <video autoPlay muted loop className="fixed inset-0 w-full h-full -z-50 object-cover">
          <source src={backgroundUrl} type="video/mp4"/>
        </video>
      )}
    </ProfileContext.Provider>
  )
}