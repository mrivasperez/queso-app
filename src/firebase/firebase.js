// import three required sections of firebase
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAmfFCM9RKrlIW7SWxMwaxc_J9Bta3nZbg",
  authDomain: "queso-e7bfe.firebaseapp.com",
  databaseURL: "https://queso-e7bfe-default-rtdb.firebaseio.com",
  projectId: "queso-e7bfe",
  storageBucket: "queso-e7bfe.appspot.com",
  messagingSenderId: "531114658733",
  appId: "1:531114658733:web:1e87951f42763491bdef24",
  measurementId: "G-394NXX88EX",
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     //DataSnapshot methods
//     // use forEach to get child of snapshot
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot,
//       });
//     });
//     console.log(expenses);
//   });

// database.ref().on("value", (snapshot) => {
//   let info = snapshot.val();
//   console.log(`${info.name} is a ${info.job.title} at ${info.job.company}`);
// });

// database.ref("expenses").on("value", (snapshot) => {
//   // anytime expenses change print to console
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot,
//     });
//   });

//   console.log(expenses);
// });

// setup expenses with three items (description, note, amount, createdAt)

// database.ref("expenses").push({
//   description: "Toiletries 2",
//   note: "To stay clean",
//   amount: 200,
//   createdAt: 2,
// });

/* */
// database.ref("notes").push({
//   title: "Course Topic",
//   body: "React",
// });

// CRUD OPERATIONS:
// database
//   .ref()
//   .set({
//     name: "Miguel Rivas Perez",
//     stressLevel: 6,
//     age: 20,
//     job: { title: "software developer", company: "Wal Mart" },
//     location: {
//       city: "Seattle",
//       country: "United States",
//     },
//     isSingle: true,
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((error) => {
//     console.log("This failed.", error);
//   });

// //update database without removing it completely, or add a new part

// database
//   // change the attributes
//   .ref("attributes")
//   // set it to the following objject
//   .set({
//     height: "5 feet 11 inches",
//     weight: "180lbs",
//   })
//   //handle the promise
//   .then(() => {
//     // if successful
//     console.log("Saved");
//   })
//   .catch((error) => {
//     //if failed
//     console.log("error", error);
//   });

// // remove specific value from the database ------------------------------------
// database
//   .ref("isSingle") // data you want to remove
//   .remove() // remove
//   // handle the promise
//   .then(() => console.log("removed")) // if successful
//   .catch((e) => console.log("error", e)); // if failed

// /*
//   another thing you can do is remove it by using set and setting it to null
//   */
// // Update ------------------------------------

// database
//   .ref()
//   .update({
//     name: "August Muneca",
//     attributes: null,
//     "location/city": "Tacoma", // you must use forward slash if you are updating a value of something in an object
//   })
//   .then(() => console.log("Updated")) // if successful
//   .catch((e) => console.log("error", e)); // if failed

// // change stresslevel to 9
// // change job.company to amazon
// // change city to Houston

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Houston",
//   })
//   .then(() => console.log("updated"))
//   .catch((e) => console.log("error", e));

// // Fetching data from firebase ------------------------------------
// database // print out location.city
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => console.log("error fetching data", e));

// database.ref().on("value", (snapshot) => {
//   let info = snapshot.val();
//   console.log(`${info.name} is a ${info.job.title} at ${info.job.company}`);
// });

// database.ref().update({ name: "Miguel" });
