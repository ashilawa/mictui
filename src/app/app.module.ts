import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {WebpackTranslateLoader} from './webpack-translate-loader';
import {APP_CONFIG, AppConfig} from './configs/app.config';
import {SharedModule} from './shared/shared.module';
import { SystemPreferencesComponent } from './system-preferences/system-preferences.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { GeneralComponent } from './modules/general/general.component';
import { ViewportsComponent } from './modules/viewports/viewports.component';
import { PatientScheduleComponent } from './modules/patient-schedule/patient-schedule.component';
import { ECGComponent } from './modules/ecg/ecg.component';
import { AccessControlComponent } from './modules/access-control/access-control.component';
import { ImageDatabaseComponent } from './modules/image-database/image-database.component';
import { NetworkingComponent } from './modules/networking/networking.component';
import { PpsComponent } from './modules/pps/pps.component';
import { ExamSplitComponent } from './modules/exam-split/exam-split.component';
import { ProtocolSelectionComponent } from './modules/protocol-selection/protocol-selection.component';
import { PatientDataEntryComponent } from './modules/patient-data-entry/patient-data-entry.component';
import { ContrastMgmtComponent } from './modules/contrast-mgmt/contrast-mgmt.component';
import { InventionalComponent } from './modules/inventional/inventional.component';
import { ScreenRoomDisplayComponent } from './modules/screen-room-display/screen-room-display.component';
import { LightingComponent } from './modules/lighting/lighting.component';
import { CloudConnectivityComponent } from './modules/cloud-connectivity/cloud-connectivity.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SystemPreferencesComponent,
    HomePageComponent,
    GeneralComponent,
    ViewportsComponent,
    PatientScheduleComponent,
    ECGComponent,
    AccessControlComponent,
    ImageDatabaseComponent,
    NetworkingComponent,
    PpsComponent,
    ExamSplitComponent,
    ProtocolSelectionComponent,
    PatientDataEntryComponent,
    ContrastMgmtComponent,
    InventionalComponent,
    ScreenRoomDisplayComponent,
    LightingComponent,
    CloudConnectivityComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
