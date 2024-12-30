import { Routes } from "@angular/router";
import { HomePageComponent, NotFoundPageComponent } from "./pages";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];
