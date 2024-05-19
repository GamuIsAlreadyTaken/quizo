import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        opened?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SideMenuProps = typeof __propDef.props;
export type SideMenuEvents = typeof __propDef.events;
export type SideMenuSlots = typeof __propDef.slots;
export default class SideMenu extends SvelteComponent<SideMenuProps, SideMenuEvents, SideMenuSlots> {
}
export {};
