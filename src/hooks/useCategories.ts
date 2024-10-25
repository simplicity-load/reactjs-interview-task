export interface Note {
  id: number;
  head: string;
  body: string;
}

export interface Category {
  id: number;
  name: string;
  noteList: Note[];
}

export const categoris: Category[] = [
  {
    id: 1,
    name: "Personal",
    noteList: [
      {
        id: 1,
        head: "Grocery List",
        body: "Buy milk, eggs, bread, and vegetables.",
      },
      {
        id: 3,
        head: "Book Recommendations",
        body: "1. The Great Gatsby\n2. 1984\n3. To Kill a Mockingbird",
      },
    ],
  },
  {
    id: 2,
    name: "Work",
    noteList: [
      {
        id: 2,
        head: "Meeting Notes",
        body: "Discuss project timelines and deliverables.",
      },
    ],
  },
  {
    id: 3,
    name: "Favorites",
    noteList: [
      {
        id: 3,
        head: "Book Recommendations",
        body: "1. The Great Gatsby\n2. 1984\n3. To Kill a Mockingbird",
      },
    ],
  },
];

export const categories = categoris
  .concat(categoris)
  .concat(categoris)
  .concat(categoris)
  .concat(categoris)
  .concat(categoris)
  .concat(categoris)
  .concat(categoris)
  .concat(categoris)
  .concat(categoris);
