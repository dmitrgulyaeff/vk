export function filterArr<T extends Record<PropertyKey, unknown>>(
  arr: T[],
  filter: Record<PropertyKey, unknown>
) {
  return arr.filter((el) => {
    for (const [k, v] of Object.entries(filter)) {
      if (v === '') continue;
      if (el[k] !== v) return false;
    }
    return true;
  });
}
