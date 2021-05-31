import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contraction} from '../../../models/contraction';
import {HomeService} from '../../service/home.service';

@Component({
  selector: 'app-contractions',
  templateUrl: './contractions.component.html',
  styleUrls: ['./contractions.component.scss']
})
export class ContractionsComponent implements OnInit {

  @Input() countContractions?: number;
  @Input() lastContraction?: Contraction;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  @Output() lastContractionChangedDuration: EventEmitter<number> = new EventEmitter();
  @Output() lastContractionChangedDate: EventEmitter<string> = new EventEmitter();

  // contractionsCount = 0;
  frequency = 0;
  holdStart = 0;
  holdTime = 0;
  timeStamp = '';
  date: any;

  constructor(private elRef: ElementRef, private homeService: HomeService) { }

  ngOnInit(): void {}

  @HostListener('mousedown', ['$event'])
  mouseDown(event: MouseEvent) {
    this.holdStart = Date.now();
    console.log(this.holdStart);
  }

  @HostListener('mouseup', ['$event'])
  mouseUp(event: MouseEvent) {
    this.holdTime = Date.now() - this.holdStart;
    if (this.countContractions && this.lastContraction) {
      this.lastContraction.duration = this.holdTime / this.countContractions / 100;
    }else if (this.countContractions){
      this.frequency = this.holdTime / this.countContractions / 100;
    }
  }

  countContraction() {
    if (this.countContractions && this.lastContraction) {
      // this.countContractions++;{
      const date = new Date();
      this.timeStamp = date.toLocaleDateString('en-GB', {weekday: 'long', hour: 'numeric', minute: 'numeric'});
      this.lastContraction.dateTime = this.timeStamp;
      this.countChanged.emit(this.countContractions += 1);
      this.lastContractionChangedDuration.emit(this.lastContraction.duration);
      this.lastContractionChangedDate.emit(this.lastContraction.dateTime);

      let contraction: Contraction;
      contraction = {
        duration: this.lastContraction.duration,
        dateTime: this.timeStamp,
      };
      this.homeService.saveNewContraction('1', contraction).subscribe();
    }
  }
}

