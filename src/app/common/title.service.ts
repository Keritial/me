import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({
	providedIn: "root",
})
export class TitleService {
	private props: { [x: string]: string } = {};
	constructor(private title: Title) {}
	render(): string {
		return `${this.props["title"]}`;
	}
	update(): void {
		this.title.setTitle(this.render());
	}
	set(title: string): void {
		this.props["title"] = title;
	}
}
