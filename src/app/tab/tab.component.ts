import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList
} from "@angular/core";
import { HelloComponent } from "../hello/hello.component";
import { DynamicComponent } from "ng-dynamic-component";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.css"]
})
export class TabComponent implements OnInit {
  @ViewChildren(DynamicComponent) panes!: QueryList<DynamicComponent>;
  @Input()
  tabs: Array<any>;
  toolbar: Array<any>;
  constructor() {}

  ngOnInit() {}
  setToolbar(component) {
    debugger;
    this.toolbar = [];
    for (var p in component) {
      var meta = Reflect.getMetadata("design:type", component, p);
      if (meta) {
        meta.action = (act => () => component[act]())(p);
        this.toolbar.push(meta);
      }
    }
  }
  onTabSelect(e) {
    debugger;
    this.setToolbar(this.panes.toArray()[e.index].componentRef._component);
  }
  getTitle(t) {
    return (Reflect.getMetadata("design:type", t.component)||{}).title;
  }
}
