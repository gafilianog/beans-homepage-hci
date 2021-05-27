window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

var color = ["#59981A", "#81B622", "#3D550C", "#2F5233", "#76B947"];
var i = 0;
document.getElementById("page-top").addEventListener("click",
    function() {
        i = i < color.length ? ++i : 0;
        document.getElementById("page-top").style.background = color[i];
    })