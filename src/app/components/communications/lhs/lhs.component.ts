import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from '../../../services/CommunicationsService';

@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.scss']
})
export class LhsComponent implements OnInit {

  constructor(private service: CommunicationsService) { }

  ngOnInit(): void {
  }

  setData(val: string): void {
    this.service.setData(val);
  }

}
