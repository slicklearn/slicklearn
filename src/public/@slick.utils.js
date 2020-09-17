/* Utils */
const utils = {};

// Sends a GET request.
utils.GET = (url) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4) {
                resolve(this.responseText)
            }
        }
        req.open("GET", url);
        req.withCredentials = true;
        req.send();
    })
}

// Sends a POST request.
utils.POST = (url, json) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4) {
                resolve(this.responseText)
            }
        }
        req.open("POST", url);
        req.withCredentials = true;
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(json));
    })
}

// Get the content of an input field.
utils.getValue = (id) => {
    let obj = document.getElementById(id);
    return (obj == null ? null : obj.value);
}

// Gets innerHTML of a HTML element
utils.getInner = (id) => {
    let obj = document.getElementById(id);
    return (obj == null ? null : obj.innerHTML);
}

// Sets innerHTML of a HTML Element
utils.setInner = (id, content) => {
    let obj = document.getElementById(id);
    if (obj != null) {
        obj.innerHTML = content;
    }
}

// Hide a HTML Element in the DOM
utils.hide = (id) => {
    let obj = document.getElementById(id);
    if (obj != null) {
        obj.style.display = "none";
    }
}

// Show a HTML Element in the DOM
utils.show = (id, inline) => {
    let obj = document.getElementById(id);
    if (obj != null) {
        obj.style.display = (inline ? "inline-block" : "block");
    }
}