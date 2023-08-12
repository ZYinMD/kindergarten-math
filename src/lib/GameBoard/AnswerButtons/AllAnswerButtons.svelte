<script lang="ts">
  import { settings } from '../../GameSettings/$settings';
  import OneButton from './OneButton.svelte';
  $: numButtons = Math.ceil($settings.maxValueAllowed / 10) * 10; // show 10 buttons if < 10, else show 20 buttons if < 20
  $: numbers = Array(numButtons)
    .fill(null)
    .map((_item, index) => index + 1);
</script>

<div class="container">
  {#each numbers as buttonNumber (buttonNumber)}
    <OneButton {buttonNumber} />
  {/each}
</div>

<style>
  .container {
    grid-area: answer-buttons;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
</style>
