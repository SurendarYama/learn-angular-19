import {
  booleanAttribute,
  Component,
  input,
  output,
  numberAttribute,
  model,
  OutputEmitterRef,
  OnInit,
  ViewContainerRef,
  ComponentRef,
} from "@angular/core";

@Component({
  selector: "app-signal-tuts",
  template: `
    <div (click)="vrcPanelClosed.emit('vrc-panel-close')">VCRComponent</div>
  `,
})
export class vCRComponent {
  vrcPanelClosed = output<string>();
}

@Component({
  selector: "app-components-tuts",
  templateUrl: "./components-tuts.component.html",
})
export class ComponentsTutsComponent implements OnInit {
  VRCComponentRef: ComponentRef<vCRComponent> | undefined;
  value = input("", {
    alias: "name",
    transform: (value: string | undefined): string =>
      value?.toUpperCase() ?? "",
  });

  width = input(0, {
    transform: numberAttribute,
  });

  isAuth = input(false, { transform: booleanAttribute });
  count = model(0);

  panelClosed = output<string>();

  constructor(public ViewContainer: ViewContainerRef) {}

  increment() {
    this.count.update((previousValue: number) => previousValue + 1);
    this.panelClosed.emit("test");
  }

  ngOnInit() {
    console.log("init");
    this.VRCComponentRef = this.ViewContainer.createComponent(vCRComponent);
    this.VRCComponentRef.instance.vrcPanelClosed.subscribe((value: string) => {
      console.log(value);
    });
  }
}
