import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFilter } from '../../../interfaces/IFilter';
import { NodeType } from '../../../enum/NodeType';
import { AppConfig } from '../../../AppConfig';
import { INode } from '../../../interfaces/INode';
import { TooltipService } from '../../../service/tooltip.service';
import { IMetricMapping } from '../../../interfaces/IMetricMapping';
import { FocusService } from '../../../service/focus.service';

@Component({
    selector: 'app-leader-board',
    templateUrl: './leader-board.component.html',
    styles: []
})
export class LeaderBoardComponent implements OnInit, OnChanges, OnDestroy {
    @Input() activeFilter: IFilter;
    @Input() metricTree: INode;
    @Input() metricMapping: IMetricMapping;

    subscriptions: Subscription[] = [];

    constructor(private focusService: FocusService, private tooltipService: TooltipService) {}

    ngOnChanges(changes: SimpleChanges) {}

    ngOnInit() {}

    ngOnDestroy() {
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }
}
