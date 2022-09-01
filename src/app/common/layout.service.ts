import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, share, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LayoutService {
	constructor(private breakpointObserver: BreakpointObserver) {}
	isLarge$ = this.breakpointObserver.observe("(width >= 600px)").pipe(
		map(v => v.matches),
		tap(v => (this.isLarge = v)),
		share({
			connector: () => new BehaviorSubject(this.isLarge),
		})
	);
	isLarge = false;
	isDark$ = this.breakpointObserver
		.observe("(prefers-color-scheme: dark)")
		.pipe(
			map(v => v.matches),
			tap(v => (this.isDark = v)),
			share({
				connector: () => new BehaviorSubject(this.isDark),
			})
		);
	isDark = false;
}
