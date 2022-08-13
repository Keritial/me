import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { LayoutService } from "../layout.service";

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
			name: "About",
			icon: "info",
			href: "/about",
		},
	];

	nav() {
		if (!this.layout.isLandscape) {
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
