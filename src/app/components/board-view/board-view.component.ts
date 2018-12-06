import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MetricService } from '../../service/metric.service';
import { SetupService } from '../../service/setup.service';
import { INode } from '../../interfaces/INode';
import { IMetricMapping } from '../../interfaces/IMetricMapping';
import { ICommit } from '../../interfaces/ICommit';
import { IMetric } from '../../interfaces/IMetric';
import { ICommitElement } from '../../interfaces/ICommitElement';
import { IUserElement } from '../../interfaces/IUserElement';
import { ITimeFilterElement } from '../../interfaces/ITimeFilterElement';
import { ITableRow } from '../../interfaces/ITableRow';
import { TimeFilter } from '../../enum/TimeFilter';
import { AppConfig } from '../../AppConfig';

@Component({
    selector: 'board-view',
    templateUrl: './board-view.component.html',
    styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit, OnChanges {

    @Input() commits: ICommit[];
    @Input() availableMetrics: IMetric[];

    ICommitElements: ICommitElement[];
    IUserElements: IUserElement[];

    activeTimeFilterValue: number;
    selectedBoard: string;

    metricNames: string[];
    authors: string[];

    constructor(public metricService: MetricService, public setupService: SetupService) {}

    ngOnInit() {
      console.log("Geladene Commits");
      console.log(this.commits);
      console.log("Geladene Metriken");
      console.log(this.availableMetrics);

      this.activeTimeFilterValue = this.setActiveTimeFilter(this.commits[0].timestamp);
      this.selectedBoard = "";

      this.ICommitElements = [];
      this.IUserElements = [];

      this.authors = Array.from(new Set(this.commits.map(commit => AppConfig.getPersonName(commit.author))));

      this.metricNames = this.availableMetrics.map(metric => metric.metricName);

      this.setupService.authorizeUser().subscribe(loginResultAccessToken => {
        console.log(loginResultAccessToken);
        let totalUserPoints = 0;
        for(var k = 0; k < this.authors.length; k++) {
          let authorName = this.authors[k];
          let totalUserHighscore = 0;
          let bestCommitName = this.commits[0].name;
          let bestCommitDate = new Date(this.commits[0].timestamp).toLocaleDateString();
          let singleUserHighscore = 0;
          this.IUserElements.push({
            user: authorName,
            commitsPerUser: []
          });
        }

        for (var i = 0; i < this.commits.length-1; i++) {
          let deltaTree: INode;
          let tableRows: ITableRow[] = [];
          let totalCommitPoints = 20;

          let currentCommit = this.commits[i];

          let previousCommit = this.commits[i+1];
          //console.log(previousCommit);

          /**console.log("------------------------------");
          console.log(this.commits.length-i);
          console.log(new Date(currentCommit.timestamp).toLocaleDateString());
          console.log(new Date(previousCommit.timestamp).toLocaleDateString());**/

          let commitDate = new Date(currentCommit.timestamp).toLocaleDateString();

          let currentUserKey = this.IUserElements.findIndex(i => i.user === AppConfig.getPersonName(currentCommit.author));

          this.metricService.loadDeltaTree(loginResultAccessToken, previousCommit, currentCommit, this.metricNames).subscribe(node => {
            deltaTree = node;
            //console.log(deltaTree);
            tableRows = this.prepareTableData(deltaTree);
            for(var j = 0; j < tableRows.length; j++) {
              totalCommitPoints += tableRows[j].points;
            }

            this.ICommitElements.push({
              currentCommit: currentCommit,
              previousCommit: previousCommit,
              date: commitDate,
              totalPoints: totalCommitPoints,
              tableRows: tableRows
            });

            this.IUserElements[currentUserKey].commitsPerUser.push({
               currentCommit: currentCommit,
               previousCommit: previousCommit,
               date: commitDate,
               totalPoints: totalCommitPoints,
               tableRows: tableRows
            });

            this.ICommitElements.sort((a, b) => b.currentCommit.timestamp - a.currentCommit.timestamp);
          });
        }
      });
    }

    prepareTableData(foundElement: INode): ITableRow[] {
      let rows: ITableRow[] = [];
      for (const key of Object.keys(this.availableMetrics)) {
          const metricName = this.availableMetrics[key].metricName;
          //console.log("Metricname: " + metricName);

          let previousCommitValue;
          if (foundElement.commit1Metrics && foundElement.commit1Metrics[metricName]) {
              previousCommitValue = foundElement.commit1Metrics[metricName];
              //console.log("Previous Value: " + previousCommitValue);
          }

          let currentCommitValue;
          if (foundElement.commit2Metrics && foundElement.commit2Metrics[metricName]) {
              currentCommitValue = foundElement.commit2Metrics[metricName];
              //console.log("Current Value: " + currentCommitValue);
          }

          let difference = 0;
          if (currentCommitValue && previousCommitValue) {
              difference = previousCommitValue - currentCommitValue;
              //console.log("Difference: " + difference);
          }

          let points = 0;
          let metricValueDown = true;
          if(difference!=0) {
            if(difference>0) {
              points = AppConfig.getMetricByMetricName(metricName).pointValue * difference;
              metricValueDown = true;
            } else {
              difference = difference * -1;
              metricValueDown = false;
            }
            //console.log("Points: " + points);

            rows.push({
                metricName: AppConfig.getMetricByMetricName(metricName).shortName,
                currentCommitValue: currentCommitValue || 'N/A',
                previousCommitValue: previousCommitValue || 'N/A',
                difference: difference,
                points: points,
                metricValueDown: metricValueDown
            });
          }
      }
      return rows;
    }

    setActiveTimeFilter(firstCommitTimestamp: number): number {
      console.log(new Date(firstCommitTimestamp).toLocaleDateString());
      if(firstCommitTimestamp > (Date.now()-86400000)) {
        return 86400000;
      } else if(firstCommitTimestamp > (Date.now()-259200000)) {
        return 259200000;
      } else if(firstCommitTimestamp > (Date.now()-604800000)) {
        return 604800000;
      } else if(firstCommitTimestamp > (Date.now()-1209600000)) {
        return 1209600000;
      } else if(firstCommitTimestamp > (Date.now()-1814400000)) {
        return 1814400000;
      } else if(firstCommitTimestamp > (Date.now()-2629743000)) {
        return 2629743000;
      } else {
        return 15778458000;
      }
    }

    ngOnChanges() {
      if(this.selectedBoard){
        console.log("000000000000000000000000000000000000000");
        console.log(this.selectedBoard);
      }
    }

}
