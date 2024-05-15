
$(document).ready(function () {
    $('body').css('overflow', 'hidden');

    setTimeout(function () {
        $('#loading-screen1').hide();
        $('#content1').show();

        $('body').css('overflow', '');
    }, 1000);
});


const aboutUsButton = $("#biz");
const modal = $("#myModal");
const closeButton = $(".close");
aboutUsButton.on("click", function () {
    modal.css("display", "block");
});

closeButton.on("click", function () {
    modal.css("display", "none");
});

$(window).on("click", function (event) {
    if (event.target === modal[0]) {
        modal.css("display", "none");
    }
});



$(document).ready(function () {
    $(".application a").click(function (event) {
        event.preventDefault();
        window.open($(this).attr("href"), "_blank");
    });
});


/* training 1. ders js*/

function calculateAverage() {
    var table = document.getElementById("ratingTable");
    var rows = table.getElementsByTagName("tr");
    var total = 0;
    var count = 0;

    // تجاوز العناوين
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var cells = row.getElementsByTagName("td");
        var rating = parseFloat(cells[1].getElementsByTagName("input")[0].value);
        if (!isNaN(rating)) {
            total += rating;
            count++;
        }
    }

    var average = total / count;
    document.getElementById("average").innerText = "the average: " + average.toFixed(2);
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













