import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoardViewComponent } from './board-view.component';
import { CommitFeedComponent } from './commit-feed/commit-feed.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { MetricService } from '../../service/metric.service';
import { environment } from '../../../environments/environment';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [
        BoardViewComponent,
        CommitFeedComponent,
        LeaderBoardComponent
    ],
    exports: [
        BoardViewComponent,
        CommitFeedComponent,
        LeaderBoardComponent
    ],
})
export class BoardViewModule {}
