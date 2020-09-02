import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaState } from './reducers/list.reducer';
import { Store, select } from '@ngrx/store';
import { selectMediaLoaded } from './reducers';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  loaded$: Observable<boolean>;
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.loaded$ = this.store.pipe(
      select(selectMediaLoaded)
    );
  }

}
