import { Directive, OnInit } from "@angular/core";

@Directive({
	selector: "[krtlNav]",
})
export class NavDirective implements OnInit {
	constructor() {}
	ngOnInit(): void {
		throw new Error("Method not implemented.");
	}
}
