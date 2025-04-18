async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8082/loginUser", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const isValid = await response.json(); // Expects true/false
        console.log("Is valid user?", isValid);

        if (isValid) {
            alert("Login successful");
            window.location.href = "register.html"; // Uncomment if redirect needed
        } else {
            alert("Invalid credentials");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Login failed: " + error.message);
    }
}