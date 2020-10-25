export interface ITask {
    uid: string,
    id: number,
    title: string,
    createdAt?: number,
    description?: string,
    priority?: string,
    list: number,
    position: number,
};