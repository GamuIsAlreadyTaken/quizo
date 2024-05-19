import { writable } from "svelte/store";
export function parseQuestion(data) {
    const lines = data.split("\n");
    const question = lines[0].trim();
    let options = lines.slice(1);
    options = options.map(o => o.trim()).filter(o => o.length != 0);
    if (!question || options.length == 0)
        return null;
    return {
        question,
        options
    };
}
export const questionStore = (q) => {
    const { subscribe, set, update } = writable(q);
    const answer = (id) => {
        update(a => {
            a.selected = a.selected == id ? undefined : id;
            return a;
        });
    };
    return { subscribe, answer };
};
