describe("Divisible", () => {
	
	it("should return true,when a number is divisible by both of the provided divisors", () =>{
		expect(isDivisible(4,2,4)).toBe(true)
	})

	it("should return false,when the number is smaller then both the provided divisors", () =>{
		expect(isDivisible(1,2,3)).toBe(false)
	})

	it("should return false,when the number is not divisible by only one of the provided divisors", () =>{
		expect(isDivisible(2,2,3)).toBe(false)
	})

	it("should return false,when the number is not divisible by any of the provided divisors", () =>{
		expect(isDivisible(3,2,4)).toBe(false)
	})
})