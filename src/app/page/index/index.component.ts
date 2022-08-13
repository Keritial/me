/**
 *
 * Temporary component for placeholder purposes only.
 * This will be removed later.
 *
 */
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-index",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./index.component.html",
	styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
