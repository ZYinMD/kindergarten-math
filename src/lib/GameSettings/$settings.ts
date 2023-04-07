import { writable } from 'svelte/store';

export const defaultQuestionTypes = {
  'a+b=_': true,
  'a+_=c': false,
  '_+b=c': false,
  'c-b=_': false,
  'c-_=a': false,
  '_-b=a': false,
};

export const defaultSettings = {
  numQuestions: 10,
  maxValueAllowed: 10,
  questionTypes: defaultQuestionTypes,
  allowHint: 'yes' as 'yes' | 'no' | 'onClick',
};

const initialSettings = JSON.parse(localStorage.getItem('settings_v2')) || defaultSettings;

export const settings = writable(initialSettings);

settings.subscribe((value) => {
  console.debug(`settings changed`, value);
  if (value.maxValueAllowed > 20) value.allowHint = 'no';
  localStorage.setItem('settings_v1', JSON.stringify(value));
});
