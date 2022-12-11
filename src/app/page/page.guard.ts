import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { PageService } from "./page.service";

@Injectable({
	providedIn: "root",
})
export class PageGuard implements CanActivate {
	constructor(private pageService: PageService) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const url = route.data["url"] as string;
		return this.pageService.prepare(url);
	}
}
