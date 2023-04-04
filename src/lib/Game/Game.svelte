<script lang="ts">
  import { currentView } from '../../$app';
  import { currentQuestion, questionUtil } from '../questions/$progress';
  import AnswerButtons from './AnswerButtons.svelte';
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

<AnswerButtons />
<div>currentQuestion:{JSON.stringify($currentQuestion)}</div>

<style>
</style>
