// Partial Все поля объекта опциональны

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: 'organize desk',
    description: 'clear clutter'
};

const todo2 = updateTodo(todo1, {
    description: 'throw out trash'
});

// Required Все поля объекта обязательные

interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };

// Readonly Обёртка над типом, все поля доступны только для чтения

interface TodoReadonly {
    title: string;
}

const todo: Readonly<TodoReadonly> = {
    title: 'Delete inactive users'
};

todo.title = 'Hello';

// Record Описание типов ключей/значений объекта

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' }
};

cats.boris;

// Pick Выбор определённых полей из объекта

interface TodoPick {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<TodoPick, 'title' | 'completed'>;

const todoPick: TodoPreview = {
    title: 'Clean room',
    completed: false
};

todoPick;

// Omit Выбор объекта без выбранных полей

interface TodoOmit {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreviewOmit = Omit<TodoOmit, 'description'>;

const todoOmit: TodoPreviewOmit = {
    title: 'Clean room',
    completed: false,
    createdAt: 1615544252770
};

todoOmit;

type TodoInfoOmit = Omit<TodoOmit, 'completed' | 'createdAt'>;

const todoInfoOmit: TodoInfoOmit = {
    title: 'Pick up kids',
    description: 'Kindergarten closes at 5pm'
};

todoInfoOmit;

// Exclude Исключает выбранные тип их типа объединения

type T0Exclude = Exclude<'a' | 'b' | 'c', 'a'>;
type T1Exclude = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
type T2Exclude = Exclude<string | number | (() => void), Function>;

// Extract Извлекает все члены объединения, которые могу быть присвоины типу объединения

type T0Extract = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
type T1Extract = Extract<string | number | (() => void), Function>;

// NonNullable Убирает из типа null и undefined

type T0NonNullable = NonNullable<string | number | undefined>;
type T1NonNullable = NonNullable<string[] | null | undefined>;

// Parameters Возвращает типы параметров функции

type T0Parameters = Parameters<() => string>;
type T1Parameters = Parameters<(s: string, a: number) => void>; // [string, number]

// ReturnType Возвращаемый тип функции

type T0ReturnType = ReturnType<() => string>; // string
type T1ReturnType = ReturnType<(s: string) => void>; // void
type T2ReturnType = ReturnType<<T>() => T>; // unknown
type T3ReturnType = ReturnType<<T extends U, U extends number[]>() => T>; // number[]