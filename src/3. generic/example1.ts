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

let generic_example1_test2: DeepPartial<{ a: string, b: { c: string, d: { e: number } } }>;