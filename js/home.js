function animate(obj, initVal, lastVal, duration) {

    let startTime = null;



    //get the current timestamp and assign it to the currentTime variable

    let currentTime = Date.now();

    //pass the current timestamp to the step function

    const step = (currentTime) => {

        //if the start time is null, assign the current time to startTime

        if (!startTime) {
            startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed

        const progress = Math.min((currentTime - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above

        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value(lastVal)

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}

/*waypoints------------*/
var mainMenuLinks = document.querySelectorAll('#main-menu ul li a');
var menuItemsCount = mainMenuLinks.length;

function setActiveMenu(menuId) {

    for (var i = 0; i < menuItemsCount; i++) {


        mainMenuLinks[i].classList.remove("active");


    }


    var currentMenuItem = document.getElementById(menuId + "-menu-link");

    currentMenuItem.classList.add("active");

}


var didYouKnowShown = false;
var didYouKnow = document.getElementById('czy-wiesz-ze');


var didYouKnowCounter1 = document.getElementById('counter-place');
var didYouKnowCounter2 = document.getElementById('counter-disinformation');
var didYouKnowCounter3 = document.getElementById('counter-phising');
var didYouKnowCounter4 = document.getElementById('counter-students');
var didYouKnowCounter5 = document.getElementById('counter-email-fraud');

var didYouKnowCounterT1 = document.getElementById('counter-time-1');
var didYouKnowCounterT2 = document.getElementById('counter-time-2');

var didYouKnowCounter6 = document.getElementById('counter-safe-site');

//Czy wiesz, ze
var didYouKnowWaypoint = new Waypoint({
    element: document.getElementById('czy-wiesz-ze'),
    handler: function (direction) {


        if (direction == "down") {

            if (!didYouKnowShown) {
                didYouKnowShown = true;
                didYouKnow.classList.add("active");

                animate(didYouKnowCounter1, 0, 9, 1000);

                setTimeout(function () { animate(didYouKnowCounter2, 0, 390, 1000) }, 1000);
                setTimeout(function () { animate(didYouKnowCounter3, 0, 45, 1000) }, 2000);
                setTimeout(function () { animate(didYouKnowCounter4, 0, 17, 1000) }, 3000);
                setTimeout(function () { didYouKnowCounter4.innerHTML += ',9' }, 4100);

                

                setTimeout(function () { animate(didYouKnowCounter6, 0, 52, 1000) }, 4000);
                

                

                setTimeout(function () { animate(didYouKnowCounterT1, 0, 6, 500) }, 5000);
                setTimeout(function () { animate(didYouKnowCounterT2, 0, 17, 500) }, 5500);
                
            }


        } else {

        }

    },
    offset: "50%"
});

//Nasz cel
var ourGoalShown = false;
var OurGoalSection = document.getElementById('nasz-cel');


var ourGoalWaypoint = new Waypoint({
    element: document.getElementById('nasz-cel'),
    handler: function (direction) {


        if (direction == "down") {

            if (!ourGoalShown) {
                ourGoalShown = true;
                OurGoalSection.classList.add("active");
            }




        } else {

        }

    },
    offset: "60%"
});


//Alerty
// var alertsShown = false;
// var alertsSection = document.getElementById('alerty');


// var alertsWaypoint = new Waypoint({
//     element: document.getElementById('alerty'),
//     handler: function(direction) {


//         if(direction == "down") {

//             if(!alertsShown) {
//                 alertsShown = true;
//                 alertsSection.classList.add("active");
//             }




//         } else {

//         }

//     },
//     offset: "60%" 
// });



//Baza wiedzy
var knowledgeBaseShown = false;
var knowledgeBaseSection = document.getElementById('baza-wiedzy');


var knowledgeBaseWaypoint = new Waypoint({
    element: document.getElementById('baza-wiedzy'),
    handler: function (direction) {


        if (direction == "down") {

            if (!knowledgeBaseShown) {
                knowledgeBaseShown = true;
                knowledgeBaseSection.classList.add("active");
            }




        } else {

        }

    },
    offset: "50%"
});



//cyber kurs
var cyberCourseShown = false;
var cyberCourseSection = document.getElementById('cyberkurs');


var cyberCourseWaypoint = new Waypoint({
    element: document.getElementById('cyberkurs'),
    handler: function (direction) {


        if (direction == "down") {

            if (!cyberCourseShown) {
                cyberCourseShown = true;
                cyberCourseSection.classList.add("active");
            }




        } else {

        }

    },
    offset: "60%"
});

//Miniserial
//cyber kurs
var miniSeriesShown = false;
var miniSeriesSection = document.getElementById('miniserial');


var miniSeriesWaypoint = new Waypoint({
    element: document.getElementById('miniserial'),
    handler: function (direction) {


        if (direction == "down") {

            if (!miniSeriesShown) {
                miniSeriesShown = true;
                miniSeriesSection.classList.add("active");
            }




        } else {

        }

    },
    offset: "60%"
});


//nasi eksperci
var ourExpertsShown = false;
var ourExpertsSection = document.getElementById('nasi-eksperci');


var ourExpertsWaypoint = new Waypoint({
    element: document.getElementById('nasi-eksperci'),
    handler: function (direction) {


        if (direction == "down") {

            if (!ourExpertsShown) {
                ourExpertsShown = true;
                ourExpertsSection.classList.add("active");
            }




        } else {

        }

    },
    offset: "60%"
});



//bezpieczenstwo
var securityShown = false;
var securitySection = document.getElementById('bezpieczenstwo');


var securityWaypoint = new Waypoint({
    element: document.getElementById('bezpieczenstwo'),
    handler: function (direction) {


        if (direction == "down") {

            if (!securityShown) {
                securityShown = true;
                securitySection.classList.add("active");
            }




        } else {

        }

    },
    offset: "60%"
});


//projekty-spoleczne
var socialProjectsShown = false;
var socialProjectsSection = document.getElementById('projekty-spoleczne');


var securityWaypoint = new Waypoint({
    element: document.getElementById('projekty-spoleczne'),
    handler: function (direction) {


        if (direction == "down") {

            if (!socialProjectsShown) {
                socialProjectsShown = true;
                socialProjectsSection.classList.add("active");
            }




        } else {

        }

    },
    offset: "60%"
});

/* menu waypoints------------*/

var menuWaypointCzyWiesze = new Waypoint({
    element: document.getElementById("czy-wiesz-ze"),
    handler: function (direction) {

        //setActiveMenu("nasz-cel");



        setActiveMenu("czy-wiesz-ze");


    },
    offset: -10
});

var menuWaypointNaszCel = new Waypoint({
    element: document.getElementById("nasz-cel"),
    handler: function (direction) {

        //setActiveMenu("nasz-cel");



        setActiveMenu("nasz-cel");


    },
    offset: -10
});


// var menuWaypointAlerty  = new Waypoint({
//     element:document.getElementById("alerty"),
//     handler: function(direction) {

//         //setActiveMenu("nasz-cel");


//         setActiveMenu("alerty");


//     },
//     offset: -10 
// });

var menuWaypointBazaWiedzy = new Waypoint({
    element: document.getElementById("baza-wiedzy"),
    handler: function (direction) {

        //setActiveMenu("nasz-cel");



        setActiveMenu("baza-wiedzy");


    },
    offset: -10
});

var menuWaypointCyberKurs = new Waypoint({
    element: document.getElementById("cyberkurs"),
    handler: function (direction) {



        setActiveMenu("cyberkurs");


    },
    offset: -10
});

var menuWaypointNasiEksperci = new Waypoint({
    element: document.getElementById("nasi-eksperci"),
    handler: function (direction) {



        setActiveMenu("nasi-eksperci");


    },
    offset: -10
});

var menuWaypointBezpieczenstwo = new Waypoint({
    element: document.getElementById("bezpieczenstwo"),
    handler: function (direction) {



        setActiveMenu("bezpieczenstwo");


    },
    offset: -10
});

var menuWaypointProjektySpoleczne = new Waypoint({
    element: document.getElementById("projekty-spoleczne"),
    handler: function (direction) {



        setActiveMenu("projekty-spoleczne");


    },
    offset: -10
});


/* end menu waypoints------------*/





// var alertsSlide = new Glide('#alerts-slide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 3,
//     gap: 0,

//     breakpoints: {
//         1090: {
//             perView: 2
//         },
//         767: {
//             perView: 2
//         },
//         568: {
//             perView: 1
//         }

//     }
// });


// alertsSlide.on('run', function(event) {


//     var slideId = alertsSlide.index;


// });

// var alertsSlide = alertsSlide.mount();




var securitySliderWrapperInitialWrapper = document.getElementById('security-boxes');
var securitySliderWrapperInitial = document.getElementById('security-boxes-wrapper').outerHTML;


var securitySliderStarted = false;
var securitySliderToReset = false;


var securitySliderMode = 'desktop';
if (window.innerWidth > 768) {

} else {
    securitySliderMode = 'mobile'
}


function setupSecuritySlider() {

    

    var securitySliderModeUpdated;


    if (window.innerWidth > 768) {
        securitySliderModeUpdated = 'desktop';
    } else {
        securitySliderModeUpdated = 'mobile';
    }

    if (securitySliderModeUpdated == securitySliderMode && securitySliderStarted === true) {

    } else {





        securitySliderMode = securitySliderModeUpdated;


        if (securitySliderStarted === true) {

            console.log('reset security', securitySliderWrapperInitial);

            if (typeof secSlider !== 'undefined') {
                console.log('destroy existing security slider');
                secSlider.destroy();
                
            }


            

            

            //console.log('securitySliderWrapperInitial', securitySliderWrapperInitial);

            securitySliderWrapperInitialWrapper.innerHTML = securitySliderWrapperInitial;

            

        }

        console.log('commencing security content setup');

        securitySliderStarted = true;

        var securitySliderWrapper = document.querySelector('#security-boxes-wrapper .glide__slides');

        var secSlide1 = document.querySelector('.security-box:nth-child(1)');
        var secSlide2 = document.querySelector('.security-box:nth-child(2)');
        var secSlide3 = document.querySelector('.security-box:nth-child(3)');
        var secSlide4 = document.querySelector('.security-box:nth-child(4)');
        var secSlide5 = document.querySelector('.security-box:nth-child(5)');
        var secSlide6 = document.querySelector('.security-box:nth-child(6)');
        var secSlide7 = document.querySelector('.security-box:nth-child(7)');
        var secSlide8 = document.querySelector('.security-box:nth-child(8)');
        var secSlide9 = document.querySelector('.security-box:nth-child(9)');
        var secSlide10 = document.querySelector('.security-box:nth-child(10)');
        var secSlide11 = document.querySelector('.security-box:nth-child(11)');
        var secSlide12 = document.querySelector('.security-box:nth-child(12)');
        var secSlide13 = document.querySelector('.security-box:nth-child(13)');
        var secSlide14 = document.querySelector('.security-box:nth-child(14)');
        var secSlide15 = document.querySelector('.security-box:nth-child(15)');
        var secSlide16 = document.querySelector('.security-box:nth-child(16)');


        if (window.innerWidth > 768) {

            securitySliderWrapper.insertAdjacentHTML('afterbegin', '<div id="sec-lg-slide-1"></div><div id="sec-lg-slide-2"></div>');

            var secLgSlide1 = document.getElementById('sec-lg-slide-1');
            secLgSlide1.appendChild(secSlide1);
            secLgSlide1.appendChild(secSlide2);
            secLgSlide1.appendChild(secSlide3);
            secLgSlide1.appendChild(secSlide4);
            secLgSlide1.appendChild(secSlide5);
            secLgSlide1.appendChild(secSlide6);
            secLgSlide1.appendChild(secSlide7);
            secLgSlide1.appendChild(secSlide8);
            secLgSlide1.appendChild(secSlide9);

            var secLgSlide2 = document.getElementById('sec-lg-slide-2');
            secLgSlide2.appendChild(secSlide10);
            secLgSlide2.appendChild(secSlide11);
            secLgSlide2.appendChild(secSlide12);
            secLgSlide2.appendChild(secSlide13);
            secLgSlide2.appendChild(secSlide14);
            secLgSlide2.appendChild(secSlide15);
            secLgSlide2.appendChild(secSlide16);

            var secSlider = new Glide('#security-boxes-wrapper', {
                type: 'slider',
                startAt: 0,
                perView: 1,
                gap: 40,
                rewind: false


            });

            var secSlider = secSlider.mount();

        } else {
            var secSlider = new Glide('#security-boxes-wrapper', {
                type: 'slider',
                startAt: 0,
                perView: 1,
                gap: 0


            });

            var secSlider = secSlider.mount();

        }

    }
}

setupSecuritySlider();


window.addEventListener('resize', setupSecuritySlider);


//Experts slider
var expertsSliderWrapper = document.querySelector('#experts-sm .glide__slides');


var expSlide1 = document.querySelector('.experts-sm-slide:nth-child(1)');
var expSlide2 = document.querySelector('.experts-sm-slide:nth-child(2)');
var expSlide3 = document.querySelector('.experts-sm-slide:nth-child(3)');
var expSlide4 = document.querySelector('.experts-sm-slide:nth-child(4)');
var expSlide5 = document.querySelector('.experts-sm-slide:nth-child(5)');
var expSlide6 = document.querySelector('.experts-sm-slide:nth-child(6)');
var expSlide7 = document.querySelector('.experts-sm-slide:nth-child(7)');
var expSlide8 = document.querySelector('.experts-sm-slide:nth-child(8)');
var expSlide9 = document.querySelector('.experts-sm-slide:nth-child(9)');
var expSlide10 = document.querySelector('.experts-sm-slide:nth-child(10)');
var expSlide11 = document.querySelector('.experts-sm-slide:nth-child(11)');
var expSlide12 = document.querySelector('.experts-sm-slide:nth-child(12)');


if (window.innerWidth > 768) {

    expertsSliderWrapper.insertAdjacentHTML('afterbegin', '<div id="exp-lg-slide-1"></div><div id="exp-lg-slide-2"></div>');

    var sexpLgSlide1 = document.getElementById('exp-lg-slide-1');
    sexpLgSlide1.appendChild(expSlide1);
    sexpLgSlide1.appendChild(expSlide2);
    sexpLgSlide1.appendChild(expSlide3);
    sexpLgSlide1.appendChild(expSlide4);
    sexpLgSlide1.appendChild(expSlide5);
    sexpLgSlide1.appendChild(expSlide6);


    var expLgSlide2 = document.getElementById('exp-lg-slide-2');
    expLgSlide2.appendChild(expSlide7);
    expLgSlide2.appendChild(expSlide8);
    expLgSlide2.appendChild(expSlide9);
    expLgSlide2.appendChild(expSlide10);
    expLgSlide2.appendChild(expSlide11);
    expLgSlide2.appendChild(expSlide12);


    var expSlider = new Glide('#experts-sm', {
        type: 'slider',
        startAt: 0,
        perView: 1,
        gap: 0,
        rewind: false


    });

    var expSlider = expSlider.mount();

} else {

    expSlide6.remove();

    var expSlider = new Glide('#experts-sm', {
        type: 'slider',
        startAt: 0,
        perView: 1,
        gap: 0


    });

    var expSlider = expSlider.mount();

}


//Nasi eksperci
//Experts slider
var expertsSlider = new Glide('#experts-slider', {
    type: 'slider',
    startAt: 0,
    perView: 1,
    gap: 0,

    breakpoints: {
        1090: {
            perView: 1
        },
        767: {
            perView: 1
        }

    }
});

expertsSlider.on('run', function (event) {

    var slideId = expertsSlider.index;


});





var expertsLinks = document.getElementsByClassName('show-expert');
var expertsLinksCount = expertsLinks.length;


var expertsSliderWrapper = document.getElementById("experts-slider-wrapper");


for (var ex = 0; ex < expertsLinksCount; ex++) {


    var expert = expertsLinks[ex];


    expert.onclick = function (event) {

        event.preventDefault();



        var expertId = this.dataset.expert;
        var expertSlideId = this.dataset.slide;


        if (window.innerWidth < 769 && expertSlideId > 5) {
            expertSlideId = expertSlideId;


        }

        expertsSliderWrapper.classList.add("active");

        setTimeout(function () {

            expertsSlider.mount();

            //go to slide
            expertsSlider.go("=" + expertSlideId);

            expertsSliderWrapper.classList.add("activeVisual");

            //scrollto //#nasi-eksperci
            window.open("#nasi-eksperci", "_self");

        }, 200);

        setTimeout(function () {


            expertsSliderWrapper.classList.add("activeVisualEnd");

        }, 1200);


    };



    var allExpertsLinks = document.getElementsByClassName('all-experts-link');

    for (var e = 0; e < allExpertsLinks.length; e++) {

        var allExpertLink = allExpertsLinks[e];

        allExpertLink.onclick = function (event) {

            event.preventDefault();
            expertsSliderWrapper.classList.remove("activeVisualEnd");


            setTimeout(function () {

                expertsSliderWrapper.classList.remove("activeVisual");


            }, 200);

            setTimeout(function () {

                expertsSliderWrapper.classList.remove("active");
                expertsSlider.destroy();

            }, 1200);

        }

    }


    //Close experts slider
    var closeExpersSliderBtn = document.getElementById("close-experts-slider");

    closeExpersSliderBtn.onclick = function (event) {

        event.preventDefault();

        expertsSliderWrapper.classList.remove("activeVisualEnd");


        setTimeout(function () {

            expertsSliderWrapper.classList.remove("activeVisual");


        }, 200);

        setTimeout(function () {

            expertsSliderWrapper.classList.remove("active");
            expertsSlider.destroy();

        }, 1200);
    }
}
