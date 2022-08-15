import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FriendComponent } from "./friend.component";

describe("FriendComponent", () => {
	let component: FriendComponent;
	let fixture: ComponentFixture<FriendsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FriendComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FriendComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
