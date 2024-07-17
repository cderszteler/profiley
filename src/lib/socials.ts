import React, {ComponentPropsWithoutRef} from "react";
import {
  DiscordIcon,
  GitHubIcon,
  InstagramIcon,
  PinterestIcon, RedditIcon, SpotifyIcon, SteamIcon,
  TikTokIcon, TwitchIcon,
  XIcon, YouTubeIcon
} from "@/components/Socials";

export type SocialProviderType =
  'Instagram'
  | 'TikTok'
  | 'X'
  | 'Pinterest'
  | 'GitHub'
  | 'YouTube'
  | 'Twitch'
  | 'Discord'
  | 'Spotify'
  | 'Steam'
  | 'Reddit'

export type SocialProvider = { icon: React.FC<ComponentPropsWithoutRef<'svg'>> }
  & ({ url: string, copy?: never } | { copy: true, url?: never })

export const providers: Record<SocialProviderType, SocialProvider> = {
  'Instagram': {
    url: "https://instagram.com/",
    icon: InstagramIcon
  },
  'TikTok': {
    url: "https://tiktok.com/@",
    icon: TikTokIcon
  },
  'X': {
    url: "https://x.com/",
    icon: XIcon
  },
  'Pinterest': {
    url: "https://pinterest.com/",
    icon: PinterestIcon
  },
  'GitHub': {
    url: "https://github.com/",
    icon: GitHubIcon
  },
  'YouTube': {
    url: "https://youtube.com/@",
    icon: YouTubeIcon
  },
  'Twitch': {
    url: "https://twitch.tv/",
    icon: TwitchIcon
  },
  'Discord': {
    copy: true,
    icon: DiscordIcon
  },
  'Spotify': {
    url: "https://open.spotify.com/user/",
    icon: SpotifyIcon
  },
  'Steam': {
    url: "https://steamcommunity.com/id/",
    icon: SteamIcon
  },
  'Reddit': {
    url: "https://reddit.com/u/",
    icon: RedditIcon
  }
}