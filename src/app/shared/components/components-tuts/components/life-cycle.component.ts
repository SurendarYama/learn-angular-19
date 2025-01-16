import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-life-cycle",
  template: ` <div class="bg-yellow-300 p-6 w-fit">LifeCycleComponent</div> `,
})
export class AppLifeCycleComponent implements OnInit, OnChanges {
  constructor() {
    console.log("Component Creation...");
  }
  ngOnInit() {
    console.log("Component Initialization...");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("Component Change...", changes);
  }
}
