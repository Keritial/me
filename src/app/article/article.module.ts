import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NotfoundComponent } from "../error/notfound/notfound.component";
import { ArchiveComponent } from "./archive/archive.component";
import { ArticleComponent } from "./article/article.component";
import { ArticleRoutingModule } from "./article-routing.module";

@NgModule({
	declarations: [ArchiveComponent, ArticleComponent],
	imports: [CommonModule, ArticleRoutingModule, NotfoundComponent],
})
export class ArticleModule {}
