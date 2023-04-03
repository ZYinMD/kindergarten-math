import { writable } from 'svelte/store';

export const currentView = writable<'questionSettings' | 'questions'>('questionSettings');
