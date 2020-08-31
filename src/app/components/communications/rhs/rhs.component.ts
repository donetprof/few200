import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationsService } from 'src/app/services/CommunicationsService';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.scss']
})
export class RhsComponent implements OnInit, OnDestroy {

  data$: Observable<string>;
  sub: Subscription;
  constructor(private service: CommunicationsService) { }

  ngOnInit(): void {
    this.data$ = this.service.getData();
    this.sub = this.service.getData().subscribe(a => console.log(a));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
