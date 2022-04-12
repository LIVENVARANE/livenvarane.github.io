function otherProjectsNavbarSelect(id) { //Yes this is awful I did it two years ago and I'm not proud (and I probably never were)
    if(document.getElementById(id) === null) throw 'NotFoundProjectItemError: The item specified was not found';

    var value = document.getElementById(id).innerHTML;
    if(value.includes("BasicDockHider")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("BasicDockHider").style.visibility = "visible";
    } else if(value.includes("Emer")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("Emer").style.visibility = "visible";
    } else if(value.includes("ETHSwitcher")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("ETHSwitcher").style.visibility = "visible";
    } else if(value.includes("HapticSystem")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("HapticSystem").style.visibility = "visible";
    } else if(value.includes("LIG")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("LIG").style.visibility = "visible";
    } else if(value.includes("Music")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("Music").style.visibility = "visible";
    } else if(value.includes("SlashSlash")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("SlashSlash").style.visibility = "visible";
    } else if(value.includes("Sowy")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("Sowy").style.visibility = "visible";
    } else if(value.includes("Project Ultima2")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("UltimaProject").style.visibility = "visible";
    } else if(value.includes("Veddy")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("Veddy").style.visibility = "visible";
    } else if(value.includes("WazeDecoy")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("WazeDecoy").style.visibility = "visible";
    } else if(value.includes("ELB")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("ELB").style.visibility = "visible";
    } else if(value.includes("EDBruteForce")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("EDBruteForce").style.visibility = "visible";
    } else if(value.includes("RLTrader")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("RLTrader").style.visibility = "visible";
    } else if(value.includes("DisquePlatine")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("DisquePlatine").style.visibility = "visible";
    } else {
        hideAllProjectNavbarDisplays();
        document.getElementById("Error").style.visibility = "visible";
    }
}

function hideAllProjectNavbarDisplays() {
    document.querySelector('.navbar-display').querySelectorAll('div').forEach(function(item) {
        item.style.visibility = "hidden";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    if(urlParams.has('goto')) {
        otherProjectsNavbarSelect(urlParams.get('goto'));
    }
});