export async function getUUIDByName(name: string): Promise<string> {
  const response = await fetch(
    `https://api.mojang.com/users/profiles/minecraft/${name}`
  );
  return (await response.json()).id;
}

export const customToFixed = (number: number): string =>
  number % 1 === 0 ? number.toString() : number.toFixed(2);
