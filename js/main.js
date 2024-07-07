/// <reference types="../@types/jquery" />
//  Navbar toggler
let navToggle = $('#navToggle');
let closeMenu = $('.closeMenu')
let sideBar = $('.menu')
$('.closeMenu,#navToggle').on('click', () => {
    $(sideBar).toggleClass('d-none');
    if ($(sideBar).hasClass('d-none')) {
        $(navToggle).css('left', '10px');
    } else {
        $(navToggle).css('left', '270px');
    }
});

// $(navToggle).on('click', () => {
//     $(sideBar).toggle();
//     if (!$(sideBar).hasClass('d-none')) {
//         $(navToggle).css('left', '270px');
//     } else {
//         $(navToggle).css('left', '10px');
//     }
// })
// $(closeMenu).on('click', () => {
//     $(sideBar).hide();
//     $(navToggle).css('left', '10px');
// })


// singers slider
$('.content p').slideUp();
let headers = $('.content h2');
headers.each(function() {
    $(this).on('click', function() {
        $(this).next('p').slideToggle(500);
    });
});



// change toggler color
// let detailScroll = $('.singers').offset().top
// let contactScroll = $('#contact').offset().top


// $(window).on('scroll', function() {
//     let currentScroll = $(window).scrollTop();
//     let detailScroll = $('#details').offset().top;
//     let contactScroll = $('#contact').offset().top;
//     console.log(currentScroll)
//     if (currentScroll == 418) {
//         $(navToggle).css('backgroundColor', 'red'); 
//     } else if (currentScroll >= contactScroll) {
//         $(navToggle).css('backgroundColor', 'green'); 
//     } else {
//         $(navToggle).css('backgroundColor', 'transparent'); 
//     }
// });
$(window).on('scroll', function() {
  let currentScroll = $(window).scrollTop();
//   console.log(currentScroll);
  if (currentScroll >= 448) {
    $(navToggle).css("backgroundColor", 'red');
  }
  else  {
    $(navToggle).css("backgroundColor", 'rgb(0,0,0,0.4)');
  }
});


// scroll smooth 
$('a[href^="#"]').on('click',function(e){
let aId = e.target.getAttribute('href')
let secOffset = $(aId).offset().top
$("body,html").animate({scrollTop:secOffset},500)
})



// time-counter
   function timeCount(){
     let partytDate = new Date("2024-07-20 22:00:00").getTime()/1000;
    let now = new Date().getTime()/1000
    let displayedTime = partytDate-now
    let days = Math.floor (displayedTime/(3600*24))
    let hours = Math.floor ((displayedTime-(days*(3600*24)))/3600)
    let minutes = Math.floor((displayedTime-(days*(3600*24))-(hours*3600))/60)
    let seconds = Math.floor((displayedTime-(days*(3600*24))-(hours*3600)-(minutes*60)))
    console.log(days,hours,minutes,seconds);
    $('.days').text(days+'d')
    $('.hours').text(hours+'h')
    $('.minutes').text(minutes+'m')
    $('.seconds').text(seconds+'s')
   }
   setInterval(timeCount,1000)


// character counter 
$('textarea').on('keyup', function() {
    let maxChar = 100;
    let entered = $('textarea').val().length; // Use .length without parentheses
    let remaining = maxChar - entered;
    if (remaining > 0) {
        $('#charCounter').text(remaining+'Character Reamining');
    } else {
        $('#charCounter').text('Your available characters are finished');
    }
});
