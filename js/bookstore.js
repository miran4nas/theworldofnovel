

$(document).ready(function () {
    $('.iframe1').on('load', function () {
        var iframeDoc = $(this).contents();
        var form = iframeDoc.find('form');

        if (form.length) {
            form.on('submit', function (event) {
                event.preventDefault();
            });
        }
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







