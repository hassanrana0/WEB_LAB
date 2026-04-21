function submitCourses() {

    let selected = [];

    let courses = document.querySelectorAll("input[type='checkbox']:checked");

    courses.forEach(function(course) {
        selected.push(course.value);
    });

    if (selected.length === 0) {
        alert("Please select at least one course!");
        return;
    }

    // ✅ STORE selected courses (optional but good)
    localStorage.setItem("courses", JSON.stringify(selected));

    // Show selected courses
    alert("Selected Courses:\n" + selected.join(", "));
}