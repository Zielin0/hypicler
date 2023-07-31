'use client';

import { GuildInput } from '@/app/types/GuildInput';
import { useSearchParams } from 'next/navigation';

export default function Page({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') as GuildInput;

  return (
    <div>
      guild name: {params.name}, input type: {type}
    </div>
  );
}
