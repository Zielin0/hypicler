export function capitalize(s: string): string {
  return s.toLowerCase().charAt(0).toUpperCase() + s.toLowerCase().slice(1);
}

export const format = 'DD MMM YYYY HH:mm:ss';
