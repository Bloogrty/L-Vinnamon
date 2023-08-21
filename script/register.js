function validation(event) {
    event.preventDefault();

    // value all input
    var name = document.getElementById("name").value;
    var region = document.getElementById("region").value;
    var password = document.getElementById("password").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var checkbox = document.getElementById("checkbox").checked;

    // error messages all elements
    var errorName = document.getElementById("error_name");
    var errorRegion = document.getElementById("error_reg");
    var errorPassword = document.getElementById("error_pass");
    var errorGender = document.getElementById("error_gender");
    var errorCheckbox = document.getElementById("error_tnc");

    // clear error messagenya / refresh
    errorName.textContent = "";
    errorRegion.textContent = "";
    errorPassword.textContent = "";
    errorGender.textContent = "";
    errorCheckbox.textContent = "";

    var adaError = false;

    if (name.trim() === "" || name.length <3) {
        errorName.textContent = "Please enter your name (more than 2 characters)";
        adaError = true;
    }

    if (region === "") {
        errorRegion.textContent = "Please select your region";
        adaError = true;
    }

    if (password.length < 8 ||!uppercase(password) || !lowercase(password) || !number(password)) {
        errorPassword.textContent = "Password must be at least 8 characters (contain uppercase, lowercase, and numbers";
        adaError = true;
    }

    if (!male && !female) {
        errorGender.textContent = "Please select your gender";
        adaError = true;
    }

    if (!checkbox) {
        errorCheckbox.textContent = "Please agree to L'Vinnamon's terms and conditions";
        adaError = true;
    }

    if (adaError) {
        return false;
    } else {
        // ke home page
        window.location.href = "/L ' Vinnamon/view/home.html";
    }

}

// cek upper
function uppercase(str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") {
        return true;
      }
    }
    return false;
  }

//   cek lower
function lowercase(str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] >= "a" && str[i] <= "z") {
        return true;
      }
    }
    return false;
  }
  
//   cek angka
  function number(str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") {
        return true;
      }
    }
    return false;
  }


