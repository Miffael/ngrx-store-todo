import { ActionReducer, Action } from '@ngrx/store';



export const FILTER_STAGE = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

export const FILTER_ACTION = {
  SETVISIBILITY_FILTER: 'SETVISIBILITY_FILTER',
  GETVISUALITY_FITER: 'GETVISUALITY_FITER',
}

export function  visualFilter (state = FILTER_STAGE.SHOW_ALL, action: Action) {
  switch (action.type) {
    case FILTER_ACTION.SETVISIBILITY_FILTER:
      return action.payload;
    case FILTER_ACTION.GETVISUALITY_FITER:
      return state;
    default:
      return state;
  }
}
