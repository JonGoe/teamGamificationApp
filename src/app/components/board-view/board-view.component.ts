import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MetricService } from '../../service/metric.service';
import { IFilter } from '../../interfaces/IFilter';
import { INode } from '../../interfaces/INode';
import { IMetricMapping } from '../../interfaces/IMetricMapping';
import { ICommit } from '../../interfaces/ICommit';
import { IMetric } from '../../interfaces/IMetric';
import { ICommitElement } from '../../interfaces/ICommitElement';
import { IUserLeaderboardElement } from '../../interfaces/IUserLeaderboardElement';
import { ITimeFilterElement } from '../../interfaces/ITimeFilterElement';
import { ITableRow } from '../../interfaces/ITableRow';
import { TimeFilter } from '../../enum/TimeFilter';
import { AppConfig } from '../../AppConfig';

@Component({
    selector: 'board-view',
    templateUrl: './board-view.component.html',
    styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit {

    @Input() commits: ICommit[];
    @Input() availableMetrics: IMetric[];

    ICommitElements: ICommitElement[];
    IUserLeaderboardElements: IUserLeaderboardElement[];

    activeTimeFilterValue: number;

    metricNames: string[];
    authors: string[];

    constructor(public metricService: MetricService) {}

    ngOnInit() {
      console.log(this.commits);
      console.log(this.availableMetrics);

      this.ICommitElements = [];
      this.IUserLeaderboardElements = [];

      this.authors = Array.from(new Set(this.commits.map(commit => commit.author)));

      this.metricNames = this.availableMetrics.map(metric => metric.metricName);

      let totalUserPoints = 0;
      for(var k = 0; k < this.authors.length; k++) {
        let authorName = this.authors[k];
        let totalUserHighscore = 0;
        let bestCommitName = this.commits[0].name;
        let bestCommitDate = new Date(this.commits[0].timestamp).toLocaleDateString();
        let singleUserHighscore = 0;
        this.IUserLeaderboardElements.push({
          user: authorName,
          totalUserPoints: totalUserHighscore,
          bestCommitName: bestCommitName,
          bestCommitDate: bestCommitDate,
          bestCommitPoints: singleUserHighscore,
        });
      }

      for (var i = 0; i < this.commits.length-1; i++) {
        let deltaTree: INode;
        let tableRows: ITableRow[] = [];
        let totalCommitPoints = 0;

        let currentCommit = this.commits[i];
        //console.log(currentCommit);

        let previousCommit = this.commits[i+1];
        //console.log(previousCommit);

        let commitDate = new Date(currentCommit.timestamp).toLocaleDateString();

        let currentUserKey = this.IUserLeaderboardElements.findIndex(i => i.user === currentCommit.author);

        //console.log("------------------------------");
        this.metricService.loadDeltaTree(previousCommit, currentCommit, this.metricNames).subscribe(node => {
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

          if(totalCommitPoints > this.IUserLeaderboardElements[currentUserKey].bestCommitPoints) {
            this.IUserLeaderboardElements[currentUserKey].bestCommitName = currentCommit.name;
            this.IUserLeaderboardElements[currentUserKey].bestCommitDate = commitDate;
            this.IUserLeaderboardElements[currentUserKey].bestCommitPoints= totalCommitPoints;
          }
          this.IUserLeaderboardElements[currentUserKey].totalUserPoints += totalCommitPoints;

          this.ICommitElements.sort((a, b) => b.currentCommit.timestamp - a.currentCommit.timestamp);
          this.IUserLeaderboardElements.sort((a, b) => b.totalUserPoints - a.totalUserPoints);
          //console.log(this.IUserLeaderboardElements);
        });
      }
    }

    prepareTableData(foundElement: INode): ITableRow[] {
      let rows: ITableRow[] = [];
      for (const key of Object.keys(this.availableMetrics)) {
          const metricName = this.availableMetrics[key].metricName;
          //console.log("Metricname: " + metricName);
          let currentCommitValue;
          if (foundElement.commit1Metrics && foundElement.commit1Metrics[metricName]) {
              currentCommitValue = foundElement.commit1Metrics[metricName];
              //console.log("Current Value: " + currentCommitValue);
          }

          let previousCommitValue;
          if (foundElement.commit2Metrics && foundElement.commit2Metrics[metricName]) {
              previousCommitValue = foundElement.commit2Metrics[metricName];
              //console.log("Previous Value: " + previousCommitValue);
          }

          let difference = 0;
          if (currentCommitValue && previousCommitValue) {
              difference = previousCommitValue - currentCommitValue;
              //console.log("Difference: " + difference);
          }

          let points = 0;
          if(difference!=0) {
            points = 10 * difference;
            //console.log("Points: " + points);

            rows.push({
                metricName: AppConfig.getShortNameByMetricName(metricName).shortName,
                currentCommitValue: currentCommitValue || 'N/A',
                previousCommitValue: previousCommitValue || 'N/A',
                difference: difference,
                points: points
            });
          }
      }
      return rows;
    }
}
