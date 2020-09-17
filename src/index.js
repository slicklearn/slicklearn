import app from './app.js';

// Listen application
app.listen(app.get("port"), () => {
    console.log(`Server listening at port ${app.get("port")}`)
})