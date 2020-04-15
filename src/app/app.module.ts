import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@progress/kendo-angular-layout";

import "hammerjs";

import { AppComponent } from "./app.component";
import { TabComponent } from "./tab/tab.component";
import { DynamicComponentModule } from "ng-dynamic-component";
import { HelloComponent } from './hello/hello.component';
import { ToolBarModule } from "@progress/kendo-angular-toolbar";
import { FormsModule } from "@angular/forms";
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, DynamicComponentModule, ToolBarModule, FormsModule],
  declarations: [AppComponent, TabComponent, HelloComponent, HistoryComponent],
  bootstrap: [AppComponent],
  entryComponents:[HelloComponent, HistoryComponent]
})
export class AppModule {}
