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

import {
  AppHostElementComponent,
  AppLifeCycleComponent,
  AppCustomComponent,
} from './components';

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
  imports: [AppHostElementComponent, AppLifeCycleComponent, AppCustomComponent],
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
