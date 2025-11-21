// Backend API URL
const API_URL = "https://accsbid.onrender.com";

// Helper function for POST requests
async function apiPost(path, data) {
    const res = await fetch(API_URL + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}
