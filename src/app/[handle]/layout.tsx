'use client'

import {ContainerOuter} from "@/components/Container";
import React, {useState} from "react";
import { ProfileContext } from "./context";
import Background from "@/components/Background";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [backgroundUrl, setBackgroundUrl] = useState<string>()

  return (
    <ProfileContext.Provider value={{ setBackgroundUrl: setBackgroundUrl }}>
      <ContainerOuter className="flex-grow flex flex-col justify-center min-h-full my-16 sm:mt-32 sm:justify-normal">
        <div className="flex justify-center">
          {children}
        </div>
      </ContainerOuter>
      {backgroundUrl && (
        <video autoPlay muted loop className="fixed inset-0 w-full h-full -z-50 object-cover">
          <source src={backgroundUrl} type="video/mp4"/>
        </video>
      )}
      {!backgroundUrl && (
        <Background/>
      )}
    </ProfileContext.Provider>
  )
}