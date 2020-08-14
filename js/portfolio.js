function configPortfolioHeader() {
    document.getElementById("header-name").innerHTML = "Portfolio";
    document.getElementById("header-name").style.color = "white";
    document.getElementById("header-frame").style.backgroundColor = "#1e272e";
    document.getElementById("header-buttons").style.color = "white";
    document.getElementById("header-buttons1").style.color = "white";
    document.getElementById("header-buttons2").style.color = "white";
    document.getElementById("header-buttons3").style.color = "white";
}

window.onload = configPortfolioHeader;

function portfolioLink(where) {
    if(where == 1) {
        window.open("portfolio?key=incrustationminecraft", '_top');
    }
}