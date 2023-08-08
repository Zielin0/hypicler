export interface PlayerCardGuildProps {
  name: string;
  members: number;
  rank: string;
  joined: number;
  tag: string;
  tagColor: string;
}

export interface GuildTag {
  tag: string | undefined;
  tagColor: string | undefined;
}
