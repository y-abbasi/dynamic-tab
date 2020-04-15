import { Component, OnInit } from "@angular/core";
import { Decorate } from "../decorator";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
@Decorate({title:"تاریخچه"})
export class HistoryComponent implements OnInit {
  name: string;
  constructor() {}

  ngOnInit() {}

  @Decorate({ title: "save", icon: "lock" })
  save() {
    alert(this.name);
  }
  @Decorate({ title: "save & close", icon: "filter" })
  saveAndClose() {}
}
