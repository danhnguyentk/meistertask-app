import { Project } from '../models/project';

export interface ProjectListState {
    projectList: Project[];
    projectIdSelected: number;
}
