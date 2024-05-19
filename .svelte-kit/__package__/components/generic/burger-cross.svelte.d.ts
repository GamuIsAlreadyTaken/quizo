import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        opened: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BurgerCrossProps = typeof __propDef.props;
export type BurgerCrossEvents = typeof __propDef.events;
export type BurgerCrossSlots = typeof __propDef.slots;
export default class BurgerCross extends SvelteComponent<BurgerCrossProps, BurgerCrossEvents, BurgerCrossSlots> {
}
export {};
