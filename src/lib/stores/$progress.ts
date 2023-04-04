/*
on start new game:
- call the question generator, get the first yield, set it to $currentQuestion

on submit a question:
- if answer is correct, $correctCounter++, else $CorrectCounter--. If $correctCounter == $totalQuestions, game is won, return
- get a new yield from the question generator, set it to $currentQuestion

 */

import { get, writable } from 'svelte/store';
import { generateQuestion } from '../questions/generateQuestions';
import { settings, type defaultQuestionTypes } from './$settings';

export const questionUtil = {
  generator: null as null | ReturnType<typeof generateQuestion>,
  newGame() {
    const gameSettings = get(settings);
    this.generator = generateQuestion(gameSettings);
    this.next();
  },
  next() {
    currentQuestion.set(this.generator.next().value);
  },
};

export const currentQuestion = writable<{
  question: [number, number, number];
  type: keyof typeof defaultQuestionTypes;
} | null>(null);
