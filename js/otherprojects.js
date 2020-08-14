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

    document.getElementById("Error").style.visibility = "hidden";
    document.getElementById("Select").style.visibility = "hidden";
}