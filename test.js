import http from "k6/http"
export let options = {
    insecureSkipTLSVerify: true, // ignore SSL certificate errors
    noConnectionReuse: false,    // keep-alive connections between iterations
    vus: 250,    // 100 virtual users then ramp up to 250 virtual users
    duration: "30s" // for 10 seconds then 30 seconds with 250 virtual users
};

export default function() {
    http.get("https://localhost:3000/");
};