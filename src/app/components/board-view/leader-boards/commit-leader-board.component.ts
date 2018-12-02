import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITimeFilterElement } from '../../../interfaces/ITimeFilterElement';
import { AppConfig } from '../../../AppConfig';
import { INode } from '../../../interfaces/INode';
import { IUserLeaderboardElement } from '../../../interfaces/IUserLeaderboardElement';
import { IUserElement } from '../../../interfaces/IUserElement';
import { ICommitElement } from '../../../interfaces/ICommitElement';
import {faCaretDown, faCaretUp, faCaretRight, faPlusSquare, faChevronCircleRight, faJedi, faUser, faCalendarAlt, faSquare, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'commit-leader-board',
    templateUrl: './commit-leader-board.component.html',
    styleUrls: ['./commit-leader-board.component.css']
})

export class CommitLeaderBoardComponent implements OnChanges{
  @Input() commitElements: ICommitElement[];
  @Input() userElements: IUserElement[];
  @Input() activeFilter: number;

  formattedCommitElements: ICommitElement[];

  constructor() {}

  ngOnChanges() {
    this.formattedCommitElements = [];
    this.commitElements.sort((a, b) => b.totalPoints - a.totalPoints);

    for(var i=0; i<15; i++) {
      if(this.commitElements[i]) {
        if(this.commitElements[i].currentCommit.timestamp > (Date.now()-this.activeFilter)) {
          this.formattedCommitElements.push(this.commitElements[i]);
        }
      }
    }
  }
}
