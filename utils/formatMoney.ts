const formatter = new Intl.NumberFormat("en-us");

export function formatMoney(value: number): string {
  return formatter.format(value);
}
