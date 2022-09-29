

function openForm() {

  document.getElementById("signForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  console.log(document.getElementById("loginForm"));
  document.getElementsByClassName("signButton")[0].style.backgroundColor = "green";
  document.getElementsByClassName("loginButton")[0].style.backgroundColor = "transparent";
}

function showSignUp() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signForm").style.display = "block";
  document.getElementsByClassName("signButton")[1].style.backgroundColor = "transparent";
  document.getElementsByClassName("loginButton")[1].style.backgroundColor = "green";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signForm").style.display = "none";
  document.getElementById("signUpForm").reset();
  document.getElementById("logForm").reset();
  document.getElementById("loginalert").style.display = "none";
  document.getElementById("alert").style.display = "none";
}


function loginfor() {
  if (localStorage.getItem(document.getElementById("logForm")[2].value) == document.getElementById("logForm")[3].value) {
    sessionStorage.setItem("isLogged", "true");
    closeForm();
  }
  else {
    document.getElementById("loginalert").style.display = "inline";
  }
  localStorage.getItem(document.getElementById("logForm")[2].value);
}

function validateMail() {

  if (document.getElementById("signUpForm")[2].value.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) == null) {
    document.getElementById("alert").style.display = "inline";
    return false;
  }
  else {
    document.getElementById("alert").style.display = "none";
    return true;
  }

}
function validatePassword() {
  if (document.getElementById("signUpForm")[4].value == "" || document.getElementById("signUpForm")[3].value == "" || document.getElementById("signUpForm")[3].value != document.getElementById("signUpForm")[4].value) {
    document.getElementById("passAlert").style.display = "inline";
    return false;
  }
  else {
    document.getElementById("passAlert").style.display = "none";
    return true;
  }
}

function submitfor() {

  if (validateMail() && validatePassword()) {
    localStorage.setItem(document.getElementById("signUpForm")[2].value, document.getElementById("signUpForm")[3].value);
    document.getElementById("signUpForm").reset();
    sessionStorage.setItem("isLogged", "true");
    closeForm();
  }
}

