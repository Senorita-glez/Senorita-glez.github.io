window.onload = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
        const tabId = activeTab[0].id;
        mostrarGato();
    });
};


const mostrarGato = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            document.getElementById(
                "cat_image"
            ).src = json[0].url;
            ;
        });
};