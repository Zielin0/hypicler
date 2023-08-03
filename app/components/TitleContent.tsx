import { Text } from '@mantine/core';

export default function TitleContent({
  title,
  content,
}: {
  title: string;
  content: any;
}) {
  return (
    <Text fz="sm">
      <Text span fw={700} mr={5}>
        {title}:
      </Text>
      {content}
    </Text>
  );
}
