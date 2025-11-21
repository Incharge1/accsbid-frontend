document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const result = await apiPost("/login", { email, password });

    if (result.success) {
        alert("Login Successful");
        localStorage.setItem("token", result.token);
        window.location.href = "dashboard.html";
    } else {
        alert(result.message);
    }
});
