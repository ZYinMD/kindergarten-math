<script lang="ts">
  import Game from './lib/Game/Game.svelte';
  import Settings from './lib/GameSettings/Settings.svelte';
  import { currentView } from './$app';
</script>

{#if $currentView === 'gameSettings'}
  <Settings />
{/if}

{#if $currentView === 'questions'}
  <Game />
{/if}
