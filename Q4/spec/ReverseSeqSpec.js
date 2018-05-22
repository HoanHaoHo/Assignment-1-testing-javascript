describe("Reverse", () => {
	
	it("should reverse number in array, when there are multiple numbers in an array", () =>{
		expect(reverseSeq(5)).toBe([5,4,3,2,1])
	})

	it("should return empty array, when input number less than 0", () =>{
		expect(reverseSeq(-1)).toBe([])
	})

	it("should return empty array, when input number equal 0", () =>{
		expect(reverseSeq(0)).toBe([])
	})
})