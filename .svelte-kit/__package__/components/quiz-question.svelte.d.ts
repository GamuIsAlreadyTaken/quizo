import { SvelteComponent } from "svelte";
import type { Question } from '../question-store.js';
declare const __propDef: {
    props: {
        data: Question;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type QuizQuestionProps = typeof __propDef.props;
export type QuizQuestionEvents = typeof __propDef.events;
export type QuizQuestionSlots = typeof __propDef.slots;
export default class QuizQuestion extends SvelteComponent<QuizQuestionProps, QuizQuestionEvents, QuizQuestionSlots> {
}
export {};
