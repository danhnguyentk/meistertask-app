import { Project } from '../../project/models/project';

export interface Task {
    id?: number;
    name: string;
    dateCreated?: string;
    status: number;
    projectId?: number;
    isCompleted?: boolean;
    project?: Project;
}
