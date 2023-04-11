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
  allowHint: 'always' as 'always' | 'no' | 'onClick',
};

const initialSettings = JSON.parse(localStorage.getItem('settings_v2')) || defaultSettings;

export const settings = writable(initialSettings);
export const showingHint = writable(initialSettings.allowHint === 'always');

settings.subscribe((value) => {
  console.debug(`settings changed`, value);
  if (value.maxValueAllowed > 20) value.allowHint = 'no';
  if (value.allowHint === 'always') showingHint.set(true);
  else showingHint.set(false);
  localStorage.setItem('settings_v1', JSON.stringify(value));
});
