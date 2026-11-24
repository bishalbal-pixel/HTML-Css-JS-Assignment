// Q6 - check email property
let user = {
  username: "admin",
  email: "admin@gmail.com",
  password: "12345"
};

if ("email" in user) {
  console.log("Email property exists");
} else {
  console.log("Email property does not exist");
}
