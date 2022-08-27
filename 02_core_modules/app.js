// Synchronous Way
const fs = require("fs");

// let fileContent = fs.readFileSync("./message.txt", "utf-8");
// console.log(fileContent);

// let newFileContent = "Hello this is a new file content";
// fs.writeFileSync("data.txt", newFileContent, "utf-8");

// Asynchronous Way
// fs.readFile("./message.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   fs.writeFile("./data2.text", data, "utf-8", (err) => {
//     if (err) throw err;
//     console.log("Data is writeen to the file");
//   });
// });
// console.log("this is a fs core module example");

// Working with JSON Data in Node

let employees = [
  {
    first_name: "Tracie",
    last_name: "Dalzell",
    email: "tdalzell0@nifty.com",
    gender: "Male",
  },
  {
    first_name: "Sher",
    last_name: "Skerme",
    email: "sskerme1@guardian.co.uk",
    gender: "Female",
  },
  {
    first_name: "Patricia",
    last_name: "Playfair",
    email: "pplayfair2@nationalgeographic.com",
    gender: "Female",
  },
  {
    first_name: "Livy",
    last_name: "Coit",
    email: "lcoit3@fda.gov",
    gender: "Female",
  },
  {
    first_name: "Coraline",
    last_name: "Baldazzi",
    email: "cbaldazzi4@fema.gov",
    gender: "Female",
  },
  {
    first_name: "Portia",
    last_name: "Stebbins",
    email: "pstebbins5@addthis.com",
    gender: "Female",
  },
  {
    first_name: "Kristi",
    last_name: "Treven",
    email: "ktreven6@pcworld.com",
    gender: "Female",
  },
  {
    first_name: "Jobye",
    last_name: "Gaitone",
    email: "jgaitone7@cbslocal.com",
    gender: "Female",
  },
  {
    first_name: "Sisely",
    last_name: "Berger",
    email: "sberger8@theguardian.com",
    gender: "Female",
  },
  {
    first_name: "Ermentrude",
    last_name: "Scotchmur",
    email: "escotchmur9@about.me",
    gender: "Female",
  },
];

fs.writeFile("./employees.json", JSON.stringify(employees), "utf-8", (err) => {
  if (err) throw err;
  console.log("Data is written in file");
});
fs.readFile("./employees.json", "utf-8", (err, data) => {
  if (err) throw err;
  let employees = JSON.parse(data);
  console.log(employees);
});
