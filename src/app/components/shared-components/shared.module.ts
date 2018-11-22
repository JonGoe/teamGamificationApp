import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoadingScreenComponent,
    HeaderComponent
  ],
  exports: [
    LoadingScreenComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
