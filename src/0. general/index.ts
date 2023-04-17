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