$(window).on("load",function () {
    setTimeout(function(){
        console.log("waiting");
        function createButtons() {
            userButton = document.createElement("button");
            userButton.innerHTML = "  Userid  ";
            userButton.id = "UserBtn";
            jiraButton = document.createElement("button");
            jiraButton.innerHTML = "  Jira  ";
            jiraButton.id = "JiraBtn";
            $("div.u__cf.inbox__conversation-controls__info-area.js__conversation-controls__info-area").append(userButton);
            $("div.u__cf.inbox__conversation-controls__info-area.js__conversation-controls__info-area").append(jiraButton);
            $("#UserBtn").addClass("btn o__primary ember-view cornix-btn")
            $("#JiraBtn").addClass("btn o__primary ember-view cornix-btn")
            $(".cornix-btn").css({"margin": "5px"});;
        }
        function pollDOM () {
            function getUserID (){
                const userid = $(".user-info").text();
                function containsSpecialChars(value) {
                    const specialchr = /[`)`]/;
                    return specialchr.test(value);
                }
                if (containsSpecialChars(userid)){
                    let pattern = /\((.*?)\)/;
                    finalUserID = (userid.match(pattern))[1];
                } else {
                    var finalUserID = userid.replace(/\n|\r/g, "").trim();
                    //finalUserID = userid
                    console.log(typeof(finalUserID))
                }
                return finalUserID;
            }
            $("#JiraBtn").click(function(){
                finalUserID =  getUserID();
                currentUrl = window.location.href
                textForJira = "Ticket ID : " + currentUrl + "\n" + "UserID: " + finalUserID
                navigator.clipboard.writeText(textForJira)
            })
            $("#UserBtn").click(function(){
                finalUserID =  getUserID();
                navigator.clipboard.writeText(finalUserID)
            })
        }
        createButtons()
        pollDOM()
    }, 5000);     
});





   