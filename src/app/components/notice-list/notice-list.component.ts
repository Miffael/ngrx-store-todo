import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStage} from '../../services/stage';
import {Observable} from 'rxjs/Observable';
import {Notice, notices, REMOVE_NOTICE, UPDATE_NOTICE} from '../../reducer/notice';
import {FILTER_STAGE} from '../../reducer/visualFilterNotices';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {
  notices: Notice[] = [];
  shownNotices: Notice[] = [];
  visualFilter: string;
  constructor(private store: Store<AppStage>) { }

  toggleStatus(notice: Notice) {
    this.store.dispatch({ type: UPDATE_NOTICE, payload: [{id: notice.id, completed: !notice.completed}]});
  }

  removeNotice(notice): void {
    this.store.dispatch({ type: REMOVE_NOTICE, payload: notice});
  }

  ngOnInit() {
    this.store.subscribe(stage => {
      this.notices = stage.notices;
      this.visualFilter = stage.visualFilter;

      this.shownNotices = this.notices.filter((notice) => {
        switch (this.visualFilter) {
          case FILTER_STAGE.SHOW_ALL:
            return true;
          case FILTER_STAGE.SHOW_ACTIVE:
            return !notice.completed;
          case FILTER_STAGE.SHOW_COMPLETED:
            return notice.completed;
        };
      });
    });
  }

}
