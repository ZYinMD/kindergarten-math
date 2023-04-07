<script context="module" lang="ts">
  import { writable } from 'svelte/store';
  export const scoreFlasher = writable<'plus' | 'minus' | null>(null);
  let timer: number;
  scoreFlasher.subscribe((value) => {
    console.debug(`scoreFlasher changed to ${value}`);
    if (timer) clearTimeout(timer);
    if (value === null) return;
    timer = window.setTimeout(() => {
      scoreFlasher.set(null);
    }, 1e3);
  });
</script>

<script lang="ts">
</script>

{#if $scoreFlasher === 'plus'}
  <div class="self green">+1</div>
{/if}
{#if $scoreFlasher === 'minus'}
  <div class="self pink">-1</div>
{/if}

<style>
  .self {
    grid-area: flasher;
    display: grid;
    place-items: center;
    height: 5vw;
    width: 5vw;
    border-radius: 50%;
    position: relative;
    top: 0.9vw;
    color: white;
  }
  .green {
    background-color: lightgreen;
  }
  .pink {
    background-color: pink;
  }
</style>
