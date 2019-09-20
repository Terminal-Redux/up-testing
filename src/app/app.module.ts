
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayersSidebarComponent } from './components/layers-sidebar/layers-sidebar.component';
import { MapComponent } from './modules/map/component/map.component';
import { ToolsSidebarComponent } from './components/tools-sidebar/tools-sidebar.component';

import {ColorPickerModule} from 'primeng/colorpicker';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {DialogModule} from 'primeng/dialog';
import {SliderModule} from 'primeng/slider';

import { NgxDonutChartModule } from 'ngx-doughnut-chart';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayersSidebarComponent,
    MapComponent,
    ToolsSidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgbModule,
    ColorPickerModule,
    ChartModule,
    ButtonModule,
    SidebarModule,
    DialogModule,
    SliderModule,
    NgxDonutChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
