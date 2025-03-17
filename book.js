document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Check if script is loading

    const bookingForm = document.getElementById("bookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (!bookingForm || !confirmationMessage) {
        console.error("Form or confirmation message NOT found!");
        return;
    }

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default reload
        console.log("Form submitted!"); // Debug message

        // Get values
        const name = document.getElementById("name").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        if (!name || !date || !time || !guests) {
            alert("Please fill in all fields!");
            return;
        }

        // Show confirmation
        confirmationMessage.textContent = `Thank you, ${name}! Your table for ${guests} guest(s) is booked on ${date} at ${time}.`;
        confirmationMessage.style.display = "block";
        
        setTimeout(() => {
            confirmationMessage.style.display = "none";
        }, 5000);

        // Clear form
        bookingForm.reset();
    });
});
