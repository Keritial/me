import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { Logger } from "./logger.service";

@Injectable({
	providedIn: "root",
})
export class TitleManager {
	private title = "";
	constructor(private titleRef: Title, private logger: Logger) {}
	private update(): void {
		if (this.title) {
			this.titleRef.setTitle(`${this.title} | Keritial`);
		} else {
			this.titleRef.setTitle("Keritial");
		}
	}
	setTitle(title: string): void {
		this.logger.log(title);
		this.title = title;
		this.update();
	}
}
