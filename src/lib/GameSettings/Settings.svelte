<script lang="ts">
  import { currentView } from '../../$app';
  import { questionUtil } from '../questions/$progress';
  import { defaultQuestionTypes, settings } from './$settings';
</script>

<section>
  最大数值不超过: {$settings.maxNumberAllowed}

  <label>
    <input type="range" bind:value={$settings.maxNumberAllowed} min="5" max="20" />
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
  store value:
  <pre>{JSON.stringify($settings, null, 2)}</pre>
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
