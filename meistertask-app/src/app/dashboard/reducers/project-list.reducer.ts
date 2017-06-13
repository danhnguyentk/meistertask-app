import {
    ActionReducer,
    Action
} from '@ngrx/store';

import * as _ from 'lodash';

import { ProjectListActions } from '../actions/project-list.actions';
import { ProjectListState } from '../models/project-list.state';
import { ErrorMessage } from '../../shared/models/error-message.model';

const initialState: ProjectListState = { projectList: [], errorMessage: null, projectIdSelected: null, isLoading: false };

export function projectListReducer(state: ProjectListState = initialState, action: Action ): ProjectListState {
    let isLoading: boolean;
    switch (action.type) {
        case ProjectListActions.GET_PROJECT_LIST:
            return _.assignIn({}, state, { isLoading: true });

        case ProjectListActions.GET_PROJECT_LIST_SUCCESS:
            return _.assignIn({}, state, {
                projectList: [ ...action.payload ],
                isLoading: false
            });

        case ProjectListActions.CREATE_PROJECT_SUCCESS:
            return _.assignIn({}, state, {
                projectList: [ ...state.projectList, action.payload ],
                isLoading: false
            });

        case ProjectListActions.CREATE_PROJECT_FAIL:
            return _.assignIn({}, state, { errorMessage: action.payload });

        case ProjectListActions.SET_SELECTED_PROJECT:
            return _.assignIn({}, state, { projectIdSelected: action.payload });

        case ProjectListActions.INCREASE_NUMBER_TASK:
            const index: number = _.findIndex(state.projectList, { id: action.payload });
            if (index >= 0) {
                const projectList = [
                    ...state.projectList.slice(0, index),
                    _.assignIn({}, state.projectList[index], { numberTaskActive: state.projectList[index].numberTaskActive + 1 }),
                    ...state.projectList.slice(index + 1)
                ];
                return _.assignIn({}, state, { projectList });
            }
            return state;

        default:
            return state;
    }
}
