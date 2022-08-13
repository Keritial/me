import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//import { ServiceWorkerModule } from "@angular/service-worker";
//import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		/*ServiceWorkerModule.register("ngsw-worker.js", {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: "registerWhenStable:30000",
		}),*/
		LayoutModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
