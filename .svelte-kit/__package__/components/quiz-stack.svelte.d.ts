import { SvelteComponent } from "svelte";
import type { Question } from '../question-store.js';
declare const __propDef: {
    props: {
        questions: Question[];
        index?: import("svelte/store").Writable<number> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type QuizStackProps = typeof __propDef.props;
export type QuizStackEvents = typeof __propDef.events;
export type QuizStackSlots = typeof __propDef.slots;
export default class QuizStack extends SvelteComponent<QuizStackProps, QuizStackEvents, QuizStackSlots> {
    get index(): import("svelte/store").Writable<number>;
}
export {};
