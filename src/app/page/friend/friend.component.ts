import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "krtl-friend",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./friend.component.html",
	styleUrls: ["./friend.component.scss"],
})
export class FriendComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
