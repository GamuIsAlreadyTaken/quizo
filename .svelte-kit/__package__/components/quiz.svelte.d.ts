import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type QuizProps = typeof __propDef.props;
export type QuizEvents = typeof __propDef.events;
export type QuizSlots = typeof __propDef.slots;
export default class Quiz extends SvelteComponent<QuizProps, QuizEvents, QuizSlots> {
}
export {};
