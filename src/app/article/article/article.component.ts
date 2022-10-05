import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { map, takeUntil } from "rxjs";
import { NotfoundComponent } from "src/app/error/notfound/notfound.component";

import { ArticleService } from "../article.service";
import { Article, ArticleId } from "../article.type";

@Component({
	selector: "krtl-article",
	templateUrl: "./article.component.html",
	styleUrls: ["./article.component.scss"],
	standalone: true,
	imports: [CommonModule, RouterModule, NotfoundComponent],
})
export class ArticleComponent implements OnInit, OnDestroy {
	constructor(private route: ActivatedRoute, private articleService: ArticleService) {}
	private destory$ = new EventEmitter();

	protected id$ = this.route.params.pipe(
		takeUntil(this.destory$),
		map(v => (v["id"] || "") as ArticleId)
	);
	protected article: Article | null | undefined;

	ngOnInit(): void {
		this.id$.subscribe(v => {
			this.article = undefined;
			this.articleService.getArticles([v]).then(v => (this.article = v[0]));
		});
	}
	ngOnDestroy(): void {
		this.destory$.emit();
	}
}
