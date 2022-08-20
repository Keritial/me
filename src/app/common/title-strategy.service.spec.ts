import { TestBed } from "@angular/core/testing";

import { TitleStrategyService } from "./title-strategy.service";

describe("TitleStrategyService", () => {
	let service: TitleStrategyService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TitleStrategyService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
