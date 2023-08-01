export type Rank = {
  key: string;
  name: string;
  color: string;
  borderColor: string;
  nameColor: string;
};

export const rankMap: Rank[] = [
  {
    key: 'NORMAL',
    name: 'NORMAL',
    color: '#909296',
    borderColor: '#909296',
    nameColor: '#909296',
  },
  {
    key: 'VIP',
    name: 'VIP',
    color: '#82C91E',
    borderColor: '#82C91E',
    nameColor: '#94D82D',
  },
  {
    key: 'VIP_PLUS',
    name: 'VIP+',
    color: '#82C91E',
    borderColor: '#82C91E',
    nameColor: '#94D82D',
  },
  {
    key: 'MVP',
    name: 'MVP',
    color: '#3BC9DB',
    borderColor: '#3BC9DB',
    nameColor: '#66D9E8',
  },
  {
    key: 'MVP_PLUS',
    name: 'MVP+',
    color: '#3BC9DB',
    borderColor: '#3BC9DB',
    nameColor: '#66D9E8',
  },
  {
    key: 'SUPERSTAR',
    name: 'MVP++',
    color: '#FAB005',
    borderColor: '#FAB005',
    nameColor: '#FCC419',
  },
  {
    key: 'ADMIN',
    name: 'ADMIN',
    color: '#F03E3E',
    borderColor: '#F03E3E',
    nameColor: '#FA5252',
  },
  {
    key: 'OWNER',
    name: 'OWNER',
    color: '#E03131',
    borderColor: '#E03131',
    nameColor: '#F03E3E',
  },
  {
    key: 'YOUTUBER',
    name: 'YOUTUBE',
    color: '#F03E3E',
    borderColor: '#909296',
    nameColor: '#FA5252',
  },
  {
    key: 'PIG',
    name: 'PIG+++',
    color: '#F06595',
    borderColor: '#F06595',
    nameColor: '#F783AC',
  },
];

const guildRankMap = {
  GUILDMASTER: 'Guild Master',
  OFFICER: 'Officer',
};