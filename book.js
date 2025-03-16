document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        // Validate input
        if (!name || !date || !time || !guests) {
            alert("Please fill in all fields!");
            return;
        }

        // Display confirmation message
        confirmationMessage.textContent = `Thank you, ${name}! Your table for ${guests} guest(s) is booked on ${date} at ${time}.`;
        confirmationMessage.classList.remove("hidden");

        // Clear form fields
        bookingForm.reset();
    });
});
