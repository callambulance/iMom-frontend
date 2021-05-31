import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import {PregnancyInfo} from '../../../models/pregnancyInfo';
import {HomeService} from '../../service/home.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-kicks',
  templateUrl: './kicks.component.html',
  styleUrls: ['./kicks.component.scss'],
})
export class KicksComponent implements OnInit {

  @Input() kicksCount?: number;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  increseKicks() {
    this.homeService.increaseKicksCount('1').subscribe();
    if (this.kicksCount) {
      this.countChanged.emit(this.kicksCount += 1);
    }
  }
}
