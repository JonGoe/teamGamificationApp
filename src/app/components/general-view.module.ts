import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BoardViewModule } from './board-view/board-view.module';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { GeneralViewComponent } from './general-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BoardViewModule,
    ControlPanelModule
  ],
  declarations: [
    GeneralViewComponent
  ],
  exports: [
    GeneralViewComponent
  ],
})
export class ViewModule { }
