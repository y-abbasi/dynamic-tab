import { Component } from "@angular/core";
import { HelloComponent } from "./hello/hello.component";
import { HistoryComponent } from "./history/history.component";

@Component({
  selector: "my-app",
  template: `
    <app-tab [tabs]="tabs"></app-tab>
  `,
  styles: [
    `
      kendo-tabstrip p {
        margin: 0;
        padding: 8px;
      }
    `
  ]
})
export class AppComponent {
  tabs: Array<any>;

  ngOnInit() {
    this.tabs = [{ component: HelloComponent }, { component: HistoryComponent }];
  }
}
