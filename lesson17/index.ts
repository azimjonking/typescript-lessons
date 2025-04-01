// TypeScript Utils
// Readonly, ReadonlyArray

type Article1 = { title: string; page: number };

const article1: Article1 = { title: "Maqola 1", page: 1 };

article1.title = "asdsad";

type Article2 = Readonly<Article1>;

const article2: Article2 = { title: "Maqola 2", page: 2 };

// article2.title = "asdsad";

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

type Article3 = Readonly<Article1>;

const article3: Article3 = { title: "Maqola 3", page: 3 };

// article3.title = "asdsad";

const article4 = { title: "Maqola 4", page: 4 } as const;

// article4.title = "asdsad";

const article5 = <const>{ title: "Maqola 5", page: 5 };

// article5.page = 12;

// ===================================================
// ReadonlyArray

type Articles1 = Array<Article3>;

const articles1: Articles1 = [
  { title: "Maqola 1", page: 1 },
  { title: "Maqola 2", page: 2 },
  { title: "Maqola 3", page: 3 },
];

// articles1.push({ title: "sadas", page: 13 });

type Articles2 = ReadonlyArray<Article3>;

const articles2: Articles2 = [
  { title: "Maqola 1", page: 1 },
  { title: "Maqola 2", page: 2 },
  { title: "Maqola 3", page: 3 },
];

// articles2.push()

const articles3 = [
  { title: "Maqola 1", page: 1 },
  { title: "Maqola 2", page: 2 },
  { title: "Maqola 3", page: 3 },
] as const;

// articles3.push()

const articles4 = <const>[
  { title: "Maqola 1", page: 1 },
  { title: "Maqola 2", page: 2 },
  { title: "Maqola 3", page: 3 },
];

// articles4.pop()

function f1(arr: ReadonlyArray<string>) {}
function f2(arr: readonly string[]) {}
