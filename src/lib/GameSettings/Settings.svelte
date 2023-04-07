<script context="module" lang="ts">
  declare const __version__: string;
</script>

<script lang="ts">
  import { currentView } from '../../$app';
  import { questionUtil } from '../questions/$progress';
  import { defaultQuestionTypes, settings } from './$settings';
</script>

svm

<section>
  最大数值不超过: {$settings.maxValueAllowed}

  <label>
    <input type="range" bind:value={$settings.maxValueAllowed} min="5" max="20" />
  </label>
</section>

<section>
  题目数量: {$settings.numQuestions}
  <label>
    <input type="range" bind:value={$settings.numQuestions} min="5" max="25" />
  </label>
</section>

<section class="question-types">
  包含题型:

  {#each Object.keys(defaultQuestionTypes) as key (key)}
    <label>
      <input type="checkbox" bind:checked={$settings.questionTypes[key]} />
      {key}
    </label>
  {/each}
</section>
<div>
  <!-- svelte-ignore missing-declaration -->
  app version: {__version__}
</div>

<section>
  <button
    on:click={() => {
      questionUtil.newGame();
      currentView.set('questions');
    }}
  >
    开始
  </button>
</section>

<style>
  .question-types {
    display: flex;
    flex-direction: column;
  }
</style>
