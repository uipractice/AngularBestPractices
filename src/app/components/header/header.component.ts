import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data: any = []
  @Output() loadNavDataEvent = new EventEmitter
  selectedItem :any
  constructor() {
   }

  ngOnInit(): void {
    console.log('this.data[0]', this.data[0])
    this.selectedItem = this.data[0]
  }
  // loadNavData(data) {
  //   // console.log(data)
  //   data.isShow = !data.isShow
  //   this.loadNavDataEvent.emit(data)
  // }
  loadSubNavData(data) {
    // console.log(data)
    this.selectedItem = data;
    this.loadNavDataEvent.emit(data)
  }
  loadNavData(item): void {
    this.selectedItem = item;
    item.isShow = !item.isShow
    this.loadNavDataEvent.emit(item)
    console.log(item)
  }

}
