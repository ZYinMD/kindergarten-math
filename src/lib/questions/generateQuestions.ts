export function getAllAddends(sum: number) {
  const addends = [];
  for (let i = 1; i < sum; i++) {
    addends.push(i);
  }
  return addends;
}

export function getAllTriplets(sum: number) {
  const addends = getAllAddends(sum);
  const triplets = addends.map((i) => {
    return [i, sum - i, sum];
  });
  return triplets;
}

export function getAllPermutations(maxSum: number) {
  const permutations = [];
  for (let sum = 2; sum <= maxSum; sum++) {
    const triplets = getAllTriplets(sum);
    permutations.push(...triplets);
  }
  return permutations;
}
