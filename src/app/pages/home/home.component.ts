import { Component, OnInit, signal, computed } from "@angular/core";
import {
  SignalTutsComponent,
  ComponentsTutsComponent,
} from "app/shared/components";

@Component({
  templateUrl: "./home.component.html",
  imports: [SignalTutsComponent, ComponentsTutsComponent],
})
export class HomePageComponent implements OnInit {
  name = signal("Surendar");
  name_uppercase = computed(() => this.name().toUpperCase());
  ngOnInit() {
    const unsubscribe = setInterval(() => {
      this.name.update((previous_value) => `${previous_value} Yama`);
      console.log("interval...");
      console.log(unsubscribe);
      clearInterval(unsubscribe);
    }, 3000);
  }
}
