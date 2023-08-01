import { Rank, rankMap } from '@/app/types/Ranks';
import { Text } from '@mantine/core';

export default function PlayerName({
  username,
  rank,
}: {
  username: string;
  rank: string;
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
    </Text>
  );
}
