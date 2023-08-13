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
    Involve no greater numbers than: {$settings.maxValueAllowed}
    <label>
      <input type="range" bind:value={$settings.maxValueAllowed} min="5" max="20" />
    </label>
  </section>

  <section>
    Number of questions: {$settings.numQuestions}
    <label>
      <input type="range" bind:value={$settings.numQuestions} min="3" max="30" />
    </label>
  </section>

  <section>
    Type of questions:
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
    Hint:
    <label>
      <input
        type="radio"
        name="hint"
        bind:group={$settings.allowHint}
        value="always"
        disabled={$settings.maxValueAllowed > 20}
      />
      Always show
    </label>

    <label>
      <input
        type="radio"
        name="hint"
        bind:group={$settings.allowHint}
        value="onClick"
        disabled={$settings.maxValueAllowed > 20}
      />
      Show on tap
    </label>

    <label>
      <input
        type="radio"
        name="hint"
        bind:group={$settings.allowHint}
        value="no"
        disabled={$settings.maxValueAllowed > 20}
      />
      Don't show
    </label>
  </section>

  <section>
    <button
      on:click={() => {
        questionUtil.newGame();
        currentView.set('questions');
      }}
    >
      Start!
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
  button {
    font-size: 1.5vw;
  }
  section {
    margin-bottom: 3.3vw;
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
