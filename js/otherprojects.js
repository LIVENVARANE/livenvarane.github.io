function otherProjectsNavbarSelect(projectName) {
    var error = true;
    hideAllProjectNavbarDisplays();
    document.querySelector('.navbar-display').querySelectorAll('div').forEach(function(item) {
        if(projectName == item.getAttribute('name')) {
            item.style.visibility = 'visible';
            error = false;
        }
    });
    if(error) {
        document.getElementById('error').style.visibility = 'visible';
        throw 'NotFoundProjectItemError: The item specified was not found';
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

    var i = 0;
    document.querySelector('.navbar').querySelectorAll('div').forEach(function(item) {
        i++;
        item.setAttribute('tabindex', i);
    });
});