type AddDigitMapping = {
    '0': [],
    '1': [0],
    '2': [0, 0],
    '3': [0, 0, 0],
    '4': [0, 0, 0, 0],
    '5': [0, 0, 0, 0, 0],
    '6': [0, 0, 0, 0, 0, 0],
    '7': [0, 0, 0, 0, 0, 0, 0],
    '8': [0, 0, 0, 0, 0, 0, 0, 0],
    '9': [0, 0, 0, 0, 0, 0, 0, 0, 0],
}

type Digit = keyof AddDigitMapping

type Multiply10<T extends readonly any[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

type Add<D1 extends readonly any[], D2 extends Digit> = [...D1, ...AddDigitMapping[D2]]

type ToNumber<S extends string, T extends readonly any[] = []> = S extends `${infer D}${infer Rest}` ? ToNumber<Rest, Add<Multiply10<T>, D & Digit>> : T['length']

let example3_test1: ToNumber<'123'>;
let example3_test2: ToNumber<'8663'>;
let example3_test3: ToNumber<'6553'>;