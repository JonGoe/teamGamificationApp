import {Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { ICommitElement } from '../../../interfaces/ICommitElement';
import { TimeFilter } from '../../../enum/TimeFilter';
import {faCaretDown, faCaretUp, faCaretRight, faPlusSquare, faChevronCircleRight, faJedi, faUser, faCalendarAlt, faSquare, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'commit-feed',
    templateUrl: './commit-feed.component.html',
    styleUrls: ['./commit-feed.component.css']
})
export class CommitFeedComponent implements OnChanges{
  @Input() commitElements: ICommitElement[];
  @Input() activeFilter: number;


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

  ngOnChanges() {

   this.commitElements.sort((a, b) => b.currentCommit.timestamp - a.currentCommit.timestamp).filter(commitElement => commitElement.currentCommit.timestamp  > Date.now()-this.activeFilter);
  }
}
