import { Injectable } from "@angular/core";

import { Article, ArticleId } from "./article.type";

@Injectable({
	providedIn: "root",
})
export class ArticleService {
	constructor() {}
	async getArticles(ids: ArticleId[]): Promise<(Article | null)[]> {
		return ids.map(id =>
			id === "404"
				? null
				: {
						id,
						title: "Your very first article.",
						content:
							"<p>Hello, dynamically injecting HTML into document!</p>",
				  }
		);
	}
}
