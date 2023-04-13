type Values<T> = T[keyof T]

type GetOptionalKeys<T> = Values<{
    [K in keyof T]: {} extends Pick<T, K> ? K : never
}>

type GetOptional<T> = Pick<T, GetOptionalKeys<T>>

let example4_test1: GetOptional<{ a?: string, b: string }>;
let example4_test2: GetOptional<{ foo: number, bar?: string }>;