/* Events */
app.rawEvents = new Map();

// Emit an event with specific Arguments.
app.emit = (eventName, ...args) => {
    let callbacks = app.rawEvents.get(eventName) || [];

    for (let callback of callbacks) {
        callback(...args);
    }
}

// Register a listener for an event.
app.on = (eventName, listener) => {
    let callbacks = app.rawEvents.get(eventName) || [];
    callbacks.push(listener);
    app.rawEvents.set(eventName, callbacks);
}