chrome.storage.sync.get(['blockStatus', 'urls'], (result) => {
        const { blockStatus, urls } = result;
        const currentURL = window.location.href;
        if (blockStatus && urls.some(url => currentURL.includes(url))) {
            showBlockImage();
        }
    });

function showBlockImage() {
    const img = document.createElement('img');
    const imageURL = chrome.runtime.getURL('images/fly.png');
    img.src = imageURL;
    img.style = `
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100vw; 
        height: 100vh; 
        object-fit: cover; 
        z-index: 2147483647;
    `; 
    document.body.appendChild(img); 
}