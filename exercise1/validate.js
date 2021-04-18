function validate() {
    var input1 = document.getElementById("pass1").value;
    var input2 = document.getElementById("pass2").value;
    var check1 = false;
    var check2 = false;

    if (input1 != input2) {
        alert("Your password does not match, please try again!");
        check1 = false;
    } else if (input1 == input2) {
        check1 = true;
    }
    if (input1.length < 8 || input2.length < 8) {
        alert("Your password length must be atleast 8 characters long!");
        check2 = false;
    } else if (input1.length >= 8 || input2.length >= 8) {
        check2 = true;
    }

    if (check1 == false || check2 == false) {
        return false;
    } else {
        alert("Your password is correct!");
        return true;
    }

}