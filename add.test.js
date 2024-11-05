const { add } = require("./add.js");

test("adds 5 + 3 to equal 8", () => {
    const fnResult = add(5, 3);
    const expectedResult = 8;
    expect(fnResult).toBe(expectedResult);
});

