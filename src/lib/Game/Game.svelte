<script lang="ts">
  import { currentView } from '../stores/$currentView';
  import { currentQuestion, questionUtil } from '../questions/$progress';
  import Question from './Question.svelte';
</script>

<button
  on:click={() => {
    currentView.set('gameSettings');
  }}>new</button
>

{#if !$currentQuestion}
  <div>nothing to display, shouldn't happen</div>
{:else}
  <Question />
  <button
    on:click={() => {
      questionUtil.next();
    }}>next</button
  >
{/if}

<div>{JSON.stringify($currentQuestion)}</div>

<style>
</style>
