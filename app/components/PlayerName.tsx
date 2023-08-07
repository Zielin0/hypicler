import { Rank, guildTagMap, plusColorMap, rankMap } from '@/app/types/Maps';
import { getRank } from '@/app/utils/utils';
import { Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const RankDisplay = ({
  rankKey,
  rank,
  color,
  plusColor,
}: {
  rankKey: string;
  rank: string;
  color: string;
  plusColor: string;
}) => {
  switch (rankKey) {
    case 'VIP_PLUS':
    case 'MVP_PLUS':
      return (
        <Text span color={color}>
          {rank.split('+')}
          <Text span color={plusColor}>
            {rank.split(rankKey.split('_PLUS')[0])}
          </Text>
        </Text>
      );
    case 'SUPERSTAR':
      return (
        <Text span color={color}>
          {rank.split('++')}
          <Text span color={plusColor}>
            {rank.split('MVP')}
          </Text>
        </Text>
      );
    case 'PIG':
      return (
        <Text span color={color}>
          {rank.split('+++')}
          <Text span color="#66D9E8">
            {rank.split('PIG')}
          </Text>
        </Text>
      );
    default:
      return (
        <Text span color={color}>
          {rank}
        </Text>
      );
  }
};

interface GuildTag {
  tag: string | undefined;
  tagColor: string | undefined;
}

export default function PlayerName({
  username,
  rank,
  plusColor,
  guildTag,
}: {
  username: string;
  rank: string;
  plusColor: string;
  guildTag: GuildTag;
}) {
  const validRank = getRank(username, rank);
  const { name, color, borderColor, nameColor } = rankMap.find(
    (item) => item.key === validRank
  ) as Rank;

  const mobile = useMediaQuery('(max-width: 880px)');

  return (
    <Text fz="md" color={nameColor}>
      <Text span fw={700} mr={5}>
        <Text span color={borderColor}>
          [
          <RankDisplay
            rankKey={validRank}
            rank={name}
            color={color}
            plusColor={plusColorMap[plusColor as keyof typeof plusColorMap]}
          />
          ]
        </Text>
      </Text>
      {username}
      {guildTag.tag && (mobile ? guildTag.tag.length <= 4 : true) && (
        <Text
          fz="md"
          span
          ml={5}
          color={
            guildTagMap[guildTag.tagColor as keyof typeof guildTagMap] ||
            guildTagMap['GRAY']
          }
        >
          [{guildTag.tag}]
        </Text>
      )}
    </Text>
  );
}
