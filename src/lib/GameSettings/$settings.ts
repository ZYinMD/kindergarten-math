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
  schemaVersion: 2, // if the shape of this object gets changed in the future, increment this number
  numQuestions: 10,
  maxValueAllowed: 10,
  questionTypes: defaultQuestionTypes,
  allowHint: 'always' as 'always' | 'no' | 'onClick',
};

const persistedUserSettings = JSON.parse(
  localStorage.getItem(`settings_v${defaultSettings.schemaVersion}`),
);
console.debug('Settings used last time:', persistedUserSettings);

const initialSettings = persistedUserSettings || defaultSettings;

export const settings = writable(initialSettings);
export const showingHint = writable(initialSettings.allowHint === 'always');

settings.subscribe((value) => {
  console.debug(`settings changed`, value);
  if (value.maxValueAllowed > 20) value.allowHint = 'no';
  if (value.allowHint === 'always') showingHint.set(true);
  else showingHint.set(false);
  localStorage.setItem('settings_v2', JSON.stringify(value));
});
