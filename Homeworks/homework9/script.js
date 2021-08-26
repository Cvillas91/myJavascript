//Template Literals HTML Body
const myHTMLBody = document.getElementById("myBody");

const tlDiv0 = 
`<div id = "div0">
        <h1>Project #1: To do List</h1>
        <h2>Application for creating and editing To do Lists</h2>
        <div class = "divbuttons", id="divBut">
            <button class = "buttonDv0", id = "SignUpButton">Sign Up</button>
            <button class = "buttonDv0", id = "LogInButton">Log In</button>
        </div>       
    </div>`

const tlDiv1 = 
	`<div class = "LogOutButton", id = "divLogOutButton", style= "display: none">
        <button id = "AccountSettings">Settings</button> 
        <button id = "LogOut">Log Out</button>  
    </div>`

 const tlDiv2 = 
 	`<div class = "centerDiv", id = "div1", style ='display:none'>
        <table class = "centerTable">
            <tr>
                <td><label>First name:</label></td>
                <td><input type="text" id="fname" autocomplete="off" ></td>
            </tr>
            <tr>
                <td><label>Last name:</label></td>
                <td><input type="text" id="lname" autocomplete="off"></td>
            </tr>
            <tr>
                <td><label>EMail:</label></td>
                <td><input type="text" id="email" autocomplete="off"></td>
            </tr>
            <tr>
                <td><label>Password:</label></td>
                <td><input type="password" id="password" ></td>
            </tr>
        </table>
        <input type="checkbox" id="ckbox">
        <label>I agree to the Terms and Conditions</label><br><br>
        <button id = "RegisterButton">Register</button>
        <button id = "ReturnButton1">Return</button><br><br>

        <div class = "errorDiv", id = "divError", style='display:none'> 
            <b>There is an error with your data please input correct values again!</b>
        </div>

    </div>`
    
const tlDiv3 =    
	`<div class = "goodRegisterDiv", id = "divGood", style='display:none'> 
        <b>User Registered!</b><br><br>
        <button id = "LogInAgain">Log In</button>
    </div>

    <div class = "centerDiv", id ="div2", style ='display:none'>
        <table class = "centerTable">
            <tr>
                <td><label>EMail:</label></td>
                <td><input type="text" id="emailLogIn" autocomplete="off"></td>
            </tr>
            <tr>
                <td><label>Password:</label></td>
                <td><input type="password" id="passwordLogIn" ></td>
            </tr>
        </table>
        <button id = "LogInTry">Log In</button>
        <button id = "ReturnButton2">Return</button><br><br>
    </div>
    <div class = "errorDiv centerDiv", id = "divErrorLogIn", style='display:none'> 
        <br><b>User or Password Incorrect! Try Again!</b>
    </div>`

const tlDiv4 =   
	    `<div class = "centerDiv", id = "divSettings", style ='display:none'>
        <table class = "centerTable">
            <tr>
                <td><label>First name:</label></td>
                <td><input type="text" id="fnameSettings" autocomplete="off" ></td>
            </tr>
            <tr>
                <td><label>Last name:</label></td>
                <td><input type="text" id="lnameSettings" autocomplete="off"></td>
            </tr>
            <tr>
                <td><label>EMail:</label></td>
                <td><input type="text" id="emailSettings" autocomplete="off"></td>
            </tr>
            <tr>
                <td><label>Password:</label></td>
                <td><input type="password" id="passwordSettings" ></td>
            </tr>
        </table>
        <button id = "SaveSettingsButton">Save</button>
        <button id = "ReturnButton3">Return</button><br><br>

        <div class = "errorDiv", id = "divError2", style='display:none'> 
            <b>There is an error with your data please input correct values again!</b><br>
        </div>

        <div class = "goodRegisterDiv", id = "divGood2", style='display:none'> 
            <b>Information Saved!</b><br>
        </div>

    </div>`

const tlDiv5 =       
	`<div class = "containter centerDiv", id = "divList", style='display:none'>
        <input id = "inputField", type="text"><button id = "addToDo">+</button>
        <div class = "to-dos" id ="toDoContainer"></div>
        <h5>Click on the + to add a new element, click on the element to cross it out, double click on the element to remove it</h5>
    </div>`

myHTMLBody.innerHTML = tlDiv0 + tlDiv1 + tlDiv2 + tlDiv3 + tlDiv4 + tlDiv5;

//HTML Structure
localStorage.clear();
var divBut = document.getElementById("divBut");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var divLogOutButton = document.getElementById("divLogOutButton");
var divError = document.getElementById("divError");
var divErrorLogIn = document.getElementById("divErrorLogIn");
var divGoodReg = document.getElementById("divGood");
var divSettings = document.getElementById("divSettings");
var divError2 = document.getElementById("divError2");
var divGood2 = document.getElementById("divGood2");
var divList = document.getElementById("divList");

//Within Div0
const SignUpButton = document.getElementById("SignUpButton");
const LogInButton = document.getElementById("LogInButton");

//Within Div1
const fnameRegister = document.getElementById("fname");
const lnameRegister = document.getElementById("lname");
const emailRegister = document.getElementById("email");
const passwordRegister = document.getElementById("password");
const registerButton = document.getElementById("RegisterButton");
const returnButton1 = document.getElementById("ReturnButton1");
const returnButton2 = document.getElementById("ReturnButton2");
const checkBoxTaC = document.getElementById("ckbox");
const logInAgainButton = document.getElementById("LogInAgain");

//Within Div2
const emailLogIn = document.getElementById("emailLogin");
const passwordLogIn = document.getElementById("passwordLogin");
const logInTry = document.getElementById("LogInTry");
const emailTry = document.getElementById("emailLogIn");
const passwordTry = document.getElementById("passwordLogIn");

