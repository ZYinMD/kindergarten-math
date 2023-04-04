<script lang="ts">
  import GameBoard from './lib/GameBoard/GameBoard.svelte';
  import Settings from './lib/GameSettings/Settings.svelte';
  import { currentView } from './$app';
</script>

{#if $currentView === 'gameSettings'}
  <Settings />
{/if}

{#if $currentView === 'questions'}
  <GameBoard />
{/if}
