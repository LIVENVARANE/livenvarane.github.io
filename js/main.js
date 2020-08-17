function randomColor() {
    var rdm = Math.floor(Math.random() * Math.floor(14));
    var UIColor;
    var UILogo;
    switch (rdm) {
        case 1:
            UIColor = "#1abc9c";
            UILogo = "logo-1.jpg";
            break;
        case 2:
            UIColor = "#2ecc71";
            UILogo = "logo-2.jpg";
            break;
        case 3:
            UIColor = "#3498db";
            UILogo = "default.jpg";
            break;
        case 4:
            UIColor = "#9b59b6";
            UILogo = "logo-4.jpg";
            break;
        case 5:
            UIColor = "#16a085";
            UILogo = "logo-5.jpg";
            break;
        case 6:
            UIColor = "#27ae60";
            UILogo = "logo-6.jpg";
            break;
        case 7:
            UIColor = "#2980b9";
            UILogo = "logo-7.jpg";
            break;
        case 8:
            UIColor = "#8e44ad";
            UILogo = "logo-8.jpg";
            break;
        case 9:
            UIColor = "#f1c40f";
            UILogo = "logo-9.jpg";
            break;
        case 10:
            UIColor = "#e67e22";
            UILogo = "logo-10.jpg";
            break;
        case 11:
            UIColor = "#e74c3c";
            UILogo = "logo-11.jpg";
            break;
        case 12:
            UIColor = "#f39c12";
            UILogo = "logo-12.jpg";
            break;
        case 13:
            UIColor = "#d35400";
            UILogo = "logo-13.jpg";
            break;
        case 0:
            UIColor = "#c0392b";
            UILogo = "logo-14.jpg";
            break;
    }

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page != "otherprojects.html") {
        document.body.style.backgroundColor = UIColor;
    }
    else {
        document.getElementById("op-navbar").style.color = UIColor;
        const ndTitleClass = document.querySelectorAll('.nd-title');
        ndTitleClass.forEach(element => {
            element.style.color = UIColor;
        });

        const ndAClass = document.querySelectorAll('#nd-a');
        ndAClass.forEach(element => {
            element.style.color = UIColor;
        });
    }

    document.getElementById("ui-logo").setAttribute("src", "assets/logos/" + UILogo)

    document.getElementById("hb-title").style.color = UIColor;
    document.getElementById("hb-title2").style.color = UIColor;
    document.getElementById("home-socialmedia1").style.color = UIColor;
    document.getElementById("home-socialmedia2").style.color = UIColor;
    document.getElementById("home-socialmedia3").style.color = UIColor;
    document.getElementById("home-socialmedia4").style.color = UIColor;
}


function linkTo(page, where) {
    if(where == "here") {
        window.open(page, '_top');
    }
    else if(where == "newpage") {
        window.open(page, '_blank');
    }
}

function mobileBurger() {
    var burger = document.getElementById("h-burger");
    var mm = document.getElementById("mobilemenu");
    if(burger.style.visibility == "hidden") { //show mm
        mm.style.visibility = "hidden";
        burger.style.visibility = "visible";
    }
    else {
        burger.style.visibility = "hidden";
        mm.style.visibility = "visible";
    }
}