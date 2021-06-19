function otherProjectsNavbarSelect(id) {
    var value = document.getElementById(id).innerHTML;
    if(value.includes("BasicDockHider")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("BasicDockHider").style.visibility = "visible";
    } else if(value.includes("Burgar King")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("BurgarKing").style.visibility = "visible";
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
    } else if(value.includes("SlashSlash")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("SlashSlash").style.visibility = "visible";
    } else if(value.includes("Sowy")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("Sowy").style.visibility = "visible";
    } else if(value.includes("<i>Project Ultima2</i>")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("UltimaProject").style.visibility = "visible";
    } else if(value.includes("Veddy")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("Veddy").style.visibility = "visible";
    } else if(value.includes("WazeDecoy")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("WazeDecoy").style.visibility = "visible";
    } else if(value.includes("WhatsUp")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("WhatsUp").style.visibility = "visible";
    } else if(value.includes("ELB")) {
        hideAllProjectNavbarDisplays();
        document.getElementById("ELB").style.visibility = "visible";
    } else {
        hideAllProjectNavbarDisplays();
        document.getElementById("Error").style.visibility = "visible";
    }
}

function hideAllProjectNavbarDisplays() {
    document.getElementById("BasicDockHider").style.visibility = "hidden";
    document.getElementById("BurgarKing").style.visibility = "hidden";
    document.getElementById("Emer").style.visibility = "hidden";
    document.getElementById("ETHSwitcher").style.visibility = "hidden";
    document.getElementById("HapticSystem").style.visibility = "hidden";
    document.getElementById("LIG").style.visibility = "hidden";
    document.getElementById("SlashSlash").style.visibility = "hidden";
    document.getElementById("Sowy").style.visibility = "hidden";
    document.getElementById("UltimaProject").style.visibility = "hidden";
    document.getElementById("Veddy").style.visibility = "hidden";
    document.getElementById("WazeDecoy").style.visibility = "hidden";
    document.getElementById("WhatsUp").style.visibility = "hidden";
    document.getElementById("ELB").style.visibility = "hidden";

    document.getElementById("Error").style.visibility = "hidden";
    document.getElementById("Select").style.visibility = "hidden";
}