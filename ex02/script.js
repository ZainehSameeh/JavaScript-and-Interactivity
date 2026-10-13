let message = document.getElementById("message");
let message2 = document.getElementById("message2");
let heading = document.querySelector(".title");

message.textContent = "Welcome!";
message.style.color = "blue";
message.style.backgroundColor = "yellow";
message2.classList.add("active");
heading.textContent = "DOM JavaScript";