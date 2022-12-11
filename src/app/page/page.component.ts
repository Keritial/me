import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "krtl-page",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class PageComponent {}
