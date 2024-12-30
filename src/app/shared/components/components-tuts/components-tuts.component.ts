import {
  booleanAttribute,
  Component,
  input,
  numberAttribute,
} from "@angular/core";

@Component({
  selector: "app-components-tuts",
  templateUrl: "./components-tuts.component.html",
})
export class ComponentsTutsComponent {
  value = input("", {
    alias: "name",
    transform: (value: string | undefined): string =>
      value?.toUpperCase() ?? "",
  });

  width = input(0, {
    transform: numberAttribute,
  });

  isAuth = input(false, { transform: booleanAttribute });
}
