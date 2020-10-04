var vault;

var checkEmptyFields = function () {
  var titleElement = document.getElementById("inputTitle");
  var passwordElement = document.getElementById("inputPassword");
  if (titleElement.value != "" && passwordElement.value != "") {
    return true;
  } else {
    window.alert("Some fields are empty!");
    return false;
  }
};

function getVault() {
  var email = sessionStorage.getItem("email");
  var key = sessionStorage.getItem("key");
  var oReq = new XMLHttpRequest(); // New request object
  oReq.onload = function () {
    // This is where you handle what to do with the response.
    // The actual data is found on this.responseText
    if (this.readyState == 4 && this.status == 200) {
      vault = vaultDecrypt(key, this.responseText);
      console.log(vault);
    }
  };
  oReq.open("GET", "../Requester/getvault.php", true);
  //                               ^ Don't block the rest of the execution.
  //                                 Don't wait until the request finishes to
  //                                 continue.
  oReq.send();
}

// populate rows
function populate() {
  var container = document.getElementById("vaultContainer");

  var rowElement = document.createElement("div");
  rowElement.className = "row";

  for (let title in vault) {
    var parentDiv = document.createElement("div");
    parentDiv.className = "col-lg-4 mb-4";
    var childDiv = document.createElement("div");
    childDiv.style =
      "border:2px dashed #DC3545; background-color:#ffffff; border-radius:5px; padding:16px;";
    childDiv.align = "center";
    var titleElement = document.createElement("h4");
    titleElement.className = "text-info";
    titleElement.innerText = title;
    var passwordElement = document.createElement("h4");
    passwordElement.className = "text-danger";
    passwordElement.innerText = vault[title];
    childDiv.appendChild(titleElement);
    childDiv.appendChild(passwordElement);
    parentDiv.appendChild(childDiv);
    console.log("title: " + title);
    console.log("value: " + vault[title]);
    rowElement.appendChild(parentDiv);
  }
  container.appendChild(rowElement);
}

// update vault contents after submit request
function updateVault(e) {
  //   e.preventDefault();
  var valid = checkEmptyFields();
  if (valid) {
    var titleElement = document.getElementById("inputTitle");
    var passwordElement = document.getElementById("inputPassword");
    var title = titleElement.value;
    var password = passwordElement.value;
    var hiddenVault = document.getElementById("encryptedVault");
    // change vault contents
    vault[title] = password;
    console.log(vault);
    // encrypt
    var key = sessionStorage.getItem("key");
    var encryptedVault = vaultEncrypt(key, vault);
    // set hidden element in form as encryptedVault
    hiddenVault.value = encryptedVault;
    // remove title password from dom tree
    titleElement.remove();
    passwordElement.remove();
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  getVault();
});
