/* App */
const app = {};

// Send login request to the API.
app.login = async (captcha, email, password) => {
    let request = await utils.POST("https://api.slicklearn.xyz/auth/login", {email, password, captcha});
    let response = JSON.parse(request);

    if (response.success) {
        app.emit("success", "Sesión iniciada correctamente");
        app.emit("login", response.user);
    } else {
        app.emit("error", response.error);
    }
}

// Send register request to the API.
app.register = async (captcha, username, email, password) => {
    let request = await utils.POST("https://api.slicklearn.xyz/auth/register", { username, email, password, captcha });
    let response = JSON.parse(request);

    if (response.success) {
        app.emit("success", "Registrado correctamente");
        app.emit("login", response.user);
    } else {
        app.emit("error", response.error);
    }
}

// Send logout request to the API.
app.logout = async () => {
    let request = await utils.GET("https://api.slicklearn.xuz/auth/logout");
    let response = JSON.parse(request);

    if (response.success) {
        app.emit("success", "Te has deslogeado correctamente");
        app.emit("logout");
    } else {
        app.emit("error", response.error);
    }
}