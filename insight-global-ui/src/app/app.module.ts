import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SubmitVendorApplicationComponent } from './submit-vendor-application/submit-vendor-application.component';
import { ApplicantsTableComponent } from './applicants-table/applicants-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitVendorApplicationComponent,
    ApplicantsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
