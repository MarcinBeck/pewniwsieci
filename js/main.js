var rellax = new Rellax('.rellax', {
    speed: 1,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

//header


window.onload = function () {


    var header = document.getElementById('header');
    var menuToggleWrapper = document.getElementById("menu-toggle-wrapper");
    var menuToggleX = document.getElementById("menu-toggle");
    var mainMenu = document.getElementById("menu-layer");
    var mainMenuLinks = document.getElementById("main-menu-links");

    var menuLayer = document.getElementById("menu-layer");

    var waypoint = new Waypoint({
        element: document.getElementById('start'),
        handler: function (direction) {

            if (direction == "up") {
                header.classList.remove("solid");
                menuLayer.classList.remove("solid");
                menuToggleWrapper.classList.remove("solid");
            } else {
                header.classList.add("solid");
                menuLayer.classList.add("solid");
                menuToggleWrapper.classList.add("solid");
            }

        },
        offset: -20
    });




    var headerWrapper = document.getElementById("header");


    var menuToggles = document.getElementsByClassName("menu-toggle");
    for (var i = 0; i < menuToggles.length; i++) {
        var menuToggle = menuToggles.item(i);

        menuToggle.onclick = function (e) {
            e.preventDefault();
            this.classList.toggle("active");

            headerWrapper.classList.toggle("active");

            mainMenu.classList.toggle("active");


            setTimeout(function () {

                mainMenuLinks.classList.toggle("active");

            }, 500);

        };

    }

    var allMenuLinks = document.querySelectorAll("#main-menu a");


    for (var ml = 0; ml < allMenuLinks.length; ml++) {


        var mainMenuLinkPos = allMenuLinks[ml];



        mainMenuLinkPos.onclick = function (e) {





            headerWrapper.classList.remove("active");

            mainMenu.classList.remove("active");

            menuToggleX.classList.remove("active");


            setTimeout(function () {

                mainMenuLinks.classList.remove("active");

            }, 500);

        };


    }














    //Video slide
    var videoSlider = new Glide('#video-slider', {
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


    videoSlider.on('run', function (event) {


        var slideId = videoSlider.index;


    });

    var videoSlider = videoSlider.mount();


    //Video slide2
    var videoSlider2 = new Glide('#video-slider-2', {
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


    videoSlider2.on('run', function (event) {


        var slideId = videoSlider2.index;


    });

    var videoSlider2 = videoSlider2.mount();


};






//Video
var videoButtons = document.getElementsByClassName('play-video-btn');


for (var vx = 0; vx < videoButtons.length; vx++) {


    var videoButton = videoButtons[vx];



    videoButton.onclick = function (event) {

        event.preventDefault();

        var videoButtonId = this.dataset.video;
        var videoYtId = this.dataset.youtube;
        var videoTitle = this.dataset.videotitle;

        var videoWrapper = document.getElementById("video-" + videoButtonId);

        var videoCaption = document.getElementById("video-caption-" + videoButtonId);

        videoCaption.classList.add("active");


        videoWrapper.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoYtId + '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

        //statistic
        gtag('event', 'video_view', {
            'event_category': "video",
            'event_label': "video_play",
            'value': videoTitle
        });

    };



}

