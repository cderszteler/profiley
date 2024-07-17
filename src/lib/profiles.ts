import {Property} from "csstype";

export type Profile = {
  handle: string
  displayName: string
  decoration: ProfileDecoration
  badges: Set<Badge>
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

export type Badge = 'Founder' | 'Verified' | 'Official' | 'Experimental'

type Color = Property.Color