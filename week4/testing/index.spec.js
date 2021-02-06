describe("The function sum() used in the Calculator", () => {
  it("should be a function", () => {
    expect(typeof sum).toBe("function");
  });
  it("should trow an error if no argument is provided", () => {
    expect(sum).toThrow(new Error("No parameter passed"));
  });
  it("should return 0 if empty array is passed", () => {
    expect(sum([])).toEqual(0);
  });
  it("should return a number if invoked with correct arguments", () => {
    expect(typeof sum([1, 2])).toBe("number");
  });
});
