import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, b as each, d as add_attribute } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const css$7 = {
  code: "div.svelte-1eo8awq,div.svelte-1eo8awq::after,div.svelte-1eo8awq::before{width:25px;height:5px;background-color:white;border-radius:5px;content:'';display:block;transition:transform 100ms ease, rotate 100ms ease}div.svelte-1eo8awq::after{transform:translateY(60%)}div.svelte-1eo8awq::before{transform:translateY(-160%)}.opened.svelte-1eo8awq{transform:rotate(45deg)}.opened.svelte-1eo8awq::after{transform:translateY(-100%)}.opened.svelte-1eo8awq::before{transform:rotate(-90deg)}",
  map: `{"version":3,"file":"burger-cross.svelte","sources":["burger-cross.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let opened;\\n<\/script>\\r\\n\\r\\n<div class:opened></div>\\r\\n\\r\\n<style>\\r\\n  div,\\r\\n  div::after,\\r\\n  div::before {\\r\\n    width: 25px;\\r\\n    height: 5px;\\r\\n    background-color: white;\\r\\n    border-radius: 5px;\\r\\n    content: '';\\r\\n    display: block;\\r\\n\\r\\n    transition: transform 100ms ease, rotate 100ms ease;\\r\\n  }\\r\\n\\r\\n  div::after {\\r\\n    transform: translateY(60%);\\r\\n  }\\r\\n  div::before {\\r\\n    transform: translateY(-160%);\\r\\n  }\\r\\n\\r\\n  .opened {\\r\\n    transform: rotate(45deg);\\r\\n  }\\r\\n  .opened::after {\\r\\n    transform: translateY(-100%);\\r\\n  }\\r\\n\\r\\n  .opened::before {\\r\\n    transform: rotate(-90deg);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAME,kBAAG,CACH,kBAAG,OAAO,CACV,kBAAG,QAAS,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CAEd,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,KAAK,CAAC,IACjD,CAEA,kBAAG,OAAQ,CACT,SAAS,CAAE,WAAW,GAAG,CAC3B,CACA,kBAAG,QAAS,CACV,SAAS,CAAE,WAAW,KAAK,CAC7B,CAEA,sBAAQ,CACN,SAAS,CAAE,OAAO,KAAK,CACzB,CACA,sBAAO,OAAQ,CACb,SAAS,CAAE,WAAW,KAAK,CAC7B,CAEA,sBAAO,QAAS,CACd,SAAS,CAAE,OAAO,MAAM,CAC1B"}`
};
const Burger_cross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { opened } = $$props;
  if ($$props.opened === void 0 && $$bindings.opened && opened !== void 0)
    $$bindings.opened(opened);
  $$result.css.add(css$7);
  return `<div class="${["svelte-1eo8awq", opened ? "opened" : ""].join(" ").trim()}"></div>`;
});
const css$6 = {
  code: "div.svelte-bwh1uj.svelte-bwh1uj,button.svelte-bwh1uj.svelte-bwh1uj{transition:transform 250ms ease}div.svelte-bwh1uj.svelte-bwh1uj{background-color:var(--bg);height:100%;width:var(--width);transform:translateX(-100%);position:absolute;left:0;top:0;z-index:1}button.svelte-bwh1uj.svelte-bwh1uj{transform:translateX(var(--width));background-color:transparent;border:none;padding:20px 10px}.opened.svelte-bwh1uj.svelte-bwh1uj{transform:translateX(0%)}.opened.svelte-bwh1uj button.svelte-bwh1uj{transform:translateX(calc(var(--width) - 100%))}",
  map: '{"version":3,"file":"side-menu.svelte","sources":["side-menu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BurgerCross from \\"./burger-cross.svelte\\";\\nexport let opened = true;\\nconst flip = () => opened = !opened;\\n<\/script>\\r\\n\\r\\n<div class:opened>\\r\\n  <button on:click={flip}> <BurgerCross {opened} /></button>\\r\\n  <slot />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  div,\\r\\n  button {\\r\\n    transition: transform 250ms ease;\\r\\n  }\\r\\n  div {\\r\\n    background-color: var(--bg);\\r\\n    height: 100%;\\r\\n    width: var(--width);\\r\\n    transform: translateX(-100%);\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    z-index: 1;\\r\\n  }\\r\\n  button {\\r\\n    transform: translateX(var(--width));\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    padding: 20px 10px;\\r\\n  }\\r\\n  .opened {\\r\\n    transform: translateX(0%);\\r\\n  }\\r\\n  .opened button {\\r\\n    transform: translateX(calc(var(--width) - 100%));\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAWE,+BAAG,CACH,kCAAO,CACL,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,IAC9B,CACA,+BAAI,CACF,gBAAgB,CAAE,IAAI,IAAI,CAAC,CAC3B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,CACX,CACA,kCAAO,CACL,SAAS,CAAE,WAAW,IAAI,OAAO,CAAC,CAAC,CACnC,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,mCAAQ,CACN,SAAS,CAAE,WAAW,EAAE,CAC1B,CACA,qBAAO,CAAC,oBAAO,CACb,SAAS,CAAE,WAAW,KAAK,IAAI,OAAO,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD"}'
};
const Side_menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { opened = true } = $$props;
  if ($$props.opened === void 0 && $$bindings.opened && opened !== void 0)
    $$bindings.opened(opened);
  $$result.css.add(css$6);
  return `<div class="${["svelte-bwh1uj", opened ? "opened" : ""].join(" ").trim()}"><button class="svelte-bwh1uj">${validate_component(Burger_cross, "BurgerCross").$$render($$result, { opened }, {}, {})}</button> ${slots.default ? slots.default({}) : ``} </div>`;
});
const questionStore = (q) => {
  const { subscribe: subscribe2, set, update } = writable(q);
  const answer = (id) => {
    update((a) => {
      a.selected = a.selected == id ? void 0 : id;
      return a;
    });
  };
  return { subscribe: subscribe2, answer };
};
const css$5 = {
  code: "button.svelte-1y746i7{width:var(--resume-size);aspect-ratio:1;text-align:center;background-color:var(--color-a);border:2px solid var(--color-d);color:white;border-radius:5px;font-size:18px}p.svelte-1y746i7{margin:0}span.svelte-1y746i7{font-weight:bolder}.answered.svelte-1y746i7{background-color:var(--color-d);border-color:var(--color-a);color:black;font-size:15px}button.svelte-1y746i7:hover{background-image:linear-gradient(\r\n      to top left,\r\n      transparent,\r\n      rgba(255, 255, 255, 0.5)\r\n    )}.current.svelte-1y746i7{border-color:var(--color-b)}",
  map: '{"version":3,"file":"quiz-question-resume.svelte","sources":["quiz-question-resume.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let question;\\nexport let index;\\nexport let current;\\nfunction indexToLetter(i) {\\n  if (i == void 0)\\n    return \\"\\";\\n  return String.fromCharCode(i + 65);\\n}\\n<\/script>\\r\\n\\r\\n<button class:answered={$question.selected != undefined} on:click class:current>\\r\\n  <p>{index}<br /><span>{indexToLetter($question.selected)}</span></p>\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n  button {\\r\\n    width: var(--resume-size);\\r\\n    aspect-ratio: 1;\\r\\n    text-align: center;\\r\\n    background-color: var(--color-a);\\r\\n    border: 2px solid var(--color-d);\\r\\n    color: white;\\r\\n    border-radius: 5px;\\r\\n    font-size: 18px;\\r\\n  }\\r\\n  p {\\r\\n    margin: 0;\\r\\n  }\\r\\n  span {\\r\\n    font-weight: bolder;\\r\\n  }\\r\\n\\r\\n  .answered {\\r\\n    background-color: var(--color-d);\\r\\n    border-color: var(--color-a);\\r\\n    color: black;\\r\\n    font-size: 15px;\\r\\n  }\\r\\n  button:hover {\\r\\n    background-image: linear-gradient(\\r\\n      to top left,\\r\\n      transparent,\\r\\n      rgba(255, 255, 255, 0.5)\\r\\n    );\\r\\n  }\\r\\n  .current {\\r\\n    border-color: var(--color-b);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAeE,qBAAO,CACL,KAAK,CAAE,IAAI,aAAa,CAAC,CACzB,YAAY,CAAE,CAAC,CACf,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CAChC,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IACb,CACA,gBAAE,CACA,MAAM,CAAE,CACV,CACA,mBAAK,CACH,WAAW,CAAE,MACf,CAEA,wBAAU,CACR,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,YAAY,CAAE,IAAI,SAAS,CAAC,CAC5B,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IACb,CACA,qBAAM,MAAO,CACX,gBAAgB,CAAE;AACtB,MAAM,EAAE,CAAC,GAAG,CAAC,IAAI,CAAC;AAClB,MAAM,WAAW,CAAC;AAClB,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,KACE,CACA,uBAAS,CACP,YAAY,CAAE,IAAI,SAAS,CAC7B"}'
};
function indexToLetter(i) {
  if (i == void 0)
    return "";
  return String.fromCharCode(i + 65);
}
const Quiz_question_resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $question, $$unsubscribe_question;
  let { question } = $$props;
  $$unsubscribe_question = subscribe(question, (value) => $question = value);
  let { index } = $$props;
  let { current } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css$5);
  $$unsubscribe_question();
  return `<button class="${[
    "svelte-1y746i7",
    ($question.selected != void 0 ? "answered" : "") + " " + (current ? "current" : "")
  ].join(" ").trim()}"><p class="svelte-1y746i7">${escape(index)}<br><span class="svelte-1y746i7">${escape(indexToLetter($question.selected))}</span></p> </button>`;
});
const css$4 = {
  code: "div.svelte-12p693g{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:start;gap:var(--resume-gap);--resume-min-width:calc(\r\n      (var(--resume-size) + var(--resume-gap)) * var(--resume-min-columns)\r\n    );--resume-max-width:calc(\r\n      (var(--resume-size) + var(--resume-gap)) * var(--resume-max-columns)\r\n    );min-width:var(--resume-min-width);max-width:var(--resume-max-width)}",
  map: '{"version":3,"file":"quiz-minimap.svelte","sources":["quiz-minimap.svelte"],"sourcesContent":["<script lang=\\"ts\\">import QuizQuestionResume from \\"./quiz-question-resume.svelte\\";\\nexport let questions;\\nexport let index;\\n<\/script>\\r\\n\\r\\n<div>\\r\\n  {#each questions as question, i}\\r\\n    <QuizQuestionResume\\r\\n      {question}\\r\\n      index={i + 1}\\r\\n      on:click={() => index.set(i)}\\r\\n      current={$index == i}\\r\\n    />\\r\\n  {/each}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  div {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n    align-content: start;\\r\\n    gap: var(--resume-gap);\\r\\n\\r\\n    --resume-min-width: calc(\\r\\n      (var(--resume-size) + var(--resume-gap)) * var(--resume-min-columns)\\r\\n    );\\r\\n    --resume-max-width: calc(\\r\\n      (var(--resume-size) + var(--resume-gap)) * var(--resume-max-columns)\\r\\n    );\\r\\n\\r\\n    min-width: var(--resume-min-width);\\r\\n    max-width: var(--resume-max-width);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiBE,kBAAI,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,KAAK,CACpB,GAAG,CAAE,IAAI,YAAY,CAAC,CAEtB,kBAAkB,CAAE;AACxB;AACA,KAAK,CACD,kBAAkB,CAAE;AACxB;AACA,KAAK,CAED,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,SAAS,CAAE,IAAI,kBAAkB,CACnC"}'
};
const Quiz_minimap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $index, $$unsubscribe_index;
  let { questions } = $$props;
  let { index } = $$props;
  $$unsubscribe_index = subscribe(index, (value) => $index = value);
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$4);
  $$unsubscribe_index();
  return `<div class="svelte-12p693g">${each(questions, (question, i) => {
    return `${validate_component(Quiz_question_resume, "QuizQuestionResume").$$render(
      $$result,
      {
        question,
        index: i + 1,
        current: $index == i
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css$3 = {
  code: ".container.svelte-1b1qep.svelte-1b1qep{background-color:var(--color-a);display:grid;grid-template-rows:auto auto;border-radius:15px;max-width:600px;min-width:300px;height:fit-content;box-shadow:0 0 0 4px inset var(--color-b);padding-bottom:5px}.question.svelte-1b1qep.svelte-1b1qep{background-color:var(--color-b);display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr auto 1fr;place-content:center;text-align:center;border-radius:15px;padding:10px}.question.svelte-1b1qep h2.svelte-1b1qep{grid-column:1 / 4}.options.svelte-1b1qep.svelte-1b1qep{display:flex;flex-direction:column;gap:5px;justify-content:space-evenly;padding:10px}button.svelte-1b1qep.svelte-1b1qep{background-color:var(--color-c);border:none;height:60px;min-height:60px;min-width:max(30%, 190px);font-size:medium;border-radius:10px}.selected.svelte-1b1qep.svelte-1b1qep{background-color:var(--color-d)}",
  map: '{"version":3,"file":"quiz-question.svelte","sources":["quiz-question.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let data;\\n<\/script>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n  <div class=\\"question\\">\\r\\n    <slot />\\r\\n    <h2>{$data.question}</h2>\\r\\n  </div>\\r\\n  <div class=\\"options\\">\\r\\n    {#each $data.options as option, id}\\r\\n      <button\\r\\n        class:selected={$data.selected == id}\\r\\n        on:click={() => data.answer(id)}\\r\\n      >\\r\\n        {option}\\r\\n      </button>\\r\\n    {/each}\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .container {\\r\\n    background-color: var(--color-a);\\r\\n    display: grid;\\r\\n    grid-template-rows: auto auto;\\r\\n    border-radius: 15px;\\r\\n    max-width: 600px;\\r\\n    min-width: 300px;\\r\\n    height: fit-content;\\r\\n\\r\\n    box-shadow: 0 0 0 4px inset var(--color-b);\\r\\n    padding-bottom: 5px;\\r\\n  }\\r\\n\\r\\n  .question {\\r\\n    background-color: var(--color-b);\\r\\n    display: grid;\\r\\n    grid-template-rows: auto 1fr;\\r\\n    grid-template-columns: 1fr auto 1fr;\\r\\n    place-content: center;\\r\\n    text-align: center;\\r\\n    border-radius: 15px;\\r\\n    padding: 10px;\\r\\n  }\\r\\n\\r\\n  .question h2 {\\r\\n    grid-column: 1 / 4;\\r\\n  }\\r\\n\\r\\n  .options {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n    justify-content: space-evenly;\\r\\n    padding: 10px;\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    background-color: var(--color-c);\\r\\n    border: none;\\r\\n    height: 60px;\\r\\n    min-height: 60px;\\r\\n    min-width: max(30%, 190px);\\r\\n    font-size: medium;\\r\\n    border-radius: 10px;\\r\\n  }\\r\\n  .selected {\\r\\n    background-color: var(--color-d);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqBE,sCAAW,CACT,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CAAC,IAAI,CAC7B,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,WAAW,CAEnB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CAC1C,cAAc,CAAE,GAClB,CAEA,qCAAU,CACR,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CAAC,GAAG,CAC5B,qBAAqB,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CACnC,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IACX,CAEA,uBAAS,CAAC,gBAAG,CACX,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,CACnB,CAEA,oCAAS,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,YAAY,CAC7B,OAAO,CAAE,IACX,CAEA,kCAAO,CACL,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,GAAG,CAAC,CAAC,KAAK,CAAC,CAC1B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACjB,CACA,qCAAU,CACR,gBAAgB,CAAE,IAAI,SAAS,CACjC"}'
};
const Quiz_question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  let { data } = $$props;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  $$unsubscribe_data();
  return `<div class="container svelte-1b1qep"><div class="question svelte-1b1qep">${slots.default ? slots.default({}) : ``} <h2 class="svelte-1b1qep">${escape($data.question)}</h2></div> <div class="options svelte-1b1qep">${each($data.options, (option, id) => {
    return `<button class="${["svelte-1b1qep", $data.selected == id ? "selected" : ""].join(" ").trim()}">${escape(option)} </button>`;
  })}</div> </div>`;
});
const css$2 = {
  code: "button.svelte-19gylfi,input.svelte-19gylfi{background-color:var(--color-a);color:white;font-size:larger}input.svelte-19gylfi{width:60px;border:none;text-align:center;appearance:textfield;font-size:30px}input.svelte-19gylfi:focus{outline:none}button.svelte-19gylfi{border:none;height:40px;font-size:30pt;font-weight:bolder;line-height:10pt}button.svelte-19gylfi:first-of-type{border-radius:15px 0 0 15px}button.svelte-19gylfi:last-of-type{border-radius:0 15px 15px 0}button.svelte-19gylfi:active{background-color:color-mix(\r\n      in hsl shorter hue,\r\n      var(--color-a) 40%,\r\n      var(--color-c) 60%\r\n    )}",
  map: `{"version":3,"file":"quiz-stack.svelte","sources":["quiz-stack.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { writable } from \\"svelte/store\\";\\nimport QuizQuestion from \\"./quiz-question.svelte\\";\\nexport let questions;\\nexport const index = writable(0);\\nconst min = 0;\\nconst max = questions.length - 1;\\nconst stackLimit = (v) => clamp(v, min, max);\\nconst prev = () => index.update((i) => stackLimit(i - 1));\\nconst next = () => index.update((i) => stackLimit(i + 1));\\nconst set = (e) => index.set(stackLimit(+e.target.value - 1));\\nconst clamp = (a, min2, max2) => a > max2 ? max2 : a < min2 ? min2 : a;\\n<\/script>\\r\\n\\r\\n<QuizQuestion data={questions[$index]}>\\r\\n  <svelte:fragment>\\r\\n    <button on:click={prev}>{'<'}</button>\\r\\n    <input\\r\\n      type=\\"number\\"\\r\\n      on:input={set}\\r\\n      min={min + 1}\\r\\n      max={max + 1}\\r\\n      value={$index + 1}\\r\\n    />\\r\\n    <button on:click={next}>{'>'}</button>\\r\\n  </svelte:fragment>\\r\\n</QuizQuestion>\\r\\n\\r\\n<style>\\r\\n  button,\\r\\n  input {\\r\\n    background-color: var(--color-a);\\r\\n    color: white;\\r\\n    font-size: larger;\\r\\n  }\\r\\n  input {\\r\\n    width: 60px;\\r\\n    border: none;\\r\\n    text-align: center;\\r\\n    appearance: textfield;\\r\\n    font-size: 30px;\\r\\n  }\\r\\n  input:focus {\\r\\n    outline: none;\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    border: none;\\r\\n    height: 40px;\\r\\n    font-size: 30pt;\\r\\n    font-weight: bolder;\\r\\n    line-height: 10pt;\\r\\n  }\\r\\n  button:first-of-type {\\r\\n    border-radius: 15px 0 0 15px;\\r\\n  }\\r\\n  button:last-of-type {\\r\\n    border-radius: 0 15px 15px 0;\\r\\n  }\\r\\n\\r\\n  button:active {\\r\\n    background-color: color-mix(\\r\\n      in hsl shorter hue,\\r\\n      var(--color-a) 40%,\\r\\n      var(--color-c) 60%\\r\\n    );\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BE,qBAAM,CACN,oBAAM,CACJ,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,MACb,CACA,oBAAM,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,SAAS,CACrB,SAAS,CAAE,IACb,CACA,oBAAK,MAAO,CACV,OAAO,CAAE,IACX,CAEA,qBAAO,CACL,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IACf,CACA,qBAAM,cAAe,CACnB,aAAa,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,IAC1B,CACA,qBAAM,aAAc,CAClB,aAAa,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,CAC7B,CAEA,qBAAM,OAAQ,CACZ,gBAAgB,CAAE;AACtB,MAAM,EAAE,CAAC,GAAG,CAAC,OAAO,CAAC,GAAG,CAAC;AACzB,MAAM,IAAI,SAAS,CAAC,CAAC,GAAG,CAAC;AACzB,MAAM,IAAI,SAAS,CAAC,CAAC,GAAG;AACxB,KACE"}`
};
const min = 0;
const Quiz_stack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $index, $$unsubscribe_index;
  let { questions } = $$props;
  const index = writable(0);
  $$unsubscribe_index = subscribe(index, (value) => $index = value);
  const max = questions.length - 1;
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$2);
  $$unsubscribe_index();
  return `${validate_component(Quiz_question, "QuizQuestion").$$render($$result, { data: questions[$index] }, {}, {
    default: () => {
      return `<button class="svelte-19gylfi">${escape("<")}</button> <input type="number"${add_attribute("min", min + 1, 0)}${add_attribute("max", max + 1, 0)}${add_attribute("value", $index + 1, 0)} class="svelte-19gylfi"> <button class="svelte-19gylfi">${escape(">")}</button>`;
    }
  })}`;
});
const Quiz_saver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { questions } = $$props;
  const reload = restoreQuestions;
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
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.reload === void 0 && $$bindings.reload && reload !== void 0)
    $$bindings.reload(reload);
  return `<button data-svelte-h="svelte-19svf64">Reset local data</button>`;
});
const css$1 = {
  code: "*{box-sizing:border-box;margin:0;font-family:Consolas}:root{color:white;--resume-size:40px;--resume-min-columns:3;--resume-max-columns:6;--resume-gap:2px;--color-a:#2b2d42;--color-d:#8d99ae;--color-c:#edf2f4;--color-b:#ef233c}body{background-color:var(--color-a)}body > div{height:100vh;padding:8px}div.svelte-1ewepbo{margin-top:40px;display:grid;grid-template-columns:auto auto;gap:8px;max-width:860px}",
  map: '{"version":3,"file":"quiz.svelte","sources":["quiz.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { parseQuestion } from \\"$lib/question-store.js\\";\\nimport QuizMinimap from \\"./quiz-minimap.svelte\\";\\nimport QuizStack from \\"./quiz-stack.svelte\\";\\nimport QuizSaver from \\"./quiz-saver.svelte\\";\\nimport SideMenu from \\"./generic/side-menu.svelte\\";\\nlet questions = [];\\nasync function processFile(event) {\\n  const files = event.target?.files;\\n  if (!files)\\n    return;\\n  for (const file of files) {\\n    const text = await file.text();\\n    for (const question_text of text.split(/(\\\\r?\\\\n){2}/)) {\\n      const q = parseQuestion(question_text);\\n      if (!q)\\n        continue;\\n      localStorage.setItem(q.question, JSON.stringify(q));\\n    }\\n  }\\n  reload();\\n  questions = questions;\\n  opened = false;\\n}\\nlet opened = true;\\nlet reload;\\nlet index;\\n<\/script>\\r\\n\\r\\n<!--\\r\\n      TODO group questions by file name\\r\\n  -->\\r\\n<SideMenu --width=\\"300px\\" --bg=\\"var(--color-d)\\" {opened}>\\r\\n  <QuizSaver bind:questions bind:reload />\\r\\n  <input type=\\"file\\" on:input={processFile} multiple />\\r\\n</SideMenu>\\r\\n\\r\\n<div>\\r\\n  {#if questions.length != 0}\\r\\n    <QuizMinimap {questions} {index} />\\r\\n    <QuizStack {questions} bind:index />\\r\\n  {/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  :global(*) {\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    font-family: Consolas;\\r\\n  }\\r\\n  :global(:root) {\\r\\n    color: white;\\r\\n\\r\\n    --resume-size: 40px;\\r\\n    --resume-min-columns: 3;\\r\\n    --resume-max-columns: 6;\\r\\n    --resume-gap: 2px;\\r\\n\\r\\n    --color-a: #2b2d42;\\r\\n    --color-d: #8d99ae;\\r\\n    --color-c: #edf2f4;\\r\\n    --color-b: #ef233c;\\r\\n  }\\r\\n  :global(body) {\\r\\n    background-color: var(--color-a);\\r\\n  }\\r\\n  :global(body > div) {\\r\\n    height: 100vh;\\r\\n    padding: 8px;\\r\\n  }\\r\\n  div {\\r\\n    margin-top: 40px;\\r\\n    display: grid;\\r\\n\\r\\n    grid-template-columns: auto auto;\\r\\n    gap: 8px;\\r\\n    max-width: 860px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4CU,CAAG,CACT,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,QACf,CACQ,KAAO,CACb,KAAK,CAAE,KAAK,CAEZ,aAAa,CAAE,IAAI,CACnB,oBAAoB,CAAE,CAAC,CACvB,oBAAoB,CAAE,CAAC,CACvB,YAAY,CAAE,GAAG,CAEjB,SAAS,CAAE,OAAO,CAClB,SAAS,CAAE,OAAO,CAClB,SAAS,CAAE,OAAO,CAClB,SAAS,CAAE,OACb,CACQ,IAAM,CACZ,gBAAgB,CAAE,IAAI,SAAS,CACjC,CACQ,UAAY,CAClB,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,GACX,CACA,kBAAI,CACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CAEb,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAChC,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,KACb"}'
};
const Quiz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questions = [];
  let opened = true;
  let reload;
  let index;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div style="display: contents; --width:300px; --bg:var(--color-d);">${validate_component(Side_menu, "SideMenu").$$render($$result, { opened }, {}, {
      default: () => {
        return `${validate_component(Quiz_saver, "QuizSaver").$$render(
          $$result,
          { questions, reload },
          {
            questions: ($$value) => {
              questions = $$value;
              $$settled = false;
            },
            reload: ($$value) => {
              reload = $$value;
              $$settled = false;
            }
          },
          {}
        )} <input type="file" multiple>`;
      }
    })}</div> <div class="svelte-1ewepbo">${questions.length != 0 ? `${validate_component(Quiz_minimap, "QuizMinimap").$$render($$result, { questions, index }, {}, {})} ${validate_component(Quiz_stack, "QuizStack").$$render(
      $$result,
      { questions, index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "body > div{display:flex;place-content:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import SideMenu from \\"$lib/components/generic/side-menu.svelte\\";\\nimport Quiz from \\"$lib/components/quiz.svelte\\";\\n<\/script>\\n\\n<Quiz />\\n\\n\\n<style>\\n  :global(body > div) {\\n    display: flex;\\n    place-content: center;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAQU,UAAY,CAClB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Quiz, "Quiz").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
