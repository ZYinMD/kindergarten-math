<script lang="ts">
  import QuestionSettings from './lib/QuestionSettings/QuestionSettings.svelte';
  import QuestionView from './lib/QuestionView/QuestionView.svelte';
  import { currentView } from './lib/viewStore';
</script>

{#if $currentView === 'questionSettings'}
  <QuestionSettings />
{/if}

{#if $currentView === 'questions'}
  <QuestionView />
{/if}
