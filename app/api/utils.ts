export async function getUUIDByName(name: string): Promise<string> {
  const response = await fetch(
    `https://api.ashcon.app/mojang/v2/uuid/${name}`
  ).then((data) => data.text());

  return response;
}

export const customToFixed = (number: number): string =>
  number % 1 === 0 ? number.toString() : number.toFixed(2);
