const add = (a, b) => a + b;
const generategreeting = (name = "Anon") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(2, 2);
  expect(result).toBe(4);
});

test("should greet by name", () => {
  const result = generategreeting("Miguel");
  expect(result).toBe("Hello Miguel");
});

test("should greet by anon", () => {
  const result = generategreeting();
  expect(result).toBe("Hello Anon");
});
