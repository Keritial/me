import { TestBed } from "@angular/core/testing";

import { PageGuard } from "./page.guard";

describe("PageGuard", () => {
	let guard: PageGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(PageGuard);
	});

	it("should be created", () => {
		expect(guard).toBeTruthy();
	});
});
