import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CalendarService} from "../service/calendar-task.service";
import {Router} from "@angular/router";
import {EventCalendar} from "../model/eventCalendar";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {
  @Output() addingEvent: EventEmitter<string> = new EventEmitter();
  public newEvent?: EventCalendar;
  public formSubmitted: boolean;
  eventForm = new FormGroup({
    eventName: new FormControl(''),
    eventText: new FormControl(''),
    eventLocation: new FormControl(''),
    eventStart: new FormControl(),
    eventEnd: new FormControl(),

  });


  constructor(private calendarTaskService: CalendarService, private router: Router) {
    this.formSubmitted = false;
  }

  ngOnInit(): void {
  }

  submitted(): void {
    this.formSubmitted = true;
    // tslint:disable-next-line:label-position
    let event!: EventCalendar;
    // tslint:disable-next-line:forin
    for (const field in this.eventForm.controls) {
      // tslint:disable-next-line:prefer-const
      console.log( this.eventForm.controls.eventStart.value);
      console.log(this.eventForm.controls.eventEnd.value);
      event = {
        name: this.eventForm.controls.eventName.value,
        description: this.eventForm.controls.eventText.value,
        location: this.eventForm.controls.eventLocation.value,
        startDateTime: this.eventForm.controls.eventStart.value,
        endDateTime: this.eventForm.controls.eventEnd.value,
        // status: "false";
      };
      console.log(event.name, event.description);
      this.addingEvent.emit('new event');
      // this.calendarComponent.refreshTasks();
      // const navigationDetails: string[] = ['/calendar'];
      // this.router.navigate(navigationDetails);
    }
    this.calendarTaskService.postNewEvent(event).subscribe();

  }
  }
