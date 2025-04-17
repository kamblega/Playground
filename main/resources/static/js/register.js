async function handleRegisterSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8082/addUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, name, password}),
        });

        if (response.ok) {
            alert("Registration successful!");
            window.location.href = "login.html"; // Redirect to login
        } else {
            alert("Registration failed");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error occurred during registration");
    }
}

/*async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const registerData = {email,name, password};



    const baseURL = "http://localhost:8082/addUser"

    try{
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });

      if(response.ok) {
        alert("Register successfully");

      }
        
    } catch (error) {
        alert("Error is occurring while calling the api")
    }
}

 */
