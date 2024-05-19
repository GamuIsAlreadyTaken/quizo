import { SvelteComponent } from "svelte";
import type { Question } from '../question-store.js';
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        questions: Question[];
        index: Writable<number>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type QuizMinimapProps = typeof __propDef.props;
export type QuizMinimapEvents = typeof __propDef.events;
export type QuizMinimapSlots = typeof __propDef.slots;
export default class QuizMinimap extends SvelteComponent<QuizMinimapProps, QuizMinimapEvents, QuizMinimapSlots> {
}
export {};
