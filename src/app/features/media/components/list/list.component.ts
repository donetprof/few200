import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaListItem } from '../../models';
import { Store, select } from '@ngrx/store';

import { selectMediaList, MediaState } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  items$: Observable<MediaListItem[]>;

  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select(selectMediaList)
    );
  }

}
