import { regions } from "../src";

describe("regions", () => {
	it("should return an array containing", async () => {
		const result = await regions();

		expect(result.length).toBe(17);
		expect(Array.isArray(result)).toBe(true);
	});
});
