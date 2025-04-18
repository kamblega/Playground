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

/* =================================================================
Second working

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

        const data = await response.json();
        console.log("Full response:", data); // Debug the actual response

        // Adjust based on your backend's response structure
        if (data.success || data.status === "success") {
            alert("Login successful");
            window.location.href = "register.html";
        } else {
            alert(data.message || "Invalid credentials");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Login failed: " + error.message);
    }
}

*/
/* 1st working code
async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8082/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Server response:", data);

        if (data.status === "success") {  // Assuming your backend returns { success: true }
            alert("Login successful");
            //window.location.href = "dashboard.html"; // to be used later for different funs
        } else {
            alert(data.message || "Invalid credentials");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Login failed: " + error.message);
    }
}
*/
/*    async function handleSubmit(event) {
        event.preventDefault();

        const userId = document.getElementById("userId").value;
        const password = document.getElementById("password").value;

        const loginData = {userId, password};

        console.log("this is your data "+ loginData.userId + "  " + loginData.password);


        const baseURL = "http://localhost:8082/loginUser"

        try{
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

          const data = await response.json();
          console.log(data);

          if(data) {
            alert("Login successfully");
          }

          else {
            alert("wrong credentials, please try again");
          }

        } catch (error) {
            alert("Error is occurring while calling the api")
        }
    }*/