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
    <button
      on:click={() => {
        questionUtil.newGame();
        currentView.set('questions');
      }}
    >
      Start Game!
    </button>
  </section>

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

  <section class="app-version">
    <!-- svelte-ignore missing-declaration -->
    app version: {__version__}
  </section>
</div>

<style>
  .container {
    font-family: monospace;
    padding: 4vw;
    font-size: 20px;
  }
  input {
    transform: scale(1.5);
    transform-origin: left;
  }
  button {
    font-size: 20px;
  }
  section {
    margin-bottom: 30px;
  }
  .question-types {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
  }
  .question-types label {
    margin: 0 0 4px -1px;
    letter-spacing: 4px;
    width: fit-content;
  }
  .hint {
    display: flex;
    flex-direction: column;
  }
  .hint input {
    margin: 11px 5px 0 0;
  }
  .hint label {
    font-size: 18px;
    width: fit-content;
  }
  .app-version {
    color: #ddd;
  }
</style>
