import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LayoutComponent } from "./layout/layout.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [LayoutComponent],
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
