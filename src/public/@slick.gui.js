/* GUI */

// Show errors
app.on("error", (error) => {
    alert("Error: " + error);
})

// Show success
app.on("success", (message) => {
    alert("Success: " + message);
})

// Gui buttons events
function onSubmitLogin (captcha) {
    alert(captcha);
    let email = utils.getValue("email-input");
    let password = utils.getValue("password-input");

    app.login(captcha, email, password);
}

function onSubmitRegister (captcha) {
    let email = utils.getValue("email-input");
    let password = utils.getValue("password-input");
    let confirm = utils.getValue("confirm-password-input");
    let username = utils.getValue("username-input");

    if (password != confirm) {
        return app.emit("error", "Password doesn't match");
    }

    app.register(captcha, username, email, password);
}