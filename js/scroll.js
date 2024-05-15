window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


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

