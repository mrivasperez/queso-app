import database from "../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    //create default
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    //create variable for expense
    const expense = { description, note, amount, createdAt };
    // access firebase and push data
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        // dispatch the action for redux
        dispatch(
          addExpense({
            // get the id from the reference
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    console.log(id);
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then((snapshot) => {
        console.log(snapshot);
        // let id = snapshot.key;
        dispatch(removeExpense({ id }));
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => dispatch(editExpense(id, updates)));
  };
};

// Manipulates redux store
// SET_EXPENSES from FIREBASE DB
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  // fetch all expense data from database
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then((snapshot) => {
        // create empty array for expenses
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          // parse data into an array
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        // dispatch SET_EXPENSES so that the data changes
        dispatch(setExpenses(expenses));
      });
  };
};
