let signupBtn = document.querySelector(".sub");
    let loginBtn= document.querySelector(".lb");  
    let signupDiv = document.querySelector(".signup-div");
    let loginDiv = document.querySelector(".login-div");

    loginBtn.addEventListener("click", event =>{
      signupDiv.style.left= "-100%";
    })
    signupBtn.addEventListener("click", event=>{
      signupDiv.style.left = "0";
    })