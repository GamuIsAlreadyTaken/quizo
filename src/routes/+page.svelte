<script lang="ts">
  import SideMenu from '$lib/components/generic/side-menu.svelte';
  import Quiz from '$lib/components/quiz.svelte';
</script>

<Quiz />


<style>
  :global(body > div) {
    display: flex;
    place-content: center;
  }
</style>
