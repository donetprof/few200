import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MediaListItem } from '../../models';
import { MediaState, ListEntity } from '../../reducers/list.reducer';
import { Store } from '@ngrx/store';
import { removeMediaItem, makeUpperCaseTitle } from '../../actions/list.actions';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {

  @Input() items: MediaListItem[] = [];
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
  }

  removeItem(item: MediaListItem): void {
    this.store.dispatch(removeMediaItem({ payload: item }));
  }

  makeUpper(payload: ListEntity): void {
    this.store.dispatch(makeUpperCaseTitle({ payload }));
  }

}
