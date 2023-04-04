<script lang="ts">
  import Game from './lib/Game/Game.svelte';
  import GameSettings from './lib/GameSettings/GameSettings.svelte';
  import { currentView } from './lib/stores/$currentView';
</script>

{#if $currentView === 'gameSettings'}
  <GameSettings />
{/if}

{#if $currentView === 'questions'}
  <Game />
{/if}
