<script lang="ts">
  import { settings } from '../../GameSettings/$settings';
  import OneButton from './OneButton.svelte';
  $: numButtons = Math.ceil($settings.maxValueAllowed / 10) * 10;
  $: buttonArray = Array(numButtons)
    .fill(null)
    .map((item, index) => index + 1);
</script>

<div class="self">
  {#each buttonArray as buttonNumber (buttonNumber)}
    <OneButton {buttonNumber} />
  {/each}
</div>

<style>
  .self {
    grid-area: answer-buttons;
    place-self: center;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
</style>
