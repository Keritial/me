import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({
	providedIn: "root",
})
export class TitleManager {
	private title = "";
	constructor(private titleRef: Title) {}
	private update(): void {
		this.titleRef.setTitle(this.render());
	}
	private render(): string {
		return this.title ? `${this.title} | Keritial` : "Keritial";
	}
	set(title: string): void {
		this.title = title;
		this.update();
	}
	get(): string {
		return this.title;
	}
}
