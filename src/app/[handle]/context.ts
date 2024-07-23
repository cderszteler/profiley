import React, {createContext, SetStateAction} from "react";

type ProfileContextType = {
  setBackgroundUrl?: React.Dispatch<SetStateAction<string | undefined>>
}

export const ProfileContext = createContext<ProfileContextType>({})