import {Component, Inject, Input, NgZone, OnInit} from '@angular/core';
import {CalendarService} from './service/calendar-task.service';
import {EventCalendar} from './model/eventCalendar';
import {Task} from "./model/task";
import {EditTaskComponent} from "../../home/calendar-dash/edit-task/edit-task.component";
import {HomeService} from '../../home/service/home.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {NewTaskComponent} from '../../home/calendar-dash/new-task/new-task.component';
import {NewEventComponent} from './new-event/new-event.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  userEvents: EventCalendar[] = [];
  color = '#3f51b5';
  tasks: Task[] = [];

  constructor(private calendarService: CalendarService, public dialog: MatDialog) { }
  title = 'ngx-calendar';

  // options1 = {
  //   outline: false
  // };
  //
  // options2 = {
  //   outline: false,
  //   evenDayDimensions: true
  // };


  ngOnInit(): void {
    this.calendarService.getUserEvents().subscribe(events => events.forEach(event => {
      let newEvent!: EventCalendar;
      newEvent = {
        startDateTime: new Date(event.startDateTime),
        endDateTime: new Date(event.endDateTime),
        name: event.name,
        description: event.description,
        location: event.location,
      };
      this.userEvents.push(newEvent);
      this.userEvents = events;
    }));
    this.calendarService.getTasks().subscribe(task => this.tasks = task);
  }

  deleteTask(task: Task) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.calendarService.deleteTask(task.id).subscribe();

  }

  editingTask(task: Task) {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '400px',   data: {editingTask: task}}
    );
  }

  toggleStatus(task: Task) {
    task = {
      id: task.id,
      taskName: task.taskName,
      taskText: task.taskText,
      taskStatus: !task.taskStatus,
    };
    this.calendarService.editTask(task).subscribe();

  }

  addEvent() {const dialogRef = this.dialog.open(NewEventComponent, {
    width: '400px'});
              dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  onChange(){
    this.ngOnInit();
  }
}


