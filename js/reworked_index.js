var lastValTitle;
var lastValBody;

document.addEventListener('scroll', function() {
    const title = document.getElementById('title');
    const bodyWrapper = document.getElementById('body-wrapper');
    const firstHider = document.getElementById('bw-first');
    const secondHider = document.getElementById('bw-second');
    const thirdHider = document.getElementById('bw-third');
    const firstMedia = document.getElementById('bwi-first');
    const secondMedia = document.getElementById('bwi-second');
    const thirdMedia = document.getElementById('bwi-third');
    const franceWrapper = document.getElementById('france-wrapper');
    const pinnedText = document.getElementById('pinned');
    const firstItem = document.getElementById('iw-first');
    const secondItem = document.getElementById('iw-second');
    const thirdItem = document.getElementById('iw-third');
    const fourthItem = document.getElementById('iw-fourth');
    const fifthItem = document.getElementById('iw-fifth');
    const sixthItem = document.getElementById('iw-sixth');
    const scrollReminder = document.getElementById('scroll-reminder');
    const lvnLetter = document.getElementById('lvn-letter');

    //console.log(window.scrollY);

    if(window.scrollY <= 1000) {
        title.style.transform = 'translateY(-' + (window.scrollY / 5) + 'px)';

        lastValTitle = window.scrollY / 5;

        bodyWrapper.style.opacity = 0;
        bodyWrapper.style.top = '50%';
        firstHider.style.opacity = 1;
        secondHider.style.opacity = 1;
        thirdHider.style.opacity = 1;
        firstMedia.style.opacity = 0;
        secondMedia.style.opacity = 0;
        thirdMedia.style.opacity = 0;
        franceWrapper.style.opacity = 0;
        lvnLetter.style.opacity = 0;

        if(window.scrollY > 500) {
            bodyWrapper.style.transform = 'translateY(-' + ((window.scrollY - 500) / 12) + '%)';
            bodyWrapper.style.opacity = (window.scrollY - 500) / 500;

            lastValBody = (window.scrollY - 500) / 12;
        } else { //0 -> 500
            title.style.background = 'linear-gradient(0deg, rgb(' + Math.round(window.scrollY / 7) + ' ' + Math.round(window.scrollY / 7) + ' ' + Math.round(window.scrollY / 7) + ') 0%, rgba(217,217,217,1) 100%)';
            title.style.webkitBackgroundClip = 'text';
            title.style.backgroundClip = 'text';
        }
    } else if(window.scrollY <= 1300) { //1000 -> 1300 (300)
        bodyWrapper.style.transform = 'translateY(calc(-' + lastValBody + '% + -' + ((window.scrollY - 1000) / 10) + 'px))';

        firstHider.style.opacity = 1;
        secondHider.style.opacity = 1;
        thirdHider.style.opacity = 1;
        firstMedia.style.opacity = 0;
        secondMedia.style.opacity = 0;
        thirdMedia.style.opacity = 0;
        franceWrapper.style.opacity = ((window.scrollY - 1000) / 300);
        bodyWrapper.style.opacity = 1;
        bodyWrapper.style.top = '50%';

    } else if(window.scrollY <= 1500) { //1300 -> 1500 (200)
        firstHider.style.opacity = 1 - ((window.scrollY - 1300) / 200);

        firstMedia.style.opacity = ((window.scrollY - 1300) / 200);
        firstMedia.style.transform = 'translateX(-' + (10 - (window.scrollY - 1300) / 20) + 'px)';

        franceWrapper.style.opacity = 1;
    } else if(window.scrollY <= 1700) { //1500 -> 1700 (200)
        firstHider.style.opacity = 0;
        secondHider.style.opacity = 1 - ((window.scrollY - 1500) / 200);

        firstMedia.style.opacity = 1;
        firstMedia.style.transform = 'translateX(0px)';
        secondMedia.style.opacity = ((window.scrollY - 1500) / 200);
        secondMedia.style.transform = 'translateX(-' + (10 - (window.scrollY - 1500) / 20) + 'px)';

        franceWrapper.style.opacity = 1;

    } else if(window.scrollY <= 1900) { //1700 -> 1900 (200)
        secondHider.style.opacity = 0;
        thirdHider.style.opacity = 1 - ((window.scrollY - 1700) / 200);

        secondMedia.style.opacity = 1;
        secondMedia.style.transform = 'translateX(0px)';
        thirdMedia.style.opacity = ((window.scrollY - 1700) / 200);
        thirdMedia.style.transform = 'translateX(-' + (10 - (window.scrollY - 1700) / 20) + 'px)';

        franceWrapper.style.opacity = 1;

        title.style.transform = 'translateY(-' + lastValTitle + 'px)';
        bodyWrapper.style.opacity = 1;
        bodyWrapper.style.top = '50%';

    } else {
        thirdHider.style.opacity = 0;

        thirdMedia.style.opacity = 1;
        thirdMedia.style.transform = 'translateX(0px)';

        if(window.scrollY >= 2600 && window.scrollY <= 3600) { //2600 -> 3600 (1000)
            lvnLetter.style.opacity = 0;

            title.style.transform = 'translateY(calc(-' + lastValTitle + 'px - ' + (window.scrollY - 2600) / 7 + 'px))';
            bodyWrapper.style.top = 'calc(50% - ' + (window.scrollY - 2600) / 1.5 + 'px)';

            pinnedText.style.letterSpacing = '10px';
            pinnedText.style.opacity = 0;
            pinnedText.innerHTML = 'PINNED';
            if(window.scrollY >= 3400) { //3400 -> 3600 (200)
                bodyWrapper.style.opacity = 1 - ((window.scrollY - 3400) / 200);
            }
        } else if(window.scrollY >= 3400) {
            bodyWrapper.style.opacity = 0;

            if(window.scrollY <= 3700) { //3400 -> 3700 (300)
                pinnedText.style.letterSpacing = (window.scrollY - 3400) / 30 / 2 + 'px';
                pinnedText.style.opacity = (window.scrollY - 3400) / 300;
                pinnedText.innerHTML = 'PINNED';

                firstItem.style.transform = 'rotate3D(25, 1, 4, 50deg)';
                firstItem.style.opacity = 0;
                firstItem.style.cursor = 'default';
            }
            else if(window.scrollY <= 4400) { //3700 -> 4400 (700)
                pinnedText.innerHTML = 'PINNED.';

                firstItem.style.transform = 'rotate3D(25, 1, 4, ' + (50 - (window.scrollY - 3700) / 700 * 50) + 'deg)';
                firstItem.style.opacity = (window.scrollY - 3700) / 700;
                firstItem.style.cursor = 'pointer';

                secondItem.style.transform = 'rotate3D(25, 1, 4, 50deg)';
                secondItem.style.opacity = 0;
                secondItem.style.cursor = 'default';
            } else if(window.scrollY <= 5100) { //4400 -> 5100 (700)
                pinnedText.innerHTML = 'PINNED..';

                firstItem.style.opacity = 1;
                firstItem.style.transform = 'rotate3D(0, 0, 0, 0deg)';

                secondItem.style.transform = 'rotate3D(25, 1, 4, ' + (50 - (window.scrollY - 4400) / 700 * 50) + 'deg)';
                secondItem.style.opacity = (window.scrollY - 4400) / 700;
                secondItem.style.cursor = 'pointer';

                thirdItem.style.transform = 'rotate3D(25, 1, 4, 50deg)';
                thirdItem.style.opacity = 0;
                thirdItem.style.cursor = 'default';
            } else if(window.scrollY <= 5800) { //5100 -> 5800 (700)
                pinnedText.innerHTML = 'PINNED...';

                secondItem.style.opacity = 1;
                secondItem.style.transform = 'rotate3D(0, 0, 0, 0deg)';

                thirdItem.style.transform = 'rotate3D(25, 1, 4, ' + (50 - (window.scrollY - 5100) / 700 * 50) + 'deg)';
                thirdItem.style.opacity = (window.scrollY - 5100) / 700;
                thirdItem.style.cursor = 'pointer';

                fourthItem.style.transform = 'rotate3D(25, 1, 4, 50deg)';
                fourthItem.style.opacity = 0;
                fourthItem.style.cursor = 'default';
            } else if(window.scrollY <= 6500) { //5800 -> 6500 (700)
                thirdItem.style.opacity = 1;
                thirdItem.style.transform = 'rotate3D(0, 0, 0, 0deg)';

                fourthItem.style.transform = 'rotate3D(25, 1, 4, ' + (50 - (window.scrollY - 5800) / 700 * 50) + 'deg)';
                fourthItem.style.opacity = (window.scrollY - 5800) / 700;
                fourthItem.style.cursor = 'pointer';

                fifthItem.style.transform = 'rotate3D(25, 1, 4, 50deg)';
                fifthItem.style.opacity = 0;
                fifthItem.style.cursor = 'default';
            } else if(window.scrollY <= 7200) { //6500 -> 7200 (700)
                fourthItem.style.opacity = 1;
                fourthItem.style.transform = 'rotate3D(0, 0, 0, 0deg)';

                fifthItem.style.transform = 'rotate3D(25, 1, 4, ' + (50 - (window.scrollY - 6500) / 700 * 50) + 'deg)';
                fifthItem.style.opacity = (window.scrollY - 6500) / 700;
                fifthItem.style.cursor = 'pointer';

                sixthItem.style.transform = 'rotate3D(25, 1, 4, 50deg)';
                sixthItem.style.opacity = 0;
                sixthItem.style.cursor = 'default';
            } else if(window.scrollY <= 7900) { //7200 -> 7900 (700)
                fifthItem.style.opacity = 1;
                fifthItem.style.transform = 'rotate3D(0, 0, 0, 0deg)';

                sixthItem.style.transform = 'rotate3D(25, 1, 4, ' + (50 - (window.scrollY - 7200) / 700 * 50) + 'deg)';
                sixthItem.style.opacity = (window.scrollY - 7200) / 700;
                sixthItem.style.cursor = 'pointer';

                lvnLetter.style.opacity = 0;
                scrollReminder.classList.remove('hide');
            } else {
                sixthItem.style.transform = 'rotate3D(0, 0, 0, 0deg)';

                scrollReminder.classList.add('hide');
                lvnLetter.style.opacity = 0.2;
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.scroll(0, 0);
    }, 300);
});