const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
// console.log(process.env);
let devUrl = process.env.DEV_URL;

console.log(`DEV_URL:${devUrl}`);
