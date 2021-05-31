import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {PregnancyInfo} from '../../models/pregnancyInfo';
import {Contraction} from "../../models/contraction";

@Component({
  selector: 'app-counters-dash',
  templateUrl: './counters-dash.component.html',
  styleUrls: ['./counters-dash.component.scss'],
})
export class CountersDashComponent implements OnInit {

  @Input() kicksCount?: number;
  @Input() countContractions?: number;
  @Input() lastContraction?: Contraction;
  constructor() { }

  ngOnInit(): void {
  }

  countChangedHandlerKicks(count: number) {
    this.kicksCount = count;
    console.log(count);
  }

  // countChangedHandlerContractions(count: number) {
  //   this.countContractions = count;
  //   console.log(count);
  // }
}
