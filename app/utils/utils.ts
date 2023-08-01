export function capitalize(s: string): string {
  return s.toLowerCase().charAt(0).toUpperCase() + s.toLowerCase().slice(1);
}
