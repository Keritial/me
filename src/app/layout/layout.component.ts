import { CommonModule } from "@angular/common";
import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	ViewChild,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { filter, merge, takeUntil } from "rxjs";

import { LayoutService } from "../common/layout.service";

@Component({
	selector: "krtl-layout",
	templateUrl: "./layout.component.html",
	styleUrls: ["./layout.component.scss"],
	standalone: true,
	imports: [
		CommonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		RouterModule,
	],
})
export class LayoutComponent implements OnInit, OnDestroy {
	private destory$ = new EventEmitter();
	protected navigate$ = new EventEmitter<string>();
	@ViewChild("drawer")
	private drawer?: MatDrawer;

	constructor(protected layout: LayoutService, private router: Router) {}
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

	ngOnDestroy(): void {
		this.destory$.emit();
	}

	ngOnInit(): void {
		merge(
			this.router.events.pipe(filter(it => it instanceof NavigationEnd)),
			this.navigate$.pipe(filter(url => url === this.router.url))
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
