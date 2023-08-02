import { Rank, guildTagMap, rankMap } from '@/app/types/Maps';
import { Text } from '@mantine/core';

interface GuildTag {
  tag: string | undefined;
  tagColor: string | undefined;
}

export default function PlayerName({
  username,
  rank,
  guildTag,
}: {
  username: string;
  rank: string;
  guildTag: GuildTag;
}) {
  const { name, color, borderColor, nameColor } = rankMap.find(
    (item) => item.key === rank
  ) as Rank;

  return (
    <Text fz="md" color={nameColor}>
      <Text span fw={700} mr={5}>
        <Text span color={borderColor}>
          [
          <Text span color={color}>
            {rank === 'PIG' ? (
              <Text span>
                {name.split('+++')}
                <Text span color="#66D9E8">
                  {name.split('PIG')}
                </Text>
              </Text>
            ) : (
              <Text span>{name}</Text>
            )}
          </Text>
          ]
        </Text>
      </Text>
      {username}
      {guildTag.tag !== undefined && (
        <Text
          fz="md"
          span
          ml={5}
          color={guildTagMap[guildTag.tagColor as keyof typeof guildTagMap]}
        >
          [{guildTag.tag}]
        </Text>
      )}
    </Text>
  );
}
