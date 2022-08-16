import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, takeUntil } from "rxjs";

import { ArticleService } from "../article.service";
import { Article, ArticleId } from "../article.type";

@Component({
	selector: "krtl-article",
	templateUrl: "./article.component.html",
	styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit, OnDestroy {
	constructor(
		private route: ActivatedRoute,
		private articleService: ArticleService
	) {}
	destory$ = new EventEmitter();

	id$ = this.route.params.pipe(
		takeUntil(this.destory$),
		map(v => (v["id"] || "") as ArticleId)
	);
	article: Article | null | undefined;

	ngOnInit(): void {
		this.id$.subscribe(v => {
			this.article = undefined;
			this.articleService.getArticle(v).then(v => (this.article = v));
		});
	}
	ngOnDestroy(): void {
		this.destory$.emit();
	}
}
