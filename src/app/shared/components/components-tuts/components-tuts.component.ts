import {
  booleanAttribute,
  Component,
  input,
  output,
  numberAttribute,
  model,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';

import { AppHostElementComponent, AppLifeCycleComponent } from './components';

@Component({
  selector: 'app-custom-card',
  template: `
    <div class="bg-red-300 text-red-950 flex flex-col p-10 w-fit">
      <h1>Customed Card Component</h1>
      <ng-content select="card-title"></ng-content>
      <ng-content select="card-body"></ng-content>
      <ng-content select="card-footer"></ng-content>
    </div>
  `,
})
class AppCustomComponent {}

@Component({
  selector: 'app-vcr-component',
  template: `
    <div
      class="bg-green-300 p-6 w-fit hover:opacity-80 cursor-pointer"
      (click)="vrcPanelClosed.emit('vrc-panel-close')"
    >
      VCRComponent
    </div>
  `,
})
class VCRComponent {
  vrcPanelClosed = output<string>();
}

@Component({
  selector: 'app-components-tuts',
  templateUrl: './components-tuts.component.html',
  imports: [AppCustomComponent, AppHostElementComponent, AppLifeCycleComponent],
})
export class ComponentsTutsComponent {
  VRCComponentRef: ComponentRef<VCRComponent> | undefined;
  value = input('', {
    alias: 'name',
    transform: (value: string | undefined): string =>
      value?.toUpperCase() ?? '',
  });

  width = input(0, {
    transform: numberAttribute,
  });

  isAuth = input(false, { transform: booleanAttribute });
  count = model(0);

  panelClosed = output<string>();

  constructor(public ViewContainer: ViewContainerRef) {
    this.VRCComponentRef = this.ViewContainer.createComponent(VCRComponent);
    this.VRCComponentRef.instance.vrcPanelClosed.subscribe((value: string) => {
      console.log(value);
    });
  }

  increment() {
    this.count.update((previousValue: number) => previousValue + 1);
    this.panelClosed.emit('test');
  }
}
