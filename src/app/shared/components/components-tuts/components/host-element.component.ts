import { Component, signal } from "@angular/core";

@Component({
  selector: "app-host-element",
  template: `
    <div class="bg-blue-300 p-6 w-fit hover:opacity-80 cursor-pointer">
      Host Element Component
    </div>
  `,
  host: {
    role: "slider",
    "[attr.aria-valuenow]": "value",
    "[class.active]": "isActive()",
    "[tabIndex]": "disabled ? -1 : 0",
    "(keydown)": "updateValue($event)",
  },
})
export class AppHostElementComponent {
  value: number = 0;
  disabled: boolean = false;
  isActive = signal(false);
  updateValue(event: KeyboardEvent) {
    /* ... */
  }
}
