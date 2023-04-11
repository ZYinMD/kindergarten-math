<script context="module" lang="ts">
  declare const __version__: string;
</script>

<script lang="ts">
  import { currentView } from '../../$app';
  import { questionUtil } from '../questions/$progress';
  import { defaultQuestionTypes, settings } from './$settings';
</script>

<div class="container">
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

  <section>
    允许题型:
    <div class="question-types">
      {#each Object.keys(defaultQuestionTypes) as key (key)}
        <label>
          <input type="checkbox" bind:checked={$settings.questionTypes[key]} />
          {key}
        </label>
      {/each}
    </div>
  </section>
  <section class="hint">
    提示:
    <label>
      <input
        type="radio"
        name="hint"
        bind:group={$settings.allowHint}
        value="always"
        disabled={$settings.maxValueAllowed > 20}
      />
      始终显示
    </label>

    <label>
      <input
        type="radio"
        name="hint"
        bind:group={$settings.allowHint}
        value="onClick"
        disabled={$settings.maxValueAllowed > 20}
      />
      点击后显示
    </label>

    <label>
      <input
        type="radio"
        name="hint"
        bind:group={$settings.allowHint}
        value="no"
        disabled={$settings.maxValueAllowed > 20}
      />
      不显示
    </label>
  </section>

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

  <section class="app-version">
    <!-- svelte-ignore missing-declaration -->
    app version: {__version__}
  </section>
</div>

<style>
  .container {
    padding: 4vw;
    font-size: 2vw;
  }
  section {
    margin-bottom: 1em;
  }
  .question-types {
    margin: 0.5rem 0;
    display: grid;
    grid-template-columns: repeat(3, 13vw);
  }
  .app-version {
    color: #ddd;
  }
</style>