//Within DivLogOut & Settings
const LogOutButton = document.getElementById("LogOut");
const settingsButton = document.getElementById("AccountSettings");
const fnameSettings = document.getElementById("fnameSettings");
const lnameSettings = document.getElementById("lnameSettings");
const emailSettings = document.getElementById("emailSettings");
const passwordSettings = document.getElementById("passwordSettings");
const saveSettings = document.getElementById("SaveSettingsButton");
const returnButton3 = document.getElementById("ReturnButton3");

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField")


SignUpButton.addEventListener("click",takeMeToRegisterScreen);
LogInButton.addEventListener("click",takeMeToLogInScreen);
registerButton.addEventListener("click",checkRegisterUser);
logInAgainButton.addEventListener("click",takeMeToMainScreen);
logInTry.addEventListener("click",takeMeToList);
LogOutButton.addEventListener("click",takeMeToMainScreen);
returnButton1.addEventListener("click",takeMeToMainScreen);
returnButton2.addEventListener("click",takeMeToMainScreen);
settingsButton.addEventListener("click",takeMeToSettings);
saveSettings.addEventListener("click",checkRegisterUser2);
returnButton3.addEventListener("click",takeMeToListScreen)

addToDoButton.addEventListener("click",function(){
	var paragraph = document.createElement('p');
	paragraph.classList.add("paragraph-styling");
	paragraph.innerText = inputField.value;
	toDoContainer.appendChild(paragraph);
	inputField.value = "";
	paragraph.addEventListener("click", function(){
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener("dblclick", function(){
		toDoContainer.removeChild(paragraph);
	})
})

//Functions

function takeMeToRegisterScreen(){
	divBut.style.display = 'none';
	div1.style.display = 'block';
	divError.style.display = 'none';
	divErrorLogIn.style.display = 'none';
	divSettings.style.display = 'none';
	fnameRegister.value = "";
	lnameRegister.value = "";
	emailRegister.value = "";
	passwordRegister.value = "";
	checkBoxTaC.checked = false;
}

function takeMeToMainScreen(){
	divBut.style.display = 'block';
	divLogOutButton.style.display = 'none';
	divGoodReg.style.display = 'none';
	divError.style.display = 'none';
	divErrorLogIn.style.display = 'none';
	div1.style.display = 'none';
	div2.style.display = 'none';
	divSettings.style.display = 'none';
	divList.style.display = 'none';
}

function takeMeToLogInScreen(){
	divBut.style.display = 'none';
	div2.style.display = 'block';
	divError.style.display = 'none';
	divSettings.style.display = 'none';
	divList.style.display = 'none';
}

function takeMeToList() {
	const LocalEmail = window.localStorage.getItem(emailTry.value+"eMail");
	const LocalPassword = window.localStorage.getItem(emailTry.value+"Password");
	if (emailTry.value = LocalEmail && passwordTry.value == LocalPassword){
		emailTry.value = "";
		passwordTry.value = "";
		div2.style.display = 'none';
		divErrorLogIn.style.display = 'none';
		divLogOutButton.style.display = 'block';
		divList.style.display = 'block';
	} else {
		divErrorLogIn.style.display = 'block';
		emailTry.value = "";
		passwordTry.value = "";
	}
}

function takeMeToSettings(){
	divBut.style.display = 'none';
	div1.style.display = 'none';
	div2.style.display = 'none';
	divError.style.display = 'none';
	divErrorLogIn.style.display = 'none';
	divSettings.style.display = 'block';
	divList.style.display = 'none';
	fnameSettings.value = "";
	lnameSettings.value = "";
	emailSettings.value = "";
	passwordSettings.value = "";
}

function takeMeToListScreen(){
	divList.style.display = 'block'
	divBut.style.display = 'none';
	div1.style.display = 'none';
	div2.style.display = 'none';
	divError.style.display = 'none';
	divError2.style.display = 'none';
	divGood2.style.display = 'none';
	divErrorLogIn.style.display = 'none';
	divSettings.style.display = 'none';
}

function checkRegisterUser() {
	if(fnameRegister.value =="" || lnameRegister.value =="" || emailRegister.value =="" || passwordRegister.value == "" || checkBoxTaC.checked == false){
		divError.style.display = 'block';
	}else{
		div1.style.display = 'none';
		divGoodReg.style.display = 'block';
		const userFName = emailRegister.value + "FirstName";
		const userLName = emailRegister.value + "LastName";
		const userEmail = emailRegister.value + "eMail";
		const userPassword = emailRegister.value + "Password";
		window.localStorage.setItem(userFName, fnameRegister.value);
		window.localStorage.setItem(userLName, lnameRegister.value);
		window.localStorage.setItem(userEmail, emailRegister.value);
		window.localStorage.setItem(userPassword, passwordRegister.value);
	}
}

function checkRegisterUser2() {
	if(fnameSettings.value =="" || lnameSettings.value =="" || emailSettings.value =="" || passwordSettings.value == ""){
		divError2.style.display = 'block';
	}else{
		div1.style.display = 'none';
		divError2.style.display = 'none';
		divGood2.style.display = 'block';
		const userFName = emailSettings.value + "FirstName";
		const userLName = emailSettings.value + "LastName";
		const userEmail = emailSettings.value + "eMail";
		const userPassword = emailSettings.value + "Password";
		window.localStorage.setItem(userFName, fnameSettings.value);
		window.localStorage.setItem(userLName, lnameSettings.value);
		window.localStorage.setItem(userEmail, emailSettings.value);
		window.localStorage.setItem(userPassword, passwordSettings.value);
	}
}


