import { expect, test } from 'vitest';
import { getAllAddends, getAllPermutations, getAllTriplets } from './generateQuestions';

test('getAllAddends', () => {
  expect(getAllAddends(2)).toEqual([1]);
  expect(getAllAddends(5)).toEqual([1, 2, 3, 4]);
});

test('getAllAddendPairs', () => {
  expect(getAllTriplets(2)).toEqual([[1, 1, 2]]);
  expect(getAllTriplets(4)).toEqual([
    [1, 3, 4],
    [2, 2, 4],
    [3, 1, 4],
  ]);
});

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
