document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("fname").value;
    let comments = document.getElementById("comments").value;
    let rating = document.getElementById("rating").value;

    // Presence check
    if (name === "" || comments === "" || rating === "") {
        alert("All fields are required!");
        return;
    }

    // ✅ (Optional) Store feedback
    let feedbackData = {
        name: name,
        comments: comments,
        rating: rating
    };

    localStorage.setItem("feedback", JSON.stringify(feedbackData));

    // Show success message
    document.getElementById("successMsg").innerText = "Feedback submitted successfully!";

    // Clear form
    document.getElementById("feedbackForm").reset();
});