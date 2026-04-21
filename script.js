document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;

    // Presence check
    if (name === "" || email === "" || password === "" || confirmPassword === "" || age === "") {
        alert("All fields are required!");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format!");
        return;
    }

    // Password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Age numeric check
    if (isNaN(age)) {
        alert("Age must be a number!");
        return;
    }

    // ✅ STORE NAME (IMPORTANT FIX)
    localStorage.setItem("studentName", name);

    // Success → Redirect
    alert("Registration Successful!");
    window.location.href = "dashboard.html";
});