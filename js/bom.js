function newDoc() {
    window.location.assign("https://www.w3schools.com")
}

function goBack() {
    window.history.back();
}

function navig() {
    console.log(navigator.appName);
    console.log(navigator.appCodeName);
    console.log(navigator.platform);
    console.log(navigator.language);
    console.log(navigator.onLine);
}



function getCookie(cname) {
    console.log(document.cookie);
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    console.log(cname + "=" + cvalue + ";" + expires + ";path=/");
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}