import { Project } from '../models/project';
import { ErrorMessage } from '../../shared/models/error-message.model';

export interface ProjectState {
   projectList: Project[],
   errorMessage: ErrorMessage
}
