import {API_BASE} from "./preload.js"

async function checkAuth() {
    const res = await fetch("/api/me");
    if (res.status === 401) {
        location.href = "/login.html";
    }
}

checkAuth();