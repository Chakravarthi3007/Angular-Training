import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSideBarComponent } from './app-side-bar/app-side-bar.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { SubHeading2Component } from './sub-heading2/sub-heading2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSideBarComponent,
    SubHeadingComponent,
    SubHeading2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
