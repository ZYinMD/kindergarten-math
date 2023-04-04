<script lang="ts">
  import GameSettings from './lib/GameSettings/GameSettings.svelte';
  import Game from './lib/Game/Game.svelte';
  import { currentView } from './lib/stores/$currentView';
</script>

{#if $currentView === 'questionSettings'}
  <GameSettings />
{/if}

{#if $currentView === 'questions'}
  <Game />
{/if}
