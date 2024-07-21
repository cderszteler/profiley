import {Property} from "csstype";
import {SocialProviderType} from "@/lib/socials";

export type Profile = {
  handle: string
  displayName: string
  createdAt: Date
  decoration: ProfileDecoration
  badges: Set<Badge>
  about: string
  socials: Partial<Record<SocialProviderType, string>>
}

export type ProfileDecoration = {
  borderColor: {
    from: Color
    to: Color
  }
  banner: { color: Color, url: null } | { url: string, color: null }
  avatar?: {
    url: string
  }
}

export type Badge = 'Founder' | 'Verified' | 'Official' | 'Experimental'

type Color = Property.Color