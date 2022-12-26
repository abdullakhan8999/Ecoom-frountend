const div = document.getElementById("header");
let users = [
  { name: "Abdulla", age: 23 },
  { name: "Abdul Rahman", age: 23 },
];

function getUser() {
  setTimeout(() => {
    let result = "";
    users.forEach((user) => {
      result = result + `<li>${user.name}</li>`;
    });

    div.innerHTML = result;
  }, 1000);
}

function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      const error = 0;
      if (!error) {
        resolve();
      } else {
        reject("Error something is wrong");
      }
    }, 2000);
  });
}

createUser({
  name: "Abdul Raheem",
  age: 25,
})
  .then(getUser)
  .catch((error) => console.log(error));
//   .finally(console.log("Finally is ran  method"));

// basket = ["Samsung", "laptop", "shoes"];
// createOrder(basket, () => {
//   confirmCheckout(() => {});
// });

/*
append
resole
reject
then
catch
*/

async function userOperation() {
  await createUser({
    name: "Abdulla",
    age: 24,
  });
  getUser();
}
userOperation();
