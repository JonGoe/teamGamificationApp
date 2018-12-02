import {Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { Subscription } from 'rxjs';
import { ElementService } from '../../../service/element.service';
import { ICommitElement } from '../../../interfaces/ICommitElement';
import { IUserElement } from '../../../interfaces/IUserElement';
import { TimeFilter } from '../../../enum/TimeFilter';
import {faCaretDown, faCaretUp, faCaretRight, faPlusSquare, faChevronCircleRight, faJedi, faUser, faCalendarAlt, faSquare, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'commit-feed',
    templateUrl: './commit-feed.component.html',
    styleUrls: ['./commit-feed.component.css']
})
export class CommitFeedComponent implements OnChanges{
  commitElements: ICommitElement[] = [];
  userElements: IUserElement[] = [];
  activeFilter: number;
  subscription: Subscription;

  formattedCommitElements: ICommitElement[];

  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faPlusSquare = faPlusSquare;
  faChevronCircleRight = faChevronCircleRight;
  faJedi = faJedi;
  faUser = faUser;
  faCalendarAlt = faCalendarAlt;
  faSquare = faSquare;
  faSortAmountUp = faSortAmountUp;

  constructor(public elementService: ElementService) {
  }

  ngOnChanges() {
   this.formattedCommitElements = [];

   this.elementService.commitElements$.subscribe(commitElementsNode => {
    this.commitElements = commitElementsNode;
    for(var i=0; i<this.commitElements.length; i++) {
     if(this.commitElements[i].currentCommit.timestamp  > (Date.now()-this.activeFilter)) {
       this.formattedCommitElements.push(this.commitElements[i]);
       this.formattedCommitElements.sort((a, b) => b.currentCommit.timestamp - a.currentCommit.timestamp);
     }
    }
   });
  }
}
