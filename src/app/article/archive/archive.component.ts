import { Component, OnInit } from "@angular/core";

import { ArticleService } from "../article.service";
import { Article } from "../article.type";
@Component({
	selector: "krtl-archive",
	templateUrl: "./archive.component.html",
	styleUrls: ["./archive.component.scss"],
})
export class ArchiveComponent implements OnInit {
	constructor(public articleService: ArticleService) {}
	articles: Article[] = [];

	ngOnInit(): void {
		this.articleService.getArticlesList(0).then(it => (this.articles = it));
	}
}
