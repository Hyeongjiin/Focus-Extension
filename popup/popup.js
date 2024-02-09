const $optionsPage = document.querySelector('#optionsPage');
const $blockStatus = document.querySelector('#blockStatus');

$optionsPage.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
})

$blockStatus.addEventListener('change', (event) => {
    const blockStatus = event.target.checked;
    chrome.storage.sync.set({blockStatus: blockStatus});
});

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['blockStatus'], (result) => {
        if (result.blockStatus !== undefined) {
            $blockStatus.checked = result.blockStatus;
        } else {
            $blockStatus.checked = false;
        }
    });
});

$blockStatus.addEventListener('change', () => {
    chrome.storage.sync.get(['blockStatus', 'urls'], (result) => {
        console.log(result)
    });
});