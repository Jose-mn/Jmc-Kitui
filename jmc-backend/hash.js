import bcrypt from "bcrypt";

const password = "admin123"; // change this
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then(hash => {
  console.log(hash);
});
