import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { ProjectListActions } from '../actions/project-list.actions';
import { ProjectListState } from './project-list.state';
import { ErrorMessage } from '../../shared/models/error-message.model';

const initialState: ProjectListState = { projectList: [], errorMessage: null, projectIdSelected: null };

export function projectListReducer(state: ProjectListState = initialState, action: Action ): ProjectListState {
    switch (action.type) {
        case ProjectListActions.GET_PROJECT_LIST_SUCCESS:
            console.log(state, action.payload);
            return _.assignIn({}, state, {
                projectList: [ ...action.payload ]
            });

        case ProjectListActions.CREATE_PROJECT_SUCCESS:
            return _.assignIn({}, state, {
                projectList: [ ...state.projectList, action.payload ]
            });

        case ProjectListActions.CREATE_PROJECT_FAIL:
            return _.assignIn({}, state, { errorMessage: action.payload });

        case ProjectListActions.SET_SELECTED_PROJECT:
            return _.assignIn({}, state, { projectIdSelected: action.payload });

        default:
            return state;
    }
}
