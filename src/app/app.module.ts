import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorporateComponent } from './corporate/corporate.component';
import { HomesComponent } from './homes/homes.component';
import { HomesService } from './homes/homes.service';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CorporateComponent,
    HomesComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [HomesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
