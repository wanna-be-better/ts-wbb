type Split<S extends string, Separator extends string> =
    S extends `${infer Word}${Separator}${infer Rest}`
        ? [Word, ...Split<Rest, Separator>]
        : S extends ''
            ? Separator extends ''
                ? []
                : [S]
            : string extends S
                ? S[]
                : [S]

let example_test1: Split<'Hi! world!', 'w'>;  // ["Hi! ", "orld!"]
let example_test2: Split<'Hi! world!', ''>; //   ["H", "i", "!", " ", "w", "o", "r", "l", "d", "!"]
let example_test3: Split<'Hi! world!', '!'>; // ["Hi", " world", ""]
let example_test4: Split<'Hi! world!', '5645'>; // ['Hi! world!']