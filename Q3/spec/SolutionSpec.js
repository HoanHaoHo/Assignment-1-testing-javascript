describe("Solution", () => {
	
	it("should returns itself, when there is only 1 characters in the string", () =>{
		expect(solution("A")).toBe("A")
	})

	it("should returns the string, reversed, when there are multiple characters in the string", () =>{
		expect(solution("abcdef")).toBe("fedcba")
	})
	
	it("should returns empty string, when there are no characters in the string", () =>{
		expect(solution("")).toBe("")
	})
})