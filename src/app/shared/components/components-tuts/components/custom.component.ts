import { Component } from "@angular/core";

@Component({
  selector: "app-custom-card",
  template: ` <div>
    <h1>Custom card.</h1>
    <ng-content />
  </div>`,
})
export class AppCustomComponent {}
