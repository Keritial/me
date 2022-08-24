import { NgModule } from "@angular/core";
import { RouterModule, Routes, TitleStrategy } from "@angular/router";

import { CustomTitleStrategy } from "./common/title-strategy.service";

const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./page/index/index.component").then(c => c.IndexComponent),
	},
	{
		path: "article",
		loadChildren: () =>
			import("./article/article.module").then(m => m.ArticleModule),
	},
	{
		path: "friend",
		loadComponent: () =>
			import("./page/friend/friend.component").then(
				c => c.FriendComponent
			),
	},
	{
		path: "about",
		loadComponent: () =>
			import("./page/about/about.component").then(c => c.AboutComponent),
	},
	{
		path: "**",
		loadComponent: () =>
			import("./error/notfound/notfound.component").then(
				c => c.NotfoundComponent
			),
		title: "Not Found",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
})
export class AppRoutingModule {}
