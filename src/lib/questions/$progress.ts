/*
on start new game:
- call the question generator, get the first yield, set it to $currentQuestion

on submit a question:
- if answer is correct, $correctCounter++, else $CorrectCounter--. If $correctCounter == $totalQuestions, game is won, return
- get a new yield from the question generator, set it to $currentQuestion

 */

import { derived, get, writable } from 'svelte/store';
import { settings, showingHint, type defaultQuestionTypes } from '../GameSettings/$settings';
import { generateQuestion } from './generateQuestions';

export const correctCounter = writable(0);

export const questionUtil = {
  generator: null as null | ReturnType<typeof generateQuestion>,
  newGame() {
    correctCounter.set(0);
    const gameSettings = get(settings);
    this.generator = generateQuestion(gameSettings);
    this.next();
  },
  next() {
    currentQuestion.set(this.generator.next().value);
    if (get(settings).allowHint !== 'always') showingHint.set(false);
  },
};

export const currentQuestion = writable<{
  question: [number, number, number];
  type: keyof typeof defaultQuestionTypes;
} | null>(null);

currentQuestion.subscribe((value) => {
  console.debug('current question:', JSON.stringify(value));
});

export const correctAnswer = derived(currentQuestion, ($currentQuestion) => {
  if (!$currentQuestion) return NaN;
  const { question, type } = $currentQuestion;
  return !type.includes('a')
    ? question[0]
    : !type.includes('b')
    ? question[1]
    : !type.includes('c')
    ? question[2]
    : NaN;
});

export const currentQuestionAnswer = writable({
  value: NaN,
  isCorrect: false,
  hasTriedTimes: 0,
});
