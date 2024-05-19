import { SvelteComponent } from "svelte";
import type { Question } from '../question-store.js';
declare const __propDef: {
    props: {
        question: Question;
        index: number;
        current: boolean;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type QuizQuestionResumeProps = typeof __propDef.props;
export type QuizQuestionResumeEvents = typeof __propDef.events;
export type QuizQuestionResumeSlots = typeof __propDef.slots;
export default class QuizQuestionResume extends SvelteComponent<QuizQuestionResumeProps, QuizQuestionResumeEvents, QuizQuestionResumeSlots> {
}
export {};
