const bcrypt = require("bcryptjs");

let user = {
  name: "Prudhvi Guriginjala",
  email: "prudhvitejadil22@gmail.com",
  password: "prudhvi@1995",
};

let salt = bcrypt.genSaltSync(10);
let hasedpassword = bcrypt.hashSync(user.password, salt);
//

let updatedPassword = {
  ...user,
  password: hasedpassword,
};

// console.log(updatedPassword);

if (bcrypt.compareSync("prudhvi@1995", hasedpassword)) {
  console.log("password correct");
} else {
  console.log("password was incorrect");
}
