import { writable } from 'svelte/store';

export const defaultQuestionTypes = {
  'a+b=_': true,
  'a+_=b': false,
  '_+b=c': false,
  'c-b=_': false,
  'c-_=a': false,
  '_-b=a': false,
};

export const defaultSettings = {
  numQuestions: 10,
  maxNumberAllowed: 10,
  questionTypes: defaultQuestionTypes,
};

export const settings = writable(defaultSettings);
