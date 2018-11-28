import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITimeFilterElement } from '../../../interfaces/ITimeFilterElement';
import { AppConfig } from '../../../AppConfig';
import { INode } from '../../../interfaces/INode';
import { IUserLeaderboardElement } from '../../../interfaces/IUserLeaderboardElement';
import { ICommitElement } from '../../../interfaces/ICommitElement';
import {faCaretDown, faCaretUp, faCaretRight, faPlusSquare, faChevronCircleRight, faJedi, faUser, faCalendarAlt, faSquare, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'leader-board',
    templateUrl: './leader-board.component.html',
    styleUrls: ['./leader-board.component.css']
})

export class LeaderBoardComponent implements OnChanges{
  @Input() commitElements: ICommitElement[];
  @Input() userLeaderboardElements: IUserLeaderboardElement[];
  @Input() activeFilter: number;

  formattedCommitElements: ICommitElement[];
  formattedUserElements: IUserLeaderboardElement[];

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
    this.formattedCommitElements = [];
    console.log(Date.now()-this.activeFilter);
    this.commitElements.sort((a, b) => b.totalPoints - a.totalPoints).filter(commitElement => commitElement.currentCommit.timestamp  > Date.now()-this.activeFilter);
    console.log(this.commitElements);
    this.formattedUserElements = this.userLeaderboardElements.sort((a, b) => b.totalUserPoints - a.totalUserPoints);

    for(var i=0; i<15; i++) {
      if(this.commitElements[i]) {
        this.formattedCommitElements.push(this.commitElements[i]);
      }
    }
  }
}
