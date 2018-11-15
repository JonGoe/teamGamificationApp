import { Component, OnInit } from '@angular/core';
import { CommitType } from '../../enum/CommitType';
import { Store } from '@ngrx/store';
import { ICommit } from '../../interfaces/ICommit';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { TimeFilter } from '../../enum/TimeFilter';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
    commitTypes: any = {
        latest: CommitType.LATEST,
        previous: CommitType.PREVIOUS
    };

    timeFilter: any = {
            today: TimeFilter.TODAY,
            lastThreeDays: TimeFilter.LAST_THREE_DAYS,
            lastWeek: TimeFilter.LAST_WEEK,
            lastTwoWeeks: TimeFilter.LAST_TWO_WEEKS,
            lastMonth: TimeFilter.LAST_MONTH,
            total: TimeFilter.TOTAL
    };

    uniqueFileList$: Observable<string[]>;

    // disable the second commit chooser for demo purposes
    disablePreviousSelect: boolean = !environment.useCoderadarEndpoint;

    constructor() {}

    ngOnInit() {
    }
}
