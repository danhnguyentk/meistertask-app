import {
    Pipe,
    PipeTransform
} from '@angular/core';

import * as _ from 'lodash';

import { Project } from '../../../dashboard/models/project';

@Pipe({
    name: 'filterProject'
})
export class FilterProjectPipe implements PipeTransform {

    transform(projectList: Project[], name?: string): Project[] {
        if (name) {
            return _.filter(projectList, (project: Project) => {
                return _.includes(project.nameProject, name);
            });
        }
        return projectList;
    }

}
