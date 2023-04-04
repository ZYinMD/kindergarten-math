<script lang="ts">
  import { currentQuestion } from '../questions/$progress';
  $: [a, b, c] = $currentQuestion.question;
  $: type = $currentQuestion.type;
</script>

{#if type === 'a+b=_'}
  <div>{a} + {b} = _</div>
{/if}
{#if type === 'a+_=c'}
  <div>{a} + _ = {c}</div>
{/if}
{#if type === '_+b=c'}
  <div>_ + {b} = {c}</div>
{/if}
{#if type === 'c-b=_'}
  <div>{c} - {b} = _</div>
{/if}
{#if type === 'c-_=a'}
  <div>{c} - _ = {a}</div>
{/if}
{#if type === '_-b=a'}
  <div>_ - {b} = {a}</div>
{/if}

<style>
</style>
