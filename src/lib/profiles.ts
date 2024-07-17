import {Property} from "csstype";

export type Profile = {
  handle: string
  displayName: string
  decoration: ProfileDecoration
}

export type ProfileDecoration = {
  borderColor: {
    from: Color
    to: Color
  }
  banner: { color: Color } | { url: string }
  avatar?: {
    url: string
  }
}

type Color = Property.Color