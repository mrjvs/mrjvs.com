<script>
  import { fly } from 'svelte/transition';

  export let cur;
  export let num;
</script>

{#if cur >= num}
  <div transition:fly="{{ y: 50, duration: 300 }}">
    <slot/>
  </div>
{/if}
