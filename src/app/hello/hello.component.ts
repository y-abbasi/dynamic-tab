import { Component, OnInit } from "@angular/core";
import { Decorate } from "../decorator";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
@Decorate({title:"تب اول"})
export class HelloComponent implements OnInit {
  actions: Array<any>;
  name: string;
  constructor() {}

  ngOnInit() {}
  @Decorate({ title: "save", icon: "save" })
  save() {
    alert(this.name);
  }
  @Decorate({ title: "save & close", icon: "delete" })
  saveAndClose() {}
}
