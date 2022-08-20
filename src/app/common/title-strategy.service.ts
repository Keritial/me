import { Injectable } from "@angular/core";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

import { TitleService } from "./title.service";

@Injectable({
	providedIn: "root",
})
export class CustomTitleStrategy extends TitleStrategy {
	updateTitle(snapshot: RouterStateSnapshot): void {
		this.title.set(snapshot)
	}
	constructor(private title: TitleService) {
		super();
	}
}
