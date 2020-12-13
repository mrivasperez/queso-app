//if resolve it went well, if reject there is an error

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // you can only have one resolve - the other one (if it's there, would never show up)
    // resolve("This is my resolved date");
    reject("something is wrong");
  }, 1500);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error", error);
  });

console.log("after");
