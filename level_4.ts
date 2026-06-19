// 🧪 LEVEL 4 — INFER & TYPE EXTRACTION

// На этом уровне ты должен перестать думать как программист JS и начать думать как компилятор TS.

// 1. Первый infer

// Что получится?

// type ElementType<T> =
//     T extends Array<infer U>
//         ? U
//         : never;

// Напиши результат:

// type A = ElementType<string[]>;
// type B = ElementType<number[]>;
// type C = ElementType<boolean>;
// 2. Напиши свой ReturnType

// Без встроенного ReturnType.

// Нужно:

// function getUser() {
//     return {
//         id: 1,
//         name: "Murad"
//     };
// }
// type User =
//     MyReturnType<typeof getUser>;

// ↓

// {
//     id: number;
//     name: string;
// }

// Напиши:

// type MyReturnType<T> = ???
// 3. Напиши свой Parameters

// Без встроенного Parameters.

// Нужно:

// function sum(
//     a: number,
//     b: string
// ) {}

// ↓

// type Params =
//     MyParameters<typeof sum>;

// ↓

// [number, string]

// Напиши:

// type MyParameters<T> = ???
// 4. Напиши свой Awaited

// Без встроенного Awaited.

// Нужно:

// type A =
//     MyAwaited<
//         Promise<string>
//     >;

// ↓

// string

// Подсказка:

// Promise<infer U>
// 5. infer + tuple

// Что получится?

// type First<T> =
//     T extends [
//         infer U,
//         ...any[]
//     ]
//         ? U
//         : never;
// type A =
//     First<[1, 2, 3]>;
// type B =
//     First<["a", "b"]>;
// type C =
//     First<[]>;
// 6. infer + tuple

// Напиши тип:

// type Last<T> = ???

// Чтобы:

// type A =
//     Last<[1, 2, 3]>;

// ↓

// 3
// type B =
//     Last<["a", "b"]>;

// ↓

// "b"
// 7. Exclude своими руками

// Встроенный использовать нельзя.

// Нужно:

// type A =
//     MyExclude<
//         "a" | "b" | "c",
//         "b"
//     >;

// ↓

// "a" | "c"

// Подсказка:

// T extends U
// 8. Omit своими руками

// Без встроенного Omit.

// Используя:

// keyof
// Exclude
// Pick

// Нужно:

// type User = {
//     id: number;
//     name: string;
//     password: string;
// };

// ↓

// type PublicUser =
//     MyOmit<User, "password">;

// ↓

// {
//     id: number;
//     name: string;
// }
// 9. Template Literal Types

// Создай тип:

// type EventName = ???

// Чтобы работало:

// const a: EventName =
//     "onClick";

// const b: EventName =
//     "onChange";

// Но не работало:

// const c: EventName =
//     "click";
// 10. Template Literal Types

// Что получится?

// type Position =
//     `${"top" | "bottom"}-${"left" | "right"}`;

// Напиши итоговый union.

// 11. Key Remapping

// Что получится?

// type User = {
//     id: number;
//     name: string;
// };

// type Prefixed = {
//     [K in keyof User as `api_${string & K}`]:
//         User[K];
// };

// Напиши итоговый тип.

// 12. Boss Fight 😈

// Что получится?

// type Flatten<T> =
//     T extends Array<infer U>
//         ? U
//         : T;
// type A =
//     Flatten<string[]>;
// type B =
//     Flatten<number>;
// type C =
//     Flatten<boolean[]>;
