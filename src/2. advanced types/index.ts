// Generic constraints & conditional types

type AcceptStrings<T extends string> = `${string}${T}`
type isString<T> = T extends string ? true : false

type Test1 = AcceptStrings<number>
type Test2 = isString<number>
// false
type Test3 = AcceptStrings<'qwe'>
// `${string}qwe`

const test3: Test3 = 'qwe';

// Mapped types

type KeyToKeyMapping<Keys extends PropertyKey> = { [K in Keys]: K }

type Test4 = KeyToKeyMapping<1 | 2 | 3>
type Test6 = KeyToKeyMapping<'a' | 'b' | 'c'>

// Inference in conditional types

type ReturnTypeCustom<T> = T extends (...args: any) => infer R ? R : any

type Test7 = ReturnTypeCustom<() => void> // void
type Test8 = ReturnTypeCustom<() => number> // number
type Test9 = ReturnTypeCustom<'asd'> // any
type Test10 = ReturnTypeCustom<() => Test2> // false

// Keyof

type Human = { name: string }
type Work = { workers: Person[]; chiefs: Person[] }

type Test11 = keyof Human
// "name
type Test12 = keyof Work & string
// "workers" | "chiefs"

// Recursive conditional types

type CharacterIteration<T> = T extends `${infer Ch}${infer Rest}` ? [Ch, ...CharacterIteration<Rest>] : []

type Test13 = CharacterIteration<'123'>
// ["1", "2", "3"]
type Test14 = CharacterIteration<''>
// []

// Type equals
type EqualsCustom<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false

type Test15 = EqualsCustom<never, never> // true
type Test16 = EqualsCustom<unknown, any> // true ???
type Test17 = EqualsCustom<1, number> // false

// string literal types
type IsStringLiteral<T> = T extends string ? string extends T ? false : true : false

type Test18 = IsStringLiteral<string> // false
type Test19 = IsStringLiteral<'123'> // true
type Test20 = IsStringLiteral<123> // false

// tuple => number literal types
type Test21 = []['length'] // 0
type Test22 = [1, 2, 3]['length'] // 3

// Distributed conditional types
type UnionIteration<T> = T extends unknown ? [T] : never

type Test23 = UnionIteration<never>; // never
type Test24 = UnionIteration<1> // [1]
type Test25 = UnionIteration<1 | 2> // [1] | [2]
