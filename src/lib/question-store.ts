import { writable } from "svelte/store";

export type QuestionData = {
    question: string,
    options: string[],
    correct?: number,
    selected?: number
}

export function parseQuestion(data: string): QuestionData | null {
    const lines = data.split("\n")
    const question = lines[0].trim()
    let options = lines.slice(1)


    options = options.map(o => o.trim()).filter(o => o.length != 0)

    if (!question || options.length == 0)
        return null

    return {
        question,
        options
    }
}

// (() => {

//     console.log("parseQuestion test:")
//     const q = `1. Pregunta x?
//     a) si
//     b) no
//     c) quizá`

//     console.log("testing", q)
//     const res = parseQuestion(q)
//     console.log([res?.question], ["1. Pregunta x?"]);
//     ["a) si", "b) no", "c) quizá"].forEach((o, i) => console.log([res?.options[i]], [o]))
// })()

export type Question = ReturnType<typeof questionStore>

export const questionStore = (
    q: QuestionData
) => {

    const { subscribe, set, update } = writable(q)

    const answer = (id: number) => {
        update(a => {
            a.selected = a.selected == id ? undefined : id;
            return a
        })
    }

    return { subscribe, answer }
}