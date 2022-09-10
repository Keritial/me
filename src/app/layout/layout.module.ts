import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";

import { LayoutComponent } from "./layout/layout.component";
import { NavlistComponent } from "./navlist/navlist.component";

@NgModule({
	declarations: [LayoutComponent, NavlistComponent],
	imports: [
		CommonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		RouterModule,
	],
	exports: [LayoutComponent],
})
export class LayoutModule {}
