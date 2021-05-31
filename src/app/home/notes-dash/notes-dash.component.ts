import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Note} from "../../models/note.object";
import {Food} from '../../nav/food/model/food';
import {HomeService} from '../service/home.service';
import {DatePipe, formatDate} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-notes-dash',
  templateUrl: './notes-dash.component.html',
  styleUrls: ['./notes-dash.component.scss']
})
export class NotesDashComponent implements OnInit {

  username?: string;
  @Input() userNotes!: Note[];
  @Output() demo: EventEmitter<string> = new EventEmitter();

  constructor(private snackbar: MatSnackBar, public dialog: MatDialog,
              private homeService: HomeService, private router: Router,
              private datePipe: DatePipe, private userInfo: TokenStorageService) { }

  ngOnInit(): void {
    this.username = this.userInfo.getUser().username;
  }

  saveNote(value: string) {
    if (value != "") {
      let newNote: Note;
      const date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      newNote = ({
        id: '1',
        userId: '1',
        description: value,
        // @ts-ignore
        date: date + ''
        // date: new Date().toLocaleString(),
      });
      console.log(date);
      // this.userNotes.push(newNote);
      if (this.userNotes) {
        this.homeService.postNewNote(newNote, '1').subscribe();
      }
      this.demo.emit('data change');
      window.location.reload();
      console.log(newNote);
      this.snackbar.open('Note saved successfully', '',{
        duration: 3000
      });
    } else {this.snackbar.open('You cannot save empty note', 'ALERT!',{
      duration: 3000
    });
    }}

  openAllNotes(): void {
    const dialogRef = this.dialog.open(NotesDashDialog, {
      width: '800px',
      data: {
        notes: this.userNotes,
        name: this.username
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
    });
  }

}

@Component({
  selector: 'notes-dash-dialog',
  templateUrl: 'notes-dash-dialog.html'
})
export class NotesDashDialog {

  constructor(private homeService: HomeService,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  deleteNote(note: Note) {

    const index: number = this.data.notes.indexOf(note);
    if (index !== -1) {
      this.data.notes.splice(index, 1);
    }
    this.homeService.deleteNote(note.id).subscribe();
  }
}
