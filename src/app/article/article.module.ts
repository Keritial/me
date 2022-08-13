import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticleRoutingModule } from "./article-routing.module";
import { ArchiveComponent } from "./archive/archive.component";
import { ArticleComponent } from "./article/article.component";
import { NotfoundComponent } from "../error/notfound/notfound.component";

@NgModule({
	declarations: [ArchiveComponent, ArticleComponent],
	imports: [CommonModule, ArticleRoutingModule, NotfoundComponent],
})
export class ArticleModule {}
