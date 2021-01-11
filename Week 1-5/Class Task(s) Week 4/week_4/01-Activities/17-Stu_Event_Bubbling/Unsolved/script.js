
var imgEl = document.querySelector(".carouselbox");
var nextEl = document.querySelector(".next");
var prevEl = document.querySelector(".prev");

var index = 0;
var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
  ];


imgEl.setAttribute("style","background-image: url("+images[0]+")");

var currentImage;
function navigation(direction){
    index = index + direction;
        if (index < 0) {
            index = images.length -1;
        } else if (index > images.length -1) {
            index =0;
        }
}

nextEl.onClick = function(event) {
    event.stopPropagation();

    navigate(1);
}

prevEl.onClick = function(event) {
    event.stopPropagation();

    navigate(-1);
}
