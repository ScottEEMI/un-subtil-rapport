// EFFET DE pornup
let indexPop = -1;
let timeR = 2 * 600000;
let containerPop = $(".poporn");
setInterval(function(){
    containerPop.append("<div style='left: "+ft_rand(50)+"%;top:"+ft_rand(45)+"%;' class='border-pop'><div onclick='ft_remove(this.parentElement)' class='deletepop'>X - DELETE</div><div class='background poporn-size poporn-"+ft_rand(11)+"'></div></div>");
}, timeR);

function ft_remove(me) {
  me.remove();
  indexPop++;
  console.log(indexPop);
  $("#pop-score").html(indexPop);
}
// EFFET DE SCROLL

let container = document.querySelectorAll(".container-card");
console.log(container);
ft_class();
function ft_class() {
    for (i = 0; i < container.length; i++){
        var rand_pos = "pos-" + ft_rand(10);
        console.log("pos elem "+i+" : " +rand_pos);
        $("#element-"+i).addClass(rand_pos);
    }
}

window.addEventListener('scroll', ft_scroll);
function ft_scroll() {
    var eTop;
    var element;
    for (i = 0; i < container.length; i++){

        // console.log(i);


        element = $(`#element-${i}`);
        eTop = element.offset().top;
        // console.log(eTop);
                var pos = eTop - $(window).scrollTop();
                // console.log(element + ".pos = " + pos);
                ft_resize(element, pos);
    }

}

function ft_resize(myElement, pos) {
    var appBot = "750";
    if( isMobile.iOS() || isMobile.Android() ){
        appBot = "1550";
    }
        if (pos > "10" && pos < appBot){
            myElement.addClass("card-active");
        }
        else{
            myElement.removeClass("card-active");
        }
};

// mobile test
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
};

// random number between 1 and x

function ft_rand(x){
    return Math.floor((Math.random() * x) + 1);
}

// DARK MODE
// function swapColor(){
//     console.log("dark");

//     $(".container").toggleClass("container-dark");
//     $(".title-card-img").toggleClass("title-card-img-dark");
//     $(".title-card-txt").toggleClass("title-card-txt-dark");
//     $(".card-txt").toggleClass("card-txt-dark");
//     $(".left-card").toggleClass("left-card-dark");
//     $(".container-card").toggleClass("container-card-dark");
// }
