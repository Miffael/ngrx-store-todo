import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {ADD_NOTICE, Notice, UPDATE_NOTICE} from '../../reducer/notice';
import {AppStage} from '../../services/stage';
import {FILTER_STAGE} from '../../reducer/visualFilterNotices';

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['./new-notice.component.scss']
})
export class NewNoticeComponent implements OnInit {
  newNotice: string;
  statusUnchecked = true;
  visualFilter: string;
  notices: Notice[];


  constructor(private store: Store<AppStage>) {
    this.newNotice = '';
  }

  checkKeyEnter($event): boolean {
    return $event.code === 'Enter';
  }

  hasUndeckedNotice(): boolean {
    const unckeckedNotices= this.notices.filter(notice => !notice.completed);
    console.log(unckeckedNotices);
    return !unckeckedNotices.length;
  }

  toggleAllStatus() {
    const newStatus: boolean = !this.hasUndeckedNotice();

    const changedNotices = this.notices
      .filter(notice => notice.completed !== newStatus)
      .map(notice => notice.completed = newStatus);

    this.store.dispatch({type: UPDATE_NOTICE, payload: changedNotices});
  }

  addNotice(): void {
    console.log(this.newNotice);
    this.store.dispatch({type: ADD_NOTICE, payload: {text: this.newNotice}});
    this.newNotice = '';
  }

  ngOnInit() {
    this.store.subscribe(stage => {
      this.notices = stage.notices;
      this.visualFilter = stage.visualFilter;
      this.statusUnchecked = this.hasUndeckedNotice();
    });
  }

}
