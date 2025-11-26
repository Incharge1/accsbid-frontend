// Grab input values from the login form
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await fetch("https://accsbid-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    alert(data.message);

    if (data.status === "success") {
      window.location.href = "index.html"; // redirect to dashboard
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Error connecting to backend. Try again.");
  }
});
