// CustomPick

type CustomValues<T> = T[keyof T]

type CustomPick<T, P extends keyof T> = {
    [K in P]-?: T[K]
}

let generic_example1_test1: CustomPick<{ a: string, b?: number, c: boolean }, 'b' | 'c'> = {
    b: 123,
    c: true
};

type CustomExclude<A, B> = A extends B ? never : A

type Indexes = CustomExclude<keyof [1, 2, 3], keyof []>

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

let generic_example1_test2: DeepPartial<{ a: string, b: { c: string, d: { e: number } } }> = {};

type ListItem<T extends any[]> = T extends (infer X)[] ? X : never
let generic_example1_test3: ListItem<string[]>;
let generic_example1_test4: ListItem<[string, number, boolean]>;

type Swap<T extends [any, any]> = T extends [infer X, infer Y] ? [Y, X] : never

let generic_example1_test5: Swap<['a', 'b']>;
let generic_example1_test6: Swap<[1, 2]>;