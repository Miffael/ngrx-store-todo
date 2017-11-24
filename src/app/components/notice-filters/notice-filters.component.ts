import { Component, OnInit } from '@angular/core';
import {Notice, notices} from '../../reducer/notice';
import {stringDistance} from 'codelyzer/util/utils';
import {AppStage} from '../../services/stage';
import {Store} from '@ngrx/store';
import {FILTER_ACTION, FILTER_STAGE} from '../../reducer/visualFilterNotices';

@Component({
  selector: 'app-notice-filters',
  templateUrl: './notice-filters.component.html',
  styleUrls: ['./notice-filters.component.scss']
})
export class NoticeFiltersComponent implements OnInit {
  notices: Notice[];
  visualFilter: string;
  filterStage = FILTER_STAGE;

  constructor(private store: Store<AppStage>) { }

  setVisualFilter(filter: string) {
    this.store.dispatch({type: FILTER_ACTION.SETVISIBILITY_FILTER, payload: filter});
  }

  ngOnInit() {
    this.store.subscribe(stage => {
      this.notices = stage.notices;
      this.visualFilter = stage.visualFilter;
    });
  }

}
