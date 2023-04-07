<script lang="ts">
  import { sineInOut } from 'svelte/easing';
  import type { TransitionConfig } from 'svelte/transition';

  import { currentQuestion } from '../../questions/$progress';
  import EmptySquare from './EmptySquare.svelte';
  $: [a, b, c] = $currentQuestion.question;
  $: type = $currentQuestion.type;
  function rotateIn(_node): TransitionConfig {
    return {
      delay: 300,
      duration: 100,
      css: (t, _u) => `
        opacity: ${t};
        transform: rotateX(${0.75 + t / 4}turn);
      `,
    };
  }
  function flyAway(_node): TransitionConfig {
    return {
      duration: 300,
      delay: 0,
      easing: sineInOut,
      css: (t, u) =>
        `transform: translateX(${-34 * u}vw) translateY(${-10 * u}vw) rotateZ(${
          -140 * u
        }deg) scale(${t});`,
    };
  }
</script>

{#key $currentQuestion.question}
  <div class="self" in:rotateIn out:flyAway>
    {#if type === 'a+b=_'}
      <code>{a} + {b} = <EmptySquare /></code>
    {/if}
    {#if type === 'a+_=c'}
      <code>{a} + <EmptySquare /> = {c}</code>
    {/if}
    {#if type === '_+b=c'}
      <code><EmptySquare /> + {b} = {c}</code>
    {/if}
    {#if type === 'c-b=_'}
      <code>{c} - {b} = <EmptySquare /></code>
    {/if}
    {#if type === 'c-_=a'}
      <code>{c} - <EmptySquare /> = {a}</code>
    {/if}
    {#if type === '_-b=a'}
      <code><EmptySquare /> - {b} = {a}</code>
    {/if}
  </div>{/key}

<style>
  .self {
    grid-area: question;
    justify-self: center;
  }
  code {
    font-size: 4.5vw;
    font-family: Consolas, monospace;
    display: flex;
    align-items: center;
  }
</style>
