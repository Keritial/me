import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	ViewChild,
} from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { NavigationEnd, Router } from "@angular/router";
import { filter, takeUntil } from "rxjs";

import { LayoutService } from "../../common/layout.service";

@Component({
	selector: "krtl-layout",
	templateUrl: "./layout.component.html",
	styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, OnDestroy {
	destory$ = new EventEmitter();
	@ViewChild("drawer")
	drawer?: MatDrawer;

	constructor(public layout: LayoutService, private router: Router) {}

	ngOnDestroy(): void {
		this.destory$.emit();
	}

	ngOnInit(): void {
		this.router.events
			.pipe(
				takeUntil(this.destory$),
				filter(() => this.layout.isLarge)
			)
			.subscribe(event => {
				if (event instanceof NavigationEnd) {
					this.drawer?.close();
				}
			});
	}
}
