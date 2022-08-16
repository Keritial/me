import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "krtl-about",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
