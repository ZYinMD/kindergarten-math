import type { defaultSettings } from '../GameSettings/$settings';

type Triplet = [number, number, number];

export function getAllAddends(sum: number) {
  const addends: number[] = [];
  for (let i = 1; i < sum; i++) {
    addends.push(i);
  }
  return addends;
}

export function getAllTriplets(sum: number) {
  const addends = getAllAddends(sum);
  const triplets = addends.map((i) => {
    return [i, sum - i, sum] as Triplet;
  });
  return triplets;
}

export function getAllPermutations(maxSum: number) {
  const permutations: Triplet[] = [];
  for (let sum = 2; sum <= maxSum; sum++) {
    const triplets = getAllTriplets(sum);
    permutations.push(...triplets);
  }
  return permutations;
}

/* A generator that generate questions one at a time based on $settings passed in.
It's an infinite generator, because we need to consider when the user keeps giving wrong answers.
First create the pool of all possible triplets, then randomly pick one from the pool. After the triplet is picked, remove it from the pool.
Then randomly pick one of the question types allowed in the settings.
If all possible triplets are exhausted, start over with the full pool.
Note that the higher the sum (the third number in the triplet), the more likely it will be picked, because it has more permutations. This leads to the problem that lots of the questions will be of the same sum, e.g. 11+9=? , 12+8=?, etc.
To avoid this, when a triplet is picked, if it has the same sum as last one, just discard it (also remove it from the pool) and generate again.
*/
export function* generateQuestion(settings: typeof defaultSettings) {
  const { maxValueAllowed, questionTypes } = settings;
  let tripletPool: Triplet[] = [];
  let lastSum = 0;
  while (true) {
    if (tripletPool.length === 0) {
      tripletPool = getAllPermutations(maxValueAllowed);
    }
    const randomIndex = Math.floor(Math.random() * tripletPool.length);
    const randomTriplet = tripletPool[randomIndex];
    const sum = randomTriplet[2];
    if (sum !== lastSum) {
      lastSum = sum;
      const questionTypesAllowed = Object.entries(questionTypes)
        .filter(([_key, value]) => Boolean(value))
        .map(([key, _value]) => key);
      const randomIndex = Math.floor(Math.random() * questionTypesAllowed.length);
      const randomQuestionType = questionTypesAllowed[randomIndex];
      yield { question: randomTriplet, type: randomQuestionType };
    }
    tripletPool.splice(randomIndex, 1);
  }
}
