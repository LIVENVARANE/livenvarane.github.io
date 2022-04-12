function linkTo(page, where) {
    if(where == "here") {
        window.open(page, '_top');
    }
    else if(where == "newpage") {
        window.open(page, '_blank');
    }
}