import type { defaultSettings } from '../stores/$settings';

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
    return [i, sum - i, sum];
  });
  return triplets;
}

export function getAllPermutations(maxSum: number) {
  const permutations: number[][] = [];
  for (let sum = 2; sum <= maxSum; sum++) {
    const triplets = getAllTriplets(sum);
    permutations.push(...triplets);
  }
  return permutations;
}

export function* generateQuestion(settings: typeof defaultSettings) {
  const { maxNumberAllowed, questionTypes } = settings;
  let questionPool: number[][] = [];
  while (true) {
    if (questionPool.length === 0) {
      questionPool = getAllPermutations(maxNumberAllowed);
    }
    let randomIndex = Math.floor(Math.random() * questionPool.length);
    const randomQuestion = questionPool[randomIndex];
    const questionTypesAllowed = Object.entries(questionTypes)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key);
    randomIndex = Math.floor(Math.random() * questionTypesAllowed.length);
    const randomQuestionType = questionTypesAllowed[randomIndex];
    yield { question: randomQuestion, type: randomQuestionType };
    questionPool.splice(randomIndex, 1);
  }
}
