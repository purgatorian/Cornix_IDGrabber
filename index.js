let myId = []
const ticketEl = document.getElementById("ticket-el")
const userEl = document.getElementById("userid-el")
const inputBtn = document.getElementById("input-btn")
console.log(userEl)
inputBtn.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        ticketEl.innerText = tab.url
    });
})