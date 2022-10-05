import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { map } from "rxjs";

@Component({
	selector: "krtl-notfound",
	standalone: true,
	imports: [CommonModule, RouterModule, MatButtonModule],
	templateUrl: "./notfound.component.html",
	styleUrls: ["./notfound.component.scss"],
})
export class NotfoundComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}

	protected path$ = this.route.url.pipe(map(it => "/" + it.map(it => it.path).join("/")));

	ngOnInit(): void {}
}
