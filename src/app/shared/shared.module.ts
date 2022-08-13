import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { I18nModule } from "../i18n/i18n.module";
import { NavDirective } from "./nav.directive";

@NgModule({
	declarations: [NavDirective],
	imports: [CommonModule],
	exports: [I18nModule],
})
export class SharedModule {}
