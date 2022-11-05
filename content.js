$(window).on("load",function () {
    setTimeout(function(){
        function createButtons() {
            userButton = document.createElement("button");
            userButton.innerHTML = "  Userid  ";
            userButton.id = "UserBtn";
            jiraButton = document.createElement("button");
            jiraButton.innerHTML = "  Jira  ";
            jiraButton.id = "JiraBtn";
            $("div.flex.flex-row.gap-4.mb-2.px-2.pt-2").append(userButton);
            $("div.flex.flex-row.gap-4.mb-2.px-2.pt-2").append(jiraButton);
            $("div.u__cf.inbox__conversation-controls__info-area.js__conversation-controls__info-area").append(userButton);
            $("div.u__cf.inbox__conversation-controls__info-area.js__conversation-controls__info-area").append(jiraButton);
            $("#UserBtn").addClass("btn o__primary ember-view cornix-btn")
            $("#JiraBtn").addClass("btn o__primary ember-view cornix-btn")
            $(".cornix-btn").css({"margin": "5px"});
        }
        function pollDOM () {
            function getUserID (){
                inboxtype = $("div.submenu__sections__section__title.flex-none.ember-view").text();
                if(inboxtype.includes("Go to new Inbox")){
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
                }
                } else {
                    const userid = $("div.flex.flex-row.items-center.gap-1").text();
                    function containsSpecialChars(value) {
                            const specialchr = /[`)`]/;
                        return specialchr.test(value);
                    }
                    if (containsSpecialChars(userid)){
                        let pattern = /\((.*?)\)/;
                        finalUserID = (userid.match(pattern))[1];
                    } else {
                        var finalUserID = userid.replace(/\n|\r/g, "").trim();
                    }
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
        setInterval(function(){
            while($('#UserBtn').length == 0){
                createButtons()
                pollDOM()
            }}, 5000)
    }, 5000);     
});