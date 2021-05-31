import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {newTask} from '../../../nav/calendar/model/newTask';
import {CalendarService} from '../../../nav/calendar/service/calendar-task.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})

export class NewTaskComponent implements OnInit {
  public newTask: any;
  public formSubmitted: boolean;
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskText: new FormControl(''),

  });


  constructor(private calendarTaskService: CalendarService, private router: Router) {
    this.formSubmitted = false;
  }

  ngOnInit(): void {
  }

  submitted(): void {
    this.formSubmitted = true;
    // tslint:disable-next-line:label-position
    let task!: newTask;
    // tslint:disable-next-line:forin
    for (const field in this.taskForm.controls) {
      // tslint:disable-next-line:prefer-const
      task = {
        userId: '1',
        taskName: this.taskForm.controls.taskName.value,
        taskText: this.taskForm.controls.taskText.value,
        taskStatus: false,
      };
      console.log(task.taskText, task.taskName);
      // this.calendarComponent.refreshTasks();
      const navigationDetails: string[] = ['/home'];
      this.router.navigate(navigationDetails);
    }
    this.calendarTaskService.postNewTask(task, '1').subscribe();
    window.location.reload();


  }

}
