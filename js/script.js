var nedtelling = new Date("July 15, 2022 12:00:00").getTime();

var x = setInterval(function() {
    var now = new Date ().getTime();
    var distance = nedtelling - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60* 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("nedtelling").innerHTML = days + " Dager " + hours + " timer " + minutes + " minutter " + seconds + " sekunder ";
}
)

