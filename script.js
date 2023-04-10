
let mailEle = document.getElementById("email");
let pwdEle = document.getElementById("password");
let btnEle = document.getElementById("button");

let messageEle = document.getElementById("message");

let userEle = document.getElementById("user");

/*mailEle.onFocus = function(event){
    console.log("Hello");
    mailEle.style.borderColor = "red";
    mailEle.style.borderWidth = "2px";
};

mailEle.addEventListener("focus",function(){
    mailEle.style.borderColor = "red";
    mailEle.textContent = "Focus";
});*/

function submitDetails(){
    let mailText = mailEle.value;
    let pwdText = pwdEle.value;
    if(mailText===""){
        messageEle.style.color = 'red';
        messageEle.textContent = "Enter a mail id";
    } else if(pwdText===""){
        messageEle.style.color = 'red';
        messageEle.textContent = "Enter password";

    }else{
        messageEle.style.color = 'green';
        //userEle.textContent = mailEle.value;
        window.location.href = "details.html";
        // messageEle.textContent = "Success";
        
        userEle.textContent = "HEllo Re";
    }

}

btnEle.addEventListener("click",submitDetails);


