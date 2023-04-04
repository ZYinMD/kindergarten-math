<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { currentQuestion } from '../questions/$progress';

  $: numButtons = Math.ceil($settings.maxValueAllowed / 10) * 10;
  $: buttonArray = Array(numButtons)
    .fill(null)
    .map((item, index) => index + 1);
</script>

<section>
  {#each buttonArray as buttonNumber (buttonNumber)}
    <button
      on:click={() => {
        const { question, type } = $currentQuestion;
        let answer = 0;
        if (type[0] === '_') answer = question[0];
        if (type[2] === '_') answer = question[1];
        if (type[4] === '_') answer = question[2];
        if (buttonNumber === answer) {
          console.log('correct');
        } else {
          console.log('wrong');
        }
      }}
    >
      {buttonNumber}
    </button>
  {/each}
</section>

<style>
</style>
