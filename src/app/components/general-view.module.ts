import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BoardViewModule } from './board-view/board-view.module';
import { SharedModule } from './shared-components/shared.module';
import { GeneralViewComponent } from './general-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BoardViewModule,
    SharedModule
  ],
  declarations: [
    GeneralViewComponent,
  ],
  exports: [
    GeneralViewComponent,
  ],
})
export class ViewModule { }
