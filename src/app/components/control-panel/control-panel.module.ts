import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlPanelComponent } from './control-panel.component';
import { FormsModule } from '@angular/forms';
import { CommitService } from '../../service/commit.service';
import { environment } from '../../../environments/environment';
import { FilterComponent } from './filter/filter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule],
    declarations: [
        ControlPanelComponent,
        FilterComponent,
    ],
    exports: [ControlPanelComponent],
})
export class ControlPanelModule {}
