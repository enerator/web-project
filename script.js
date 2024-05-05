const api = "sk-proj-OrESKHxPmmmKdDFHCRf6T3BlbkFJ4kE1ehhnThx91xgfz31M";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getimage = async () => {               
    // Make request to OpenAI API
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

    try {
        const res = await fetch("https://api.openai.com/v1/images/generations", options);
        const data = await res.json();

        // Check if data is defined and contains the expected structure
        if (data && data.data && Array.isArray(data.data)) {
            // Clear existing images
            images.innerHTML = '';

            const listImages = data.data;
            listImages.forEach((image) => {
                const imageContainer = document.createElement("div");
                images.append(imageContainer);
                const imageElement = document.createElement("img");
                imageContainer.append(imageElement);
                imageElement.src = image.url;
            });
        } else {
            console.error("Error: Unexpected data format from API");
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

// Call getimage function when needed
