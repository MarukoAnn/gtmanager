import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BtnList, BtnOption} from '../headerData.model';

@Component({
  selector: 'rbi-basic-btn',
  templateUrl: './basic-btn.component.html',
  styleUrls: ['./basic-btn.component.less']
})
export class BasicBtnComponent implements OnInit {

  @Input()
  public btnOption: BtnOption;
  @Output()
  public event = new EventEmitter<any>();
  @Output()
  public searchEvent = new EventEmitter<any>();
  public searchOption = [
    {label: '所有', value: 1},
    {label: '房间号', value: 2},
    {label: '手机号', value: 3},
  ];
  public searchType = 1;
  public serchData = '';
  constructor() { }
  ngOnInit() {
  }

  public  eventClick(e): void {
     this.event.emit(e);
  }
  public  SearchClick(): void {
      this.searchEvent.emit({type: this.searchType, value: this.serchData});
  }
}
