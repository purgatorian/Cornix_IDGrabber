function createButtons() {
    const btnplacement = document.getElementsByClassName("u__cf inbox__conversation-controls__info-area js__conversation-controls__info-area")[0];
    if (btnplacement) {
        userButton = document.createElement("button");
        userButton.innerHTML = "  Userid  ";
        userButton.id = "UserButton";
        userButton.type = "button";
        userButton.class="btn o__primary ember-view"
        userButton.style.border = " 7px solid #334bfa"
        userButton.style.color = "#ffffff"
        userButton.style.backgroundColor = "#334bfa"
        userButton.style.margin = "5px"
        userButton.style.borderRadius = "5px"

        jiraButton = document.createElement("button");
        jiraButton.innerHTML = "  Jira  ";
        jiraButton.id = "jiraButton";
        jiraButton.type = "button";
        jiraButton.class="btn o__primary ember-view"
        jiraButton.style.border = " 7px solid #334bfa"
        jiraButton.style.color = "#ffffff"
        jiraButton.style.backgroundColor = "#334bfa"
        jiraButton.style.margin = "5px"
        jiraButton.style.borderRadius = "5px"
        btnplacement.appendChild(userButton)
        btnplacement.appendChild(jiraButton)
    } else {
        setTimeout(createButtons, 300); // try again in 300 milliseconds
    }
}
function pollDOM (jiraButton, userButton) {
    const userid = document.getElementsByClassName("conversation__card__title__em-link no-underline hover:underline");
    if (userid.length) {
        grabbedID = userid[0].innerText;
        cleanUserID = grabbedID
        function containsSpecialChars(value) {
            const specialchr = /[`)`]/;
            return specialchr.test(value);
        }
        if (containsSpecialChars(cleanUserID)){
            cleanUserID = grabbedID.split("(")
            cleanUserID = cleanUserID[1]
            finalUserID = cleanUserID.replace(")",'')
            console.log(finalUserID)
        } else {
            finalUserID = cleanUserID
        };
        jiraButton = document.getElementById("jiraButton")
        userButton = document.getElementById("UserButton")
        jiraButton.addEventListener("click",function(){
            pollDOM()
            currentUrl = window.location.href
            textForJira = "Ticket ID : " + currentUrl + "\n" + "UserID: " + finalUserID
            navigator.clipboard.writeText(textForJira)
        })
        userButton.addEventListener("click",function(){
        pollDOM()
        navigator.clipboard.writeText(finalUserID)
        })
    } else {
        setTimeout(pollDOM, 300); // try again in 300 milliseconds
    };
}
createButtons()
pollDOM()



   