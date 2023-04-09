<script lang="ts">
  import { settings } from '../../GameSettings/$settings';
  import Tiles1to10 from './Tiles1to10.svelte';
  import Tiles1to20 from './Tiles1to20.svelte';
</script>

<div class="self">
  {#if $settings.maxValueAllowed <= 10}
    <Tiles1to10 />
  {:else}
    <Tiles1to20 />
  {/if}
</div>

<style>
</style>
