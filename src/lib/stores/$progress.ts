/*
on start new game:
- call the question generator, get the first yield, set it to $currentQuestion

on submit a question:
- if answer is correct, $correctCounter++, else $CorrectCounter--. If $correctCounter == $totalQuestions, game is won, return
- get a new yield from the question generator, set it to $currentQuestion

 */

import { writable } from 'svelte/store';

export const $currentQuestion = writable('');
