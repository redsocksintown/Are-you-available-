body {
    background-color: #ffe6e6;
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}

.container {
    margin-top: 50px;
}

h1 {
    color: #ff3366;
}

button {
    background-color: #ff3366;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #e62e5c;
}

#message {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}
document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");

    yesButton.addEventListener("click", function () {
        noButton.style.opacity = "0";  // Làm mờ dần
        setTimeout(() => {
            noButton.style.display = "none"; // Ẩn hoàn toàn
        }, 500); // Đợi 0.5s để hiệu ứng chạy
    });
});

