/// <reference types="svelte" />
export type QuestionData = {
    question: string;
    options: string[];
    correct?: number;
    selected?: number;
};
export declare function parseQuestion(data: string): QuestionData | null;
export type Question = ReturnType<typeof questionStore>;
export declare const questionStore: (q: QuestionData) => {
    subscribe: (this: void, run: import("svelte/store").Subscriber<QuestionData>, invalidate?: import("svelte/store").Invalidator<QuestionData> | undefined) => import("svelte/store").Unsubscriber;
    answer: (id: number) => void;
};
