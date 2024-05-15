$(document).ready(function () {
    $('body').css('overflow', 'hidden');

    setTimeout(function () {
        $('#loading-screen3').css('display', 'none');
        $('#content3').css('display', 'block');
        $('body').css('overflow', '');
    }, 1000);
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




