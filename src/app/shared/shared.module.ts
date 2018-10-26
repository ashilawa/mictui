import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {ScrollToFirstInvalidDirective} from './directives/scroll-to-first-invalid.directive';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {WebStorageModule} from 'ngx-store';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    RouterModule,
    NgxExampleLibraryModule,
    WebStorageModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    Error404PageComponent,
    HeaderComponent,
    ScrollToFirstInvalidDirective
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    NgxExampleLibraryModule,
    WebStorageModule,
    HeaderComponent,
    ScrollToFirstInvalidDirective
  ]
})

export class SharedModule {
}
