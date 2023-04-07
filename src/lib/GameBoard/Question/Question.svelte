<script lang="ts">
  import { fly } from 'svelte/transition';
  import { currentQuestion } from '../../questions/$progress';
  import EmptySquare from './EmptySquare.svelte';
  $: [a, b, c] = $currentQuestion.question;
  $: type = $currentQuestion.type;
</script>

{#key $currentQuestion.question}
  <div class="self" out:fly={{ x: '-34vw', y: '-10vw', duration: 200 }}>
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
