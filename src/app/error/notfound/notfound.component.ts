import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { map } from "rxjs";
import { MatButtonModule } from "@angular/material/button";

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
