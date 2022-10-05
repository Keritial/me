import { NgModule } from "@angular/core";
import { RouterModule, Routes, TitleStrategy } from "@angular/router";

import { ArchiveComponent } from "./article/archive/archive.component";
import { ArticleComponent } from "./article/article/article.component";
import { CustomTitleStrategy } from "./common/title-strategy.service";

const routes: Routes = [
	{
		path: "article",
		children: [
			{
				path: "",
				component: ArchiveComponent,
				data: {
					type: "all",
				},
				title: "Articles",
			},
			{
				path: ":id",
				component: ArticleComponent,
			},
		],
	},
	{
		path: "tool",
		children: [
			{
				path: "uuid",
				loadComponent: () => import("./tool/uuid/uuid.component").then(it => it.UuidComponent),
			},
		],
	},
	{
		path: "",
		loadComponent: () => import("./page/index/index.component").then(it => it.IndexComponent),
	},
	{
		path: "friend",
		loadComponent: () => import("./page/friend/friend.component").then(it => it.FriendComponent),
		title: "Friends",
	},
	{
		path: "about",
		loadComponent: () => import("./page/about/about.component").then(it => it.AboutComponent),
		title: "About",
	},
	{
		path: "**",
		loadComponent: () => import("./error/notfound/notfound.component").then(it => it.NotfoundComponent),
		title: "Not Found",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
})
export class AppRoutingModule {}
