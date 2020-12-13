// import three required sections of firebase
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

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

database
  .ref()
  .set({
    name: "Miguel Rivas Perez",
    age: 20,
    location: {
      city: "Seattle",
      country: "United States",
    },
    isSingle: true,
  })
  .then(() => {
    console.log("Data is saved");
  })
  .catch((error) => {
    console.log("This failed.", error);
  });

//update database without removing it completely, or add a new part

database
  // change the attributes
  .ref("attributes")
  // set it to the following objject
  .set({
    height: "5 feet 11 inches",
    weight: "180lbs",
  })
  //handle the promise
  .then(() => {
    // if successful
    console.log("Saved");
  })
  .catch((error) => {
    //if failed
    console.log("error", error);
  });

// remove specific value from the database
database
  .ref("isSingle") // data you want to remove
  .remove() // remove
  // handle the promise
  .then(() => console.log("removed")) // if successful
  .catch((e) => console.log("error", e)); //if failed
