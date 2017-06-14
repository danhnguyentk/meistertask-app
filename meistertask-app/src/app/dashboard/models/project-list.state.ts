import { Project } from '../models/project';
import { ErrorMessage } from '../../shared/models/error-message.model';

export interface ProjectListState {
   projectList: Project[];
   errorMessage: ErrorMessage;
   projectIdSelected: number;
}
