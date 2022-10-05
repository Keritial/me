/* eslint-disable no-console */
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { enableGoogleAnalytics } from "./util/GoogleAnalytics";

if (environment.production) {
	enableProdMode();
	enableGoogleAnalytics();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(it => console.error(it));

addEventListener("unhandledrejection", it => console.error(it.reason));
