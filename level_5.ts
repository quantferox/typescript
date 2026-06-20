// 🧪 LEVEL 5 — RECURSION, NEVER, DISTRIBUTION

// Тут уже не столько синтаксис, сколько понимание того, как компилятор вычисляет типы.

// 1. Что такое never?

// Что получится?

// type A = string | never;
// type B = number | never;
// type C = never | never;

// Напиши итоговые типы.



// 2. Что получится?
// type A = string & never;
// type B = number & never;
// 3. Distributive Conditional Types

// Что получится?

// type Test<T> =
//     T extends string
//         ? "YES"
//         : "NO";

// type A =
//     Test<string | number>;

// Важно расписать ход мыслей.

// 4. Ещё Distribution

// Что получится?

// type Test<T> =
//     T extends number
//         ? T
//         : never;

// type A =
//     Test<1 | "a" | 2 | "b">;
// 5. Напиши свой NonNullable

// Без встроенного.

// Нужно:

// type A =
//     MyNonNullable<
//         string | null | undefined
//     >;

// ↓

// string

// Напиши:

// type MyNonNullable<T> = ???
// 6. Первый Recursive Type

// Напиши:

// type DeepReadonly<T> = ???

// Чтобы:

// type User = {
//     id: number;
//     profile: {
//         name: string;
//         age: number;
//     };
// };

// ↓

// {
//     readonly id: number;

//     readonly profile: {
//         readonly name: string;
//         readonly age: number;
//     };
// }

// Подсказка:

// T[P] extends object
// 7. DeepPartial

// Напиши:

// type DeepPartial<T> = ???

// Чтобы:

// {
//     user?: {
//         profile?: {
//             name?: string;
//         }
//     }
// }
// 8. Мозголомка на рекурсию

// Что получится?

// type Flatten<T> =
//     T extends Array<infer U>
//         ? Flatten<U>
//         : T;
// type A =
//     Flatten<string[][][]>;
// type B =
//     Flatten<number[][]>;
// type C =
//     Flatten<boolean>;
// 9. never-фильтр

// Что получится?

// type FilterString<T> =
//     T extends string
//         ? T
//         : never;
// type A =
//     FilterString<
//         "a" | 1 | "b" | true
//     >;

// Объясни почему.

// 10. Key Remapping Filter

// Что получится?

// type User = {
//     id: number;
//     name: string;
//     age: number;
// };

// type OnlyStrings = {
//     [K in keyof User
//         as User[K] extends string
//             ? K
//             : never
//     ]: User[K];
// };

// Напиши итоговый тип.

// 11. Template Literal Advanced

// Напиши тип:

// type Getters<T> = ???

// Чтобы:

// type User = {
//     name: string;
//     age: number;
// };

// ↓

// {
//     getName: () => string;
//     getAge: () => number;
// }

// Подсказка:

// Capitalize<>



// 12. Boss Fight 😈
// Что получится?

type Wrap<T> =
    T extends any
    ? { value: T; }
    : never;

type A =
    Wrap<
        string | number
    >;

// Расписать шаг за шагом.
