if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceWorker.js").then((registration) => {
        console.log("Service worker registration successful: ", registration);
    }).catch((error) => {
            console.error("Service worker registration failed: ", error);
        });
} else {
    console.error("Service workers are not supported.");
}
