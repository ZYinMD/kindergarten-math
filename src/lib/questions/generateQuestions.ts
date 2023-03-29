import { test, expect } from 'vitest';

export function getAllAddends(sum: number) {
  const addends = [];
  for (let i = 1; i < sum; i++) {
    addends.push(i);
  }
  return addends;
}

if (import.meta.vitest) {
  test('getAllAddends', () => {
    expect(getAllAddends(2)).toEqual([1]);
    expect(getAllAddends(5)).toEqual([1, 2, 3, 4]);
  });
}

export function getAllTriplets(sum: number) {
  const addends = getAllAddends(sum);
  const triplets = addends.map((i) => {
    return [i, sum - i, sum];
  });
  return triplets;
}

if (import.meta.vitest) {
  test('getAllAddendPairs', () => {
    expect(getAllTriplets(2)).toEqual([[1, 1, 2]]);
    expect(getAllTriplets(4)).toEqual([
      [1, 3, 4],
      [2, 2, 4],
      [3, 1, 4],
    ]);
  });
}

export function getAllPermutations(maxSum: number) {
  const permutations = [];
  for (let sum = 2; sum <= maxSum; sum++) {
    const triplets = getAllTriplets(sum);
    permutations.push(...triplets);
  }
  return permutations;
}

if (import.meta.vitest) {
  test('getAllPermutations', () => {
    expect(getAllPermutations(5)).toEqual([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
      [1, 3, 4],
      [2, 2, 4],
      [3, 1, 4],
      [1, 4, 5],
      [2, 3, 5],
      [3, 2, 5],
      [4, 1, 5],
    ]);
  });
}
