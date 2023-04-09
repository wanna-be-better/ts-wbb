interface Person {
    name: string,
    age: string,
    alive: boolean
}

type PersonWithName = Pick<Person, 'name'>
type PersonWithNameAndAge = Pick<Person, 'name' | 'age'>

type Status = 'loading' | 'loaded' | 'error'
type StatusWithoutErrorOnly = Exclude<Status, 'error'>
type StatusError = Exclude<Status, 'loading' | 'loaded'>

// Tuples

type Statuses = ['loading', 'loaded', 'error']
type VideoFormats = ['mp4', 'mov', 'avi']
type EmptyTuple = []
type SpreadType = [...Statuses, ...VideoFormats, 'new']

// Arrays

interface School {
    log: Record<string, number[]>;
}

type MathMarks = School['log']['math']
// number[]
type Subjects = (keyof School['log'])[]
// string[]


