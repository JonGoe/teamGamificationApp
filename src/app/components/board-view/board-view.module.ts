import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared-components/shared.module';
import { BoardViewComponent } from './board-view.component';
import { CommitFeedComponent } from './commit-feed/commit-feed.component';
import { UserLeaderBoardComponent } from './leader-boards/user-leader-board.component';
import { CommitLeaderBoardComponent } from './leader-boards/commit-leader-board.component';
import { MetricService } from '../../service/metric.service';
import { environment } from '../../../environments/environment';

const appRoutes: Routes = [
  { path: 'commit-feed', component: CommitFeedComponent },
  { path: 'user-leader-board', component: UserLeaderBoardComponent },
  { path: 'commit-leader-board', component: CommitLeaderBoardComponent },
  { path: '',
    redirectTo: '/commit-feed',
    pathMatch: 'full'
  },
  { path: '**', component: CommitFeedComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        BoardViewComponent,
        CommitFeedComponent,
        UserLeaderBoardComponent,
        CommitLeaderBoardComponent,
    ],
    exports: [
        BoardViewComponent,
        CommitFeedComponent,
        UserLeaderBoardComponent,
        CommitLeaderBoardComponent,
    ],
})
export class BoardViewModule {}
