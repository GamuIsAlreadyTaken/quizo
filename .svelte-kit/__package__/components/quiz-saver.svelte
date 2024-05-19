<script>import { questionStore } from "../question-store.js";
import { onMount } from "svelte";
export let questions;
export const reload = restoreQuestions;
onMount(restoreQuestions);
function restoreQuestions() {
  for (const [_key, value] of Object.entries(localStorage)) {
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
