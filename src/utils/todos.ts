export interface ITodosType {
  id: number | string;
  title: string;
  completed: boolean;
}

export const todosData = [
  { id: 0, title: 'Wash dishes', completed: false },
  { id: 1, title: 'Clean a house', completed: false },
  { id: 2, title: 'Buy a milk', completed: false },
  { id: 3, title: 'Make a dish', completed: false },
  { id: 4, title: 'Walk with a dog', completed: false },
];
