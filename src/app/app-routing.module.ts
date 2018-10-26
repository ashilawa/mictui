import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404PageComponent} from './shared/pages/error404-page/error404-page.component';
import {AppConfig} from './configs/app.config';
import {SystemPreferencesComponent} from './system-preferences/system-preferences.component';
import {HomePageComponent} from './home-page/home-page.component';
import { GeneralComponent } from './modules/general/general.component';
import { AccessControlComponent } from './modules/access-control/access-control.component';
import { ViewportsComponent } from './modules/viewports/viewports.component';
import { PatientScheduleComponent } from './modules/patient-schedule/patient-schedule.component';
import { ImageDatabaseComponent } from './modules/image-database/image-database.component';
import { NetworkingComponent } from './modules/networking/networking.component';
import { PpsComponent } from './modules/pps/pps.component';
import { ExamSplitComponent } from './modules/exam-split/exam-split.component';
import { ProtocolSelectionComponent } from './modules/protocol-selection/protocol-selection.component';
import { PatientDataEntryComponent } from './modules/patient-data-entry/patient-data-entry.component';
import { ContrastMgmtComponent } from './modules/contrast-mgmt/contrast-mgmt.component';
import { ECGComponent } from './modules/ecg/ecg.component';
import { InventionalComponent } from './modules/inventional/inventional.component';
import { ScreenRoomDisplayComponent } from './modules/screen-room-display/screen-room-display.component';
import { LightingComponent } from './modules/lighting/lighting.component';
import { CloudConnectivityComponent } from './modules/cloud-connectivity/cloud-connectivity.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: AppConfig.routes.error404, component: Error404PageComponent},
  {path: 'systemPreferences' , component:SystemPreferencesComponent,
    children:[
      {path:'', component: GeneralComponent},
      {path:'general', component: GeneralComponent},
      {path:'accessControl', component: AccessControlComponent},
      {path:'viewPorts', component: ViewportsComponent},
      {path:'patientSchedule', component: PatientScheduleComponent},
      {path:'imgDatabase', component: ImageDatabaseComponent},
      {path:'networking', component: NetworkingComponent},
      {path:'pps', component: PpsComponent},
      {path:'examSplit', component: ExamSplitComponent},
      {path:'protocolSelection', component: ProtocolSelectionComponent},
      {path:'patientDataEntry', component: PatientDataEntryComponent},
      {path:'contrastMgmt', component: ContrastMgmtComponent},
      {path:'ecg', component: ECGComponent},
      {path:'inventional', component: InventionalComponent},
      {path:'screenRoomDisplay', component: ScreenRoomDisplayComponent},
      {path:'lighting', component: LightingComponent},
      {path:'cloudConnectivity', component: CloudConnectivityComponent}
    ]
},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
