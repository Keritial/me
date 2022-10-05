import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, share, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LayoutService {
	constructor(private breakpointObserver: BreakpointObserver) {}
	isLarge$ = this.breakpointObserver.observe("(width >= 600px)").pipe(
		map(it => it.matches),
		tap(it => (this.isLarge = it)),
		share({
			connector: () => new BehaviorSubject(this.isLarge),
		})
	);
	isLarge = false;
	isDark$ = this.breakpointObserver.observe("(prefers-color-scheme: dark)").pipe(
		map(it => it.matches),
		tap(it => (this.isDark = it)),
		share({
			connector: () => new BehaviorSubject(this.isDark),
		})
	);
	isDark = false;
}
