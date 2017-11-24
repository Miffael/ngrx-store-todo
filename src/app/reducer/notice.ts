import { ActionReducer, Action } from '@ngrx/store';

export interface Notice {
  id?: number;
  text?: string;
  completed?: boolean;
}

export const ADD_NOTICE = 'ADD_NOTICE';
export const REMOVE_NOTICE = 'REMOVE_NOTICE';
export const UPDATE_NOTICE = 'UPDATE_NOTICE';
export const UPDATE_NOTICES = 'UPDATE_NOTICES';


let nextNoticeId = 0;
export function  notices (allNotices = [], action: Action) {
  switch (action.type) {
    case ADD_NOTICE:
      return allNotices.concat([Object.assign({}, action.payload, { id: nextNoticeId++, completed: false})]);
    case REMOVE_NOTICE:
      return allNotices.filter(item => item.id !== action.payload.id);
    case UPDATE_NOTICE:
      return allNotices.map(notice => {
        const inputNotice = action.payload.filter(inputNotice => {
          return inputNotice.id === notice.id;
        });

        return inputNotice.length ? Object.assign({}, notice, inputNotice[0]) : notice;
      });
    // case UPDATE_NOTICES:
    //   return allNotices.map(notice => {
    //
    //     Object.assign( notice, ...action.payload.filter(item => item.id === notice.id));
    //   });
    default: return allNotices;
  }
}
