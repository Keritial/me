import { Injectable } from "@angular/core";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

import { TitleManager } from "./title.service";

@Injectable({
	providedIn: "root",
})
export class CustomTitleStrategy extends TitleStrategy {
	updateTitle(snapshot: RouterStateSnapshot): void {
		this.title.setTitle(this.buildTitle(snapshot) ?? "");
	}
	constructor(private title: TitleManager) {
		super();
	}
}
