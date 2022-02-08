export interface Task{
    id?: number; // Cuando creamos podría no venir por eso el signo
    text: string;
    day: string;
    reminder: boolean;
}