// Get name from localStorage
let studentName = localStorage.getItem("studentName");

// If no name found, use default
if (!studentName) {
    studentName = "Student";
}

// Show welcome message
document.getElementById("welcomeMsg").innerText = "Welcome, " + studentName + "!";

// Show Date & Time
function showDateTime() {
    let now = new Date();
    document.getElementById("dateTime").innerText = now;
}