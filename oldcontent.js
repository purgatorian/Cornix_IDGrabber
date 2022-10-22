let finalUserID = null


function pollDOM () {
    const userid = document.getElementsByClassName("conversation__card__title__em-link no-underline hover:underline");
    if (userid.length) {
        grabbedID = userid[0].innerText;
        cleanUserID = grabbedID.split("(")
        finalUserID = cleanUserID[1].replace(")",'')
        localStorage.setItem("Userid", grabbedID)
        btnplacement = document.getElementsByClassName("u__cf inbox__conversation-controls__info-area js__conversation-controls__info-area")[0];
        idchecker = document.getElementById("aButton")
        if (idchecker==null){
            userButton = document.createElement("button");
            userButton.innerHTML = "***Userid***";
            userButton.id = "aButton";
            userButton.type = "button";
            JiraButton = document.createElement("button");
            JiraButton.innerHTML = "     ***Jira***";
            JiraButton.id = "aButton";
            JiraButton.type = "button";
            btnplacement.appendChild(userButton)
            btnplacement.appendChild(JiraButton)
        } 
        JiraButton.addEventListener("click",function(){
        pollDOM()
        currentUrl = window.location.href
        navigator.clipboard.writeText(currentUrl)
        })
        userButton.addEventListener("click",function(){
        pollDOM()
        navigator.clipboard.writeText(finalUserID)
        })
    } else {
        setTimeout(pollDOM, 300); // try again in 300 milliseconds

    };
    return finalUserID;
}



pollDOM()

function fncuserid(){
    finalID = pollDOM()
    console.log(finalID)
}
fncuserid()


   