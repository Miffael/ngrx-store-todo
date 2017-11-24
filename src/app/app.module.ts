import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { provideStore, StoreModule} from '@ngrx/store';
import { notices } from './reducer/notice';
import { visualFilter } from './reducer/visualFilterNotices';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NoticeListComponent } from './components/notice-list/notice-list.component';
import { NewNoticeComponent } from './components/new-notice/new-notice.component';
import {FormsModule} from '@angular/forms';
import { NoticeFiltersComponent } from './components/notice-filters/notice-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NoticeListComponent,
    NewNoticeComponent,
    NoticeFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({notices, visualFilter}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
