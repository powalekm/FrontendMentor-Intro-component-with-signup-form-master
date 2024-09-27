
function formVerification() {
    let firstName = document.getElementById("firstName").value;
    let firstNameNotification;

    let lastName = document.getElementById("lastName").value;
    let lastNameNotification;

    let emailAddress = document.getElementById("emailAddress").value;
    let emailAddressNotification;

    let password = document.getElementById("password").value;
    let passwordNotification;

    if (firstName.length == 0) {
        firstNameNotification = "First name cannot be empty!";
        $("#firstNameIconError").removeClass("hidden")
    } else {
        firstNameNotification = "";
        $("#firstNameIconError").addClass("hidden")
    }
    $("#firstNameNotification").html("<em>" + firstNameNotification + "</em>");

    if (lastName.length == 0) {
        lastNameNotification = "Last name cannot be empty!";
        $("#lastNameIconError").removeClass("hidden")
    } else {
        lastNameNotification = "";
        $("#lastNameIconError").addClass("hidden")
    }
    $("#lastNameNotification").html("<em>" + lastNameNotification + "</em>");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        emailAddressNotification = "";
        $("#emailAddressIconError").addClass("hidden")
    } else {
        emailAddressNotification = "Looks like this is not an email!";
        $("#emailAddressIconError").removeClass("hidden")
    }
    $("#emailAddressNotification").html("<em>" + emailAddressNotification + "</em>");

    if (password.length == 0) {
        passwordNotification = "Password cannot be empty!";
        $("#passwordIconError").removeClass("hidden")
    } else {
        passwordNotification = "";
        $("#passwordIconError").addClass("hidden")
    }
    $("#passwordNotification").html("<em>" + passwordNotification + "</em>");
}