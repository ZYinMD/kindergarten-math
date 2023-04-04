<script lang="ts">
  import { currentView } from '../../$app';
  import { settings } from '../GameSettings/$settings';
  import { correctCounter, currentQuestion, questionUtil } from '../questions/$progress';
  import AnswerButtons from './AnswerButtons.svelte';
  import Question from './Question.svelte';
  import Score from './Score.svelte';
  import Success from './Success.svelte';
</script>

<button
  on:click={() => {
    currentView.set('gameSettings');
  }}>new</button
>

<Score />
{#if $correctCounter >= $settings.numQuestions}
  <Success />
{:else if !$currentQuestion}
  <div>nothing to display, shouldn't happen</div>
{:else}
  <Question />
  <button
    on:click={() => {
      questionUtil.next();
    }}>next</button
  >
  <AnswerButtons />
  <div>currentQuestion:{JSON.stringify($currentQuestion)}</div>
{/if}

<style>
</style>
