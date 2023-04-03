import { writable } from 'svelte/store';

export const defaultQuestionTypes = {
  '1+2=_': true,
  '1+_=3': false,
  '_+2=3': false,
  '3-2=_': false,
  '3-_=1': false,
  '_-2=1': false,
};

export const settings = writable({
  numQuestions: 10,
  maxNumberAllowed: 10,
  questionTypes: defaultQuestionTypes,
});
