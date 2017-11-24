import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Notice} from './reducer/notice';
import {Store} from '@ngrx/store';
import {AppStage} from './services/stage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notices: Observable<Notice[]>;
  visibilityFilter: Observable<string>;

  constructor( public store: Store<AppStage>) {
    this.notices = store.select(stage => {
      return stage.notices || [];
    });
  }
}
