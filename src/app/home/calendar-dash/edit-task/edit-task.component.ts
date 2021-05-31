import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CalendarService} from "../../../nav/calendar/service/calendar-task.service";
import {Router} from "@angular/router";
import {Task} from "../../../nav/calendar/model/task";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  // public editTask: any;
  // @Input() editTask?: Task;
  @Output() demo: EventEmitter<Task> = new EventEmitter();
  public formSubmitted: boolean;
  taskForm = new FormGroup({
    taskName: new FormControl(this.data.editingTask.taskName),
    taskText: new FormControl(this.data.editingTask.taskText),
    taskStatus: new FormControl(this.data.editingTask.taskStatus)});


  constructor(private calendarTaskService: CalendarService, private router: Router,
   @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formSubmitted = false;
  }

  ngOnInit(): void {
  }

  submitted(): void {
    this.formSubmitted = true;
    let taskS: boolean;
    // tslint:disable-next-line:label-position
    let task!: Task;
    // tslint:disable-next-line:forin
    for (const field in this.taskForm.controls) {
      // tslint:disable-next-line:prefer-const
      if (this.data.editingTask) {
        if (this.taskForm.controls.taskStatus.value){
          taskS = true;
        } else{
          taskS = false;
        }
        task = {
          id: this.data.editingTask.id,
          taskName: this.taskForm.controls.taskName.value,
          taskText: this.taskForm.controls.taskText.value,
          taskStatus: taskS,
        };
      }
      console.log(task.taskText, task.taskName, task.taskStatus);
      // this.calendarComponent.refreshTasks();
      // const navigationDetails: string[] = ['/home'];
      // this.router.navigate(navigationDetails);
    }
    this.demo.emit(task);
    this.calendarTaskService.editTask(task).subscribe();
    window.location.reload();
  }
}

