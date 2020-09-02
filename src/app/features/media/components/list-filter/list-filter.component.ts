import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MediaState } from '../../reducers/list.reducer';
import * as actions from '../../actions/ui-hints.actions';
import { Observable } from 'rxjs';
import { selectListFilter } from '../../reducers';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  filter$: Observable<string>;
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.filter$ = this.store.pipe(
      select(selectListFilter)
    );

  }

  setFilter(by: string): void {
    this.store.dispatch(actions.mediaFilterSet({ by }));
  }

}
