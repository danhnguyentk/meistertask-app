export interface Task {
    id?: number;
    name: string;
    dateCreated?: string;
    status: number;
    projectId?: number;
    isCompleted?: boolean;
}
