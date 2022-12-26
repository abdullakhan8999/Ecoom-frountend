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

function createUSer(user, CallBack) {
  setTimeout(() => {
    users.push(user);
    CallBack();
  }, 2000);
}

createUSer(
  {
    name: "Abdul Raheem",
    age: 25,
  },
  getUser
);

// basket = ["Samsung", "laptop", "shoes"];

// createOrder(basket,()=>{
//    confirmCheckout(()=>{

//    })
// })
