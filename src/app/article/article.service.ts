import { Injectable } from "@angular/core";

import { Article, ArticleId } from "./article.type";

@Injectable({
	providedIn: "root",
})
export class ArticleService {
	constructor() {}
	async getArticle(id: ArticleId): Promise<Article | null> {
		return id === "test404"
			? null
			: {
					id,
					title: "Your very first article.",
					content:
						"<p>Hello, dynamically injecting HTML into document!</p>",
			  };
	}
}
