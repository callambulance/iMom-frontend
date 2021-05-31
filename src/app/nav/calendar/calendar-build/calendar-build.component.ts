import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventCalendar} from '../model/eventCalendar';

@Component({
  selector: 'app-calendar-build',
  templateUrl: './calendar-build.component.html',
  styleUrls: ['./calendar-build.component.scss']
})
export class CalendarBuildComponent implements OnInit {
  @Input() userEvent?: EventCalendar[];
  color = '#3365ed';

  options2 = {
    outline: false,
    evenDayDimensions: true
  };


  constructor() { }

  ngOnInit(): void {
  }

}
