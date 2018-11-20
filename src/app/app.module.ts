import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ViewModule } from './components/general-view.module';
import { CommitService } from './service/commit.service';
import { MetricService } from './service/metric.service';
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
        ViewModule,
        environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 50 })
    ],
    providers: [
        CommitService,
        MetricService
    ],
    bootstrap: [AppComponent]
})
export class TeamGamificationAppModule {}
