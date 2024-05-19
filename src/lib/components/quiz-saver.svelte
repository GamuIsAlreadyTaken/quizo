<script lang="ts">
  import { questionStore, type Question } from '$lib/question-store.js';
  import { onMount } from 'svelte';

  export let questions: Question[];
  export const reload = restoreQuestions;

  onMount(restoreQuestions);

  function restoreQuestions() {
    for (const [_key, value] of Object.entries(localStorage)) {
      // Check if key is a question (maybe prepend each key with _question_)
      questions.push(questionStore(JSON.parse(value)));
    }

    for (const question of questions) {
      question.subscribe((q) => {
        localStorage.setItem(q.question, JSON.stringify(q));
      });
    }
  }
</script>

<button
  on:click={() => {
    questions = [];
    localStorage.clear();
  }}>Reset local data</button
>
