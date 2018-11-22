import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnChanges {

  @Input() loadingIterator: number;
  @Input() loadingElements: number;

  constructor() { }

  ngOnChanges() {
  }

}
