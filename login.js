
 const DEFAULT_USERNAME = "admin";
 const DEFAULT_PASSWORD = "123456";

 function validateFormLogin() {
     let username = document.getElementById("username").value;
     let password = document.getElementById("password").value;
     if (username !== DEFAULT_USERNAME || password !== DEFAULT_PASSWORD) {
         alert("Đăng nhập thất bại, mời đăng nhập lại!");
         return false;
     } else if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
         localStorage.setItem("username", DEFAULT_USERNAME)
         alert("Đăng nhập thành công!")
     }
 }