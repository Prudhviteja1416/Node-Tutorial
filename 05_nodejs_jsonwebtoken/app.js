const jwt = require("jsonwebtoken");

let user = {
  id: "abcd-2451-fdgs",
  name: "prudhvi guriginjala",
  email: "prudhvitejadil22@gmail.com",
};
let payload = {
  id: user.id,
  name: user.name,
};

let secretkey = "sshhhh";
let token = jwt.sign(payload, secretkey, { expiresIn: 360000 });
// console.log(token);

jwt.verify(token, secretkey, (err, decoded) => {
  if (err) throw err;
  console.log(decoded);
});
