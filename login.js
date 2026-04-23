function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;


    let correctUser = "admin";
    let correctPass = "1234";


    if (
        username === correctUser &&
        password === correctPass
    ) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
            "dashboard.html";

    }

    else {

        document.getElementById("loginStatus")
            .innerText =
            "Invalid username or password.";

    }

}