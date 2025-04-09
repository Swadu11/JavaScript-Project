// document.getElementById("Loginform").addEventListener("submit",function(event){
//     event.preventDefault();
//     const username=document.getElementById("username").value
//     const password=document.getElementById("password").value
//     if (username && password){
//         alert("Loging is Success")
//     }else{
//         alert("Pls enter both fields")
//     }

// });

document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        alert("Login is Success");
    } else {
        alert("Please enter both fields");
    }
});
