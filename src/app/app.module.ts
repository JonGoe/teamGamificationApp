import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ViewModule } from './components/general-view.module';
import { CommitService } from './service/commit.service';
import { MetricService } from './service/metric.service';
import { SetupService } from './service/setup.service';
import { ElementService } from './service/element.service';
import { environment } from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        FontAwesomeModule,
        FlexLayoutModule,
        ViewModule
    ],
    providers: [
        CommitService,
        MetricService,
        SetupService,
        ElementService
    ],
    bootstrap: [AppComponent]
})
export class TeamGamificationAppModule {}
