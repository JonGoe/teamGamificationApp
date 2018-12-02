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
    selector: 'user-leader-board',
    templateUrl: './user-leader-board.component.html',
    styleUrls: ['./leader-board.component.css']
})

export class UserLeaderBoardComponent implements OnChanges{
  @Input() commitElements: ICommitElement[];
  @Input() userElements: IUserElement[];
  @Input() activeFilter: number;

  formattedUserElements: IUserLeaderboardElement[];

  constructor() {}

  ngOnChanges() {
    this.formattedUserElements = [];

    for(var i=0; i<this.userElements.length; i++) {
      let totalPointsPerUser = 0;
      let averagePointsPerUser = 0;
      let commitsInTimeframe = 0;
      let bestCommitName = "";
      let bestCommitDate = "";
      let bestCommitPoints = 0;

      if(this.userElements[i].commitsPerUser[0]) {
        let bestCommitName = this.userElements[i].commitsPerUser[0].currentCommit.name;
        let bestCommitDate = new Date(this.userElements[i].commitsPerUser[0].currentCommit.timestamp).toLocaleDateString();
        let bestCommitPoints = this.userElements[i].commitsPerUser[0].totalPoints;
      }

      for(var j=0; j<this.userElements[i].commitsPerUser.length; j++) {
        if(this.userElements[i].commitsPerUser[j].currentCommit.timestamp > (Date.now()-this.activeFilter)) {
          totalPointsPerUser = totalPointsPerUser + this.userElements[i].commitsPerUser[j].totalPoints;
          commitsInTimeframe++;
          averagePointsPerUser = Math.round(totalPointsPerUser / commitsInTimeframe * 100) / 100;
          if(this.userElements[i].commitsPerUser[j].totalPoints > bestCommitPoints) {
            bestCommitName = this.userElements[i].commitsPerUser[j].currentCommit.name;
            bestCommitDate = this.userElements[i].commitsPerUser[j].date;
            bestCommitPoints = this.userElements[i].commitsPerUser[j].totalPoints;
          }
        }
      }

      this.formattedUserElements.push({
        userData: this.userElements[i],
        totalUserPoints: totalPointsPerUser,
        averageUserPoints: averagePointsPerUser,
        commitCount: commitsInTimeframe,
        bestCommitName: bestCommitName,
        bestCommitDate: bestCommitDate,
        bestCommitPoints: bestCommitPoints
      });
      this.formattedUserElements = this.formattedUserElements.sort((a, b) => b.averageUserPoints - a.averageUserPoints);
    }
  }
}
