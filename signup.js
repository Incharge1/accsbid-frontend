document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const result = await apiPost("/signup", { name, email, password });

    if (result.success) {
        alert("Account created successfully!");
        window.location.href = "login.html";
    } else {
        alert(result.message);
    }
});
