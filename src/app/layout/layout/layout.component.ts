import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

import { LayoutService } from "../../common/layout.service";

@Component({
	selector: "krtl-layout",
	templateUrl: "./layout.component.html",
	styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
	constructor(public layout: LayoutService) {}
	@ViewChild("drawer")
	drawer!: MatSidenav;

	links: Link[] = [
		{
			name: "Home",
			icon: "home",
			href: "/",
		},
		{
			name: "Articles",
			icon: "article",
			href: "/article",
		},
		{
			name: "Friends",
			icon: "people",
			href: "/friend",
		},

		{
			name: "About",
			icon: "info",
			href: "/about",
		},
	];

	nav(): void {
		if (!this.layout.isLarge) {
			this.drawer.toggle();
		}
	}

	ngOnInit(): void {}
}

export interface Link {
	icon?: string;
	color?: string;
	href?: string;
	name?: string;
	isLink?: boolean;
}
