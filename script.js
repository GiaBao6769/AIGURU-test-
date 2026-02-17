const API_BASE =
    location.hostname === "localhost"
        ? "http://localhost:3000"
        : "https://your-render-app.onrender.com";

async function getKeys() {
    const res = await fetch(`${API_BASE}/keys`);
    return res.json();
}

keys = await getKeys();
console.log(keys);