import {Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { ICommitElement } from '../../../interfaces/ICommitElement';
import {faCaretDown, faCaretUp, faCaretRight, faPlusSquare, faChevronCircleRight, faJedi, faUser, faCalendarAlt, faSquare, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'commit-feed',
    templateUrl: './commit-feed.component.html',
    styles: []
})
export class CommitFeedComponent implements OnInit {
  @Input() commitElements: ICommitElement[];

  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faPlusSquare = faPlusSquare;
  faChevronCircleRight = faChevronCircleRight;
  faJedi = faJedi;
  faUser = faUser;
  faCalendarAlt = faCalendarAlt;
  faSquare = faSquare;
  faSortAmountUp = faSortAmountUp;

  constructor() {}

  ngOnInit() {
    /**this.commitElements.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });**/
    this.commitElements.sort((a, b) => a.currentCommit.timestamp - b.currentCommit.timestamp);
    console.log("----------------------------------------------");
    for(var i=0; i<this.commitElements.length; i++) {
      console.log(this.commitElements[i].date);
    }
  }
}
