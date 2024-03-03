const btnEl = document.querySelector("button");
const imageEl = document.getElementById("beautiful-image");
const imageCon = document.querySelector(".image-container");

btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        imageEl.src = "";

        const apiUrl = "https://api.unsplash.com/photos/random?query=beautiful&orientation=landscape&client_id=ETTSYtgyw6o4Xwny0LWZ5zlPpmS4s9T8ukqiuvI4wRg";

        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            imageEl.src = data.urls.regular;

        } else {
            throw new Error("Failed to fetch a beautiful image");
        }
        btnEl.disabled = false;
        btnEl.innerText = "Generate Beautiful Image";
        imageCon.style.display = "";

    } catch (error) {
        console.error(error);
        btnEl.disabled = false;
        btnEl.innerText = "Generate Beautiful Image";
    }
});
