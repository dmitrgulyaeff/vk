const getRandomArrIndex = (arr: unknown[]) => {
  return Math.floor(Math.random() * arr.length);
};

export default function randomSwapArrElements<T>(
  arr: T[],
  swapCount = arr.length * 2
) {
  for (let k = 0; k < swapCount; k++) {
    const i = getRandomArrIndex(arr);
    const j = getRandomArrIndex(arr);
    // Использование деструктуризации для обмена элементов
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
