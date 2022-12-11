import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class PageService {
	constructor(private http: HttpClient) {}
	private cache = new Map<string, Page>();

	fetch(url: string): Promise<Page> {
		return new Promise((next, error) => {
			this.http.get<Page>(url).subscribe({ next, error });
		});
	}
	get(url: string): Promise<Page> {
		if (this.cache.has(url)) {
			return Promise.resolve(!this.cache.get(url));
		}
		return this.fetch(url);
	}
	async prepare(url: string): Promise<boolean> {
		return !!(await this.get(url));
	}
}

export interface Page {}
