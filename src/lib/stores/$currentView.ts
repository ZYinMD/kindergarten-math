import { writable } from 'svelte/store';

export const currentView = writable<'gameSettings' | 'questions'>('gameSettings');
