import { Component, EventEmitter, OnInit, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { NavigationEnd, Router } from "@angular/router";
import { filter, merge, takeUntil } from "rxjs";

import { LayoutService } from "./common/layout.service";

@Component({
	selector: "krtl-app",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	private destory$ = new EventEmitter();
	protected navigate$ = new EventEmitter<string>();
	@ViewChild("drawer")
	private drawer?: MatDrawer;

	protected links: Link[] = [
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

	constructor(protected layout: LayoutService, private router: Router) {}

	ngOnDestroy(): void {
		this.destory$.emit();
	}

	ngOnInit(): void {
		merge(
			this.router.events.pipe(filter(it => it instanceof NavigationEnd)),
			this.navigate$.pipe(filter(it => it === this.router.url))
		)
			.pipe(
				takeUntil(this.destory$),
				filter(() => !this.layout.isLarge)
			)
			.subscribe(() => this.drawer?.close());
	}
}

export interface Link {
	icon?: string;
	color?: string;
	href?: string;
	name?: string;
	isLink?: boolean;
}
