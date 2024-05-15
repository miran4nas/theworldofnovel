$(document).ready(function () {
    $('body').css('overflow', 'hidden');

    setTimeout(function () {
        $('#loading-screen2').hide();
        $('#content2').show();

        $('body').css('overflow', '');
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part1p a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part2p a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part1r a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part2r a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part1t a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part2t a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part1d a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const anchors = document.querySelectorAll(".part2d a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            window.open(anchor.href, "_blank");
        });
    });
});

$(document).ready(function () {
    // jQuery to handle click events
    $('.part1p div a, .part2p div a').click(function (e) {
        e.preventDefault(); // Prevent default link behavior
        var imgUrl = $(this).find('img').attr('src'); // Get image source
        // Open the image in a new tab
        window.open($(this).attr('href'));
    });
});


var scrollbar = document.createElement('style');

scrollbar.innerHTML = `
    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        background: rgb(116, 98, 0);
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(228, 219, 103);
        box-shadow: 0px 0px 10px black;
        border-radius: 10px;
    }
`;

document.head.appendChild(scrollbar);

