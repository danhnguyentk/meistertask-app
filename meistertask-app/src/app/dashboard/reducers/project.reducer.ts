import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { ProjectActions } from '../actions/project.actions';
import { ProjectState } from './project.state';
import { ErrorMessage } from '../../shared/models/error-message.model';

const initialState: ProjectState = { projectList: [], errorMessage: null };

export function projectReducer(state: ProjectState = initialState, action: Action ): ProjectState {
    switch (action.type) {
        case ProjectActions.GET_PROJECT_LIST_SUCCESS:
            console.log(state, action.payload);
            return _.assignIn({}, state, {
                projectList: [ ...action.payload ]
            });

        case ProjectActions.CREATE_PROJECT_SUCCESS:
            return _.assignIn({}, state, {
                projectList: [ ...state.projectList, action.payload ]
            });

        case ProjectActions.CREATE_PROJECT_FAIL:
            return _.assignIn({}, state, { errorMessage: action.payload });

        default:
            return state;
    }
}
