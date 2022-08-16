import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, share, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LayoutService {
	constructor(private breakpointObserver: BreakpointObserver) {}
	isLandscape$ = this.breakpointObserver
		.observe("(orientation: landscape)")
		.pipe(
			map(v => v.matches),
			tap(v => (this.isLandscape = v)),
			share({
				connector: () => new BehaviorSubject(false),
			})
		);
	isLandscape = false;
	isDark$ = this.breakpointObserver
		.observe("(prefers-color-scheme: dark)")
		.pipe(
			map(v => v.matches),
			tap(v => (this.isDark = v)),
			share({
				connector: () => new BehaviorSubject(false),
			})
		);
	isDark = false;
}
