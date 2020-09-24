// On login
app.on("login", (user) => {
    utils.hide("login-btn");
    utils.setInner("nav-displayname", user.displayName);
    utils.setInner("nav-avatar", `<img src="https://cdn.slicklearn.xyz/avatar/${user.avatar}.png" alt="avatar">`);
    utils.setInner("nav-username", `<a router href="/@${user.username}"><i class="fa fa-fw fa-user-alt"></i>Mi perfil</a>`);
    utils.show("account-btn");
});

// Check if it is logged
app.on("load", async () => {
    let response = await utils.GET("https://api.slicklearn.xyz/auth/checksession");
    let session = JSON.parse(response);
    if (session.logged == true) {
        app.emit("login", session.user);
    }
})