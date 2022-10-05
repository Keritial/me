import { Injectable } from "@angular/core";

import { Article, ArticleId } from "./article.type";

const ARTICLES: Article[] = [
	{
		id: "test",
		title: "test title",
		content:
			"test content: " +
			new Date().toString() +
			"<br>" +
			Array.from({ length: 100 }, () => Math.random() * Number.MAX_SAFE_INTEGER)
				.map(it => it.toString(16))
				.join(" "),
		alias: ["测试", "testing"],
		date: new Date(),
		lastModified: new Date(Date.now() + Math.random() * 114514),
	},
	{
		id: "hello-world",
		title: "你好世界",
		content:
			"<p>this is your very first blog(?</p><p>Everything you see is hard-written in <code>article.service.ts</code>, I have to implement a lot of things😭",
		alias: ["i-have-no-idea", "lttstore.com"],
		date: new Date(),
		lastModified: new Date(Date.now() + Math.random() * 114514),
	},
	/*{
		id: "cq",
		title: "cq title",
		content:
			"<p>诶嘿，</p>" +
			"<p>我的CQ🥵🥵🥵，&lt;此处省去别在这理发店言论&gt;🤤🤤🤤</p>".repeat(
				64
			) +
			"<p><del>Testing purpose only (for sure</del></p>",
		alias: ["草q", "cqing"],
		date: new Date(),
		lastModified: new Date(Date.now() + Math.random() * 114514),
	},*/
];

@Injectable({
	providedIn: "root",
})
export class ArticleService {
	constructor() {}
	// All below is temporary placeholder
	async getArticles(ids: ArticleId[]): Promise<(Article | null)[]> {
		return ids.map(id => ARTICLES.find(it => it.id === id || it.alias?.includes(id)) || null);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getArticlesList(page: number): Promise<Article[]> {
		return ARTICLES;
	}
}
