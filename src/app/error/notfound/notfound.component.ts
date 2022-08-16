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

	path$ = this.route.url.pipe(map(v => "/" + v.map(v => v.path).join("/")));

	ngOnInit(): void {}
}
