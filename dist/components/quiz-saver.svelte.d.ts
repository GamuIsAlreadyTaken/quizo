import { SvelteComponent } from "svelte";
import { type Question } from '../question-store.js';
declare const __propDef: {
    props: {
        questions: Question[];
        reload?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type QuizSaverProps = typeof __propDef.props;
export type QuizSaverEvents = typeof __propDef.events;
export type QuizSaverSlots = typeof __propDef.slots;
export default class QuizSaver extends SvelteComponent<QuizSaverProps, QuizSaverEvents, QuizSaverSlots> {
    get reload(): () => void;
}
export {};
