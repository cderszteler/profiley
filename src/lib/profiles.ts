import {Property} from "csstype";
import {SocialProviderType} from "@/lib/socials";

export type Profile = {
  handle: string
  createdAt: Date
  displayName: string
  about: string
  decoration: ProfileDecoration
  badges: Set<Badge>
  socials: Partial<Record<SocialProviderType, string>>
}

export type ProfileDecoration = {
  borderColor: {
    from: Color
    to: Color
  }
  banner: { color: Color, url: null } | { url: string, color: null }
  avatar: {
    url?: string
  }
  backgroundColor: {
    url?: string
  }
}

export type Badge = 'Founder' | 'Verified' | 'Official' | 'Experimental'

type Color = Property.Color

export function parseItemToProfile(item: Record<string, any>): Profile {
  return {
    handle: item.Handle,
    createdAt: new Date(item.CreatedAt),
    displayName: item.DisplayName,
    about: item.About,
    decoration: item.Decoration,
    badges: item.Badges,
    socials: item.Socials,
  }
}

export function parseProfileToItem(profile: Profile): Record<string, any> {
  return {
    Handle: profile.handle,
    CreatedAt: profile.createdAt.toISOString(),
    DisplayName: profile.displayName,
    About: profile.about,
    Decoration: profile.decoration,
    Badges: profile.badges,
    Socials: profile.socials
  }
}