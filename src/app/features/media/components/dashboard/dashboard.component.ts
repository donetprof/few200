import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardSummary } from 'src/app/features/media/models';
import { MediaState } from 'src/app/features/media/reducers/list.reducer';
import { selectDashboardModel } from 'src/app/features/media/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  model$: Observable<DashboardSummary>;
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.model$ = this.store.pipe(
      select(selectDashboardModel)
    );
  }

}
