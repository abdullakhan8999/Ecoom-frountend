const getElementById = (id) => {
  return document.getElementById(id);
};

const write = (content) => {
  document.write(content);
};

const para = getElementById("para");

// para.innerHTML="Patan AbdullaKhan"

// function myFunction() {
//   document.getElementById("para").innerHTML = "Patan AbdullaKhan";
// }

// function FontSize() {
//   document.getElementById("para").style.FontSize = "34px";
// }

// para.write = "PATAN ABDULLA KHAN";

// para.innerHTML = "PATAN ABDULLA KHAN";

// button onclick

// const onclickBtn = () => {
//   para.style.fontSize = "34px";
// };
// const docuWrite = () => {
//   document.write("Hello Abdulla Khan");
// };

// const windowAlert = () => {
//   // Two way to access the code
//   window.alert("Login Successfully");
//   alert("Login Successfully");
// };

const ConsoleLog = () => {
  console.log(5 + 6);
  para.innerHTML = "Check the Console";
};
// ConsoleLog();

const printView = () => {
  return window.print();
};

const details = () => {
  const para = getElementById("demo2");
  para.innerHTML =
    "<tr><td>Age : 23</td>; <td>Degree : Civil Engineering</td>; <td>Fav Lang : Js</td></tr>";
};

const showDetails = () => {
  const para = getElementById("demo2");
  para.style.display = "block";
};
const hideDetails = () => {
  const para = getElementById("demo2");
  para.style.display = "none";
};

const array = () => {
  const arr = getElementById("array");
  setTimeout(() => {
    document.write("['Patan']");
  }, 1000);
  setTimeout(() => {
    document.write("['Patan','Abdulla']");
  }, 2000);
  setTimeout(() => {
    document.write("['Patan','Abdulla','Khan']");
  }, 3000);
};

// array();

// obj function
// const O = {};
// O.name = "Patan Abdulla Khan";
// O.age = 23;
// const objet = getElementById("obj");
// objet.innerHTML = `${O.age +1}`;
// // window.alert

const person = {
  firstName: "Patan",
  lastName: "Abdulla Khan",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// write(person.fullName())
// write("<br>")
// write(person.id)

const printName = (firstName, lastName) => {
  this.firstName = firstName;
  this.lastName = lastName;
};

const obj = new Object(printName("Patan", "Abdulla Khan"));

console.log(obj);
