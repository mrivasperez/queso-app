import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Remove expenses action object", () => {
  const action = removeExpense({ id: "asdf123" });
  // when testing an object, you must use toEqual so that it check for values
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "asdf123",
  });
});

test("Editing expense", () => {
  const action = editExpense("abc123", { age: 24 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: { age: 24 },
  });
});

test("Adding expense with provided values", () => {
  const expenseData = addExpense({
    description: "expense",
    note: "note",
    amount: 25,
    createdAt: 23,
  });
  expect(expenseData).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id,
      description: "expense",
      note: "note",
      amount: 25,
      createdAt: 23,
    },
  });
});

test("setup add expense action object with default values", () => {});
