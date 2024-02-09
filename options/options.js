const $urlInput = document.querySelector('#urlInput');
const $saveURL = document.querySelector('#saveURL');
const $urlList = document.querySelector('#urlList');

$saveURL.addEventListener('click', () => {
    const url = $urlInput.value;
    if (url) {
        chrome.storage.sync.get({urls: []}, (data) => {
            console.log('This is data: ', data);
            const urls = data.urls;
            urls.push(url);
            chrome.storage.sync.set({urls: urls}, () => {
                $urlInput.value = '';
                displayURLs();
            });
        });
    };
    displayURLs();
});

function displayURLs() {
    chrome.storage.sync.get({urls: []}, (data) => {
        const urls = data.urls;
        urlList.innerHTML = '';
        urls.forEach((url, idx) => {
            const div = document.createElement('div');
            const deleteBtn = document.createElement('button');

            div.textContent = url;
            div.appendChild(deleteBtn);
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', () => {
                urls.splice(idx, 1);
                chrome.storage.sync.set({urls: urls}, displayURLs);
            })
            urlList.appendChild(div);
        });
    });
}

displayURLs();