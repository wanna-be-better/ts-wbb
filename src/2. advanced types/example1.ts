// Filter

type FilterElement<Element, Filter> = [Element] extends [Filter] ? [] : [Element]

type FilterOut<T extends any[], Filter> = T extends [infer Head, ...infer Tail] ? [...FilterElement<Head, Filter>, ...FilterOut<Tail, Filter>] : []

let ex1_test1: FilterOut<[1, never, 'a'], never>;
let ex1_test2: FilterOut<[1, never, 'a'], 'a'>;