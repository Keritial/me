import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ArchiveComponent } from "./archive/archive.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
	{
		path: "",
		component: ArchiveComponent,
		data: {
			type: "all",
		},
	},
	{
		path: ":id",
		component: ArticleComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleRoutingModule {}
