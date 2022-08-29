import { Component, OnInit } from "@angular/core";

import { Logger } from "./common/logger.service";

@Component({
	selector: "krtl-app",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {}
}
