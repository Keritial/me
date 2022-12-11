import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes, TitleStrategy } from "@angular/router";

import { CustomTitleStrategy } from "./common/title-strategy.service";
import { PageGuard } from "./page/page.guard";

const routes: Routes = [
	createPage("", ""),
	createPage("friend", ""),
	createPage("about", "pass"),
	{
		path: "article",
		loadChildren: () => import("./article/article.module").then(it => it.ArticleModule),
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
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
	exports: [RouterModule],
	providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
})
export class AppRoutingModule {}

function createPage(path: string, url: string): Route {
	return {
		path,
		loadComponent: () => import("./page/page.component").then(it => it.PageComponent),
		data: {
			url,
		},
		canActivate: [PageGuard],
	};
}
