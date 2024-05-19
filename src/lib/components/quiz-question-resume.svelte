<script lang="ts">
  import type { Question } from '$lib/question-store.js';
  export let question: Question;
  export let index: number;
  export let current: boolean;

  function indexToLetter(i?: number): string {
    if (i == undefined) return '';
    return String.fromCharCode(i + 65);
  }
</script>

<button class:answered={$question.selected != undefined} on:click class:current>
  <p>{index}<br /><span>{indexToLetter($question.selected)}</span></p>
</button>

<style>
  button {
    width: var(--resume-size);
    aspect-ratio: 1;
    text-align: center;
    background-color: var(--color-a);
    border: 2px solid var(--color-d);
    color: white;
    border-radius: 5px;
    font-size: 18px;
  }
  p {
    margin: 0;
  }
  span {
    font-weight: bolder;
  }

  .answered {
    background-color: var(--color-d);
    border-color: var(--color-a);
    color: black;
    font-size: 15px;
  }
  button:hover {
    background-image: linear-gradient(
      to top left,
      transparent,
      rgba(255, 255, 255, 0.5)
    );
  }
  .current {
    border-color: var(--color-b);
  }
</style>
