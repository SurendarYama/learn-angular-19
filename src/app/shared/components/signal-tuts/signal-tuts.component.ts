import { Component, signal, effect, OnInit } from "@angular/core";

@Component({
  selector: "app-signal-tuts",
  templateUrl: "./signal-tuts.component.html",
  styleUrl: "./signal-tuts.component.css",
})
export class SignalTutsComponent implements OnInit {
  title = signal("Signal Tuts");
  constructor() {
    const unsubscribe_effect = effect(() => {
      console.log("SignalTutsComponent effect...", this.title());
    });

    const handler = () => {
      unsubscribe_effect.destroy();
      clearTimeout(unsubscribe);
    };
    const unsubscribe = setTimeout(handler, 10000);
  }

  ngOnInit() {
    const unsubscribe = setInterval(() => {
      this.title.set("Signal Tuts Change...." + new Date().getTime());
      // clearInterval(unsubscribe);
    }, 3000);
  }
}
