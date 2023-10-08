
document.getElementById("shortenerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const originalURL = document.getElementById("originalURL").value;
    const shortURL = shortenURL(originalURL);
    document.getElementById("shortURL").textContent = shortURL;
    document.getElementById("shortURL").href = shortURL;
    document.getElementById("shortenedLink").style.display = "block";
});

function shortenURL(originalURL) {
    // In a real implementation, you would use a server-side script to generate a short URL.
    // For simplicity, we'll use a random number here.
    const shortCode = Math.random().toString(36).substring(2, 8);
    return `https://yourdomain.com/${shortCode}`;
}
