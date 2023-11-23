async function acharStarbucks() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const mainSection = document.querySelector("main")
            const visualMap = document.createElement("iframe")

            console.log(`Latitude: ${position.coords.latitude}`);
            console.log(`Longitude: ${position.coords.longitude}`);

            visualMap.innerHTML = `<iframe></iframe>`
            visualMap.src = `https://www.openstreetmap.org/#map=6/-12.490/-65.413`

            mainSection.appendChild(visualMap)
        })
    }
}

acharStarbucks()