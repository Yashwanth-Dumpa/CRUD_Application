
let mailEle = document.getElementById("email");
let pwdEle = document.getElementById("password");
let mailErrEle = document.getElementById("mailErr");
let pwdErrEle = document.getElementById("pwdErr");


let btnEle = document.getElementById("button");

let messageEle = document.getElementById("message");

let userEle = document.getElementById("user");
let mailText;
let pwdText;

/*Function Submit details that submits the entered data after validation*/

function submitDetails(){
    mailText = mailEle.value;
    pwdText = pwdEle.value;
    
    if(mailText===""){
        messageEle.style.color = 'red';
        messageEle.textContent = "Enter a mail id";
    } else if(pwdText===""){
        messageEle.style.color = 'red';
        messageEle.textContent = "Enter password";

    }else{
        messageEle.style.color = 'green';
        let mailValue = validateEmail(mailText);
        //userEle.textContent = mailEle.value;
        
        if(mailValue){
            window.location.href = "details.html";
        } else{
            alert("Enter Valid Email address");
        }
       
        // messageEle.textContent = "Success";
        
        userEle.textContent = "HEllo Re";
    }

}

/* Functions to validate MailId and Password */

function validateEmail(mailText){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailText.match(validRegex)){
        return true;
    } else{
        mailErrEle.textContent = "Enter correct Email address";
        return false;
    }
}

function validatePassword(pwdText){
    let validRegex = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    if(pwdText.match(validRegex)){
        return true;
    } else{
        pwdErrEle.textContent = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters";
        return false;
    }
}

/* Eventlisteners to show the fields should not be empty/.*/

mailEle.addEventListener("blur",function(){
    mailText = mailEle.value;
    mailErrEle.textContent = "*Required";
    if(mailText!==""){
        mailErrEle.textContent = "";
        validateEmail(mailText);
    }
});
pwdEle.addEventListener("blur",function(){
    pwdText = pwdEle.value;
    pwdErrEle.textContent = "*Required";
    if(pwdText!==""){
        pwdErrEle.textContent = "";
        validatePassword(pwdText);
    }
});

btnEle.addEventListener("click",submitDetails);


