'use server'

type ChecklistItem = {
    id: number;
    name: string;
    completed: boolean;
};

const checklist: ChecklistItem[] = [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },
];

const actionGetReflections =() => {
    return checklist;
}
